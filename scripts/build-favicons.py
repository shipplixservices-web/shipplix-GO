import zlib
import struct
import math
import os

def create_png(width, height, draw_func):
    png_data = b'\x89PNG\r\n\x1a\n'
    ihdr_data = struct.pack('!IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png_data += struct.pack('!I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('!I', ihdr_crc)
    
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # filter type 0
        for x in range(width):
            r, g, b, a = draw_func(x, y, width, height)
            raw_data.extend([r, g, b, a])
            
    compressed = zlib.compress(raw_data, 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png_data += struct.pack('!I', len(compressed)) + b'IDAT' + compressed + struct.pack('!I', idat_crc)
    
    iend_crc = zlib.crc32(b'IEND')
    png_data += struct.pack('!I', 0) + b'IEND' + struct.pack('!I', iend_crc)
    return png_data

def shipplix_official_logo_pixel(x, y, w, h):
    # Normalized coordinates centered at (0,0), scale -1.0 to 1.0
    nx = (x - w / 2.0) / (w / 2.0)
    ny = (y - h / 2.0) / (h / 2.0)

    # Outer distance check
    if math.sqrt(nx*nx + ny*ny) > 0.98:
        return (0, 0, 0, 0)

    # Base background: Pure white
    bg_r, bg_g, bg_b, bg_a = 255, 255, 255, 255

    # Rotate coordinates -25 degrees for tilted ellipse and ribbon
    rad = math.radians(-25)
    rx = nx * math.cos(rad) - ny * math.sin(rad)
    ry = nx * math.sin(rad) + ny * math.cos(rad)

    # 1. Check Blue Sphere/Oval
    a_axis = 0.52
    b_axis = 0.70
    oval_dist = (rx / a_axis)**2 + (ry / b_axis)**2

    in_sphere = oval_dist <= 1.0

    # 2. Check Ribbon Geometry
    y_upper_ribbon = -0.32 * rx - 0.05
    upper_ribbon_width = 0.22 - 0.08 * rx
    in_upper_ribbon = abs(ry - y_upper_ribbon) < upper_ribbon_width and (-0.65 < rx < 0.60)

    in_red_tail = False
    if rx > 0.35 and -0.45 < ry < 0.1:
        tail_center_y = -0.6 * rx + 0.15
        if abs(ry - tail_center_y) < 0.18:
            in_red_tail = True

    y_lower_ribbon = -0.15 * rx + 0.35
    lower_ribbon_width = 0.16 + 0.05 * rx
    in_lower_ribbon = abs(ry - y_lower_ribbon) < lower_ribbon_width and (-0.45 < rx < 0.50)

    if in_upper_ribbon:
        ribbon_pos = (ry - y_upper_ribbon) / upper_ribbon_width
        r = int(255 - max(0, ribbon_pos * 30))
        g = int(195 - int(ribbon_pos * 50))
        b = int(0)
        return (r, g, b, 255)
    elif in_lower_ribbon and ry > 0.1:
        return (255, 204, 0, 255)
    elif in_sphere:
        lx, ly = -0.3, -0.3
        dist_from_light = math.sqrt((rx - lx)**2 + (ry - ly)**2)
        shade = max(0.0, min(1.0, 1.0 - dist_from_light / 1.2))
        
        r = int(2 + shade * 15)
        g = int(35 + shade * 50)
        b = int(160 + shade * 90)
        return (r, g, b, 255)
    elif in_red_tail:
        return (235, 45, 10, 255)
    else:
        return (bg_r, bg_g, bg_b, bg_a)

# Generate PNG Sizes
sizes = [
    (16, 'public/favicon-16x16.png'),
    (32, 'public/favicon-32x32.png'),
    (48, 'public/icon-48x48.png'),
    (72, 'public/icon-72x72.png'),
    (96, 'public/icon-96x96.png'),
    (128, 'public/icon-128x128.png'),
    (144, 'public/icon-144x144.png'),
    (152, 'public/icon-152x152.png'),
    (180, 'public/apple-touch-icon.png'),
    (192, 'public/pwa-192x192.png'),
    (384, 'public/icon-384x384.png'),
    (512, 'public/pwa-512x512.png'),
    (512, 'public/maskable-icon-512x512.png')
]

png_buffers = {}
for size, filepath in sizes:
    if size not in png_buffers:
        png_buffers[size] = create_png(size, size, shipplix_official_logo_pixel)
    with open(filepath, 'wb') as f:
        f.write(png_buffers[size])

# Generate ICO file (containing 16x16, 32x32, 48x48)
ico_sizes = [16, 32, 48]
ico_count = len(ico_sizes)
ico_header = struct.pack('<HHH', 0, 1, ico_count)

entries = []
offset = 6 + (ico_count * 16)

images_data = b''
for s in ico_sizes:
    img_data = png_buffers[s]
    img_len = len(img_data)
    # Entry: width, height, colorCount, reserved, planes, bitCount, bytesInRes, imageOffset
    w_byte = s if s < 256 else 0
    h_byte = s if s < 256 else 0
    entry = struct.pack('<BBBBHHII', w_byte, h_byte, 0, 0, 1, 32, img_len, offset)
    entries.append(entry)
    images_data += img_data
    offset += img_len

ico_file_content = ico_header + b''.join(entries) + images_data

with open('public/favicon.ico', 'wb') as f:
    f.write(ico_file_content)

print("All favicons (PNG, ICO, SVG) built successfully in /public!")
