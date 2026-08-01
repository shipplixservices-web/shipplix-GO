import zlib
import struct
import math

def create_png(width, height, draw_func):
    png_data = b'\x89PNG\r\n\x1a\n'
    ihdr_data = struct.pack('!IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png_data += struct.pack('!I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('!I', ihdr_crc)
    
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)
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
    # Normalized coords centered at (0,0), scale -1.0 to 1.0
    nx = (x - w / 2) / (w / 2)
    ny = (y - h / 2) / (h / 2)

    # Rounded icon background mask
    radius = 0.85
    if math.sqrt(nx*nx + ny*ny) > 0.98:
        return (0, 0, 0, 0)

    # Base background: Pure white
    bg_r, bg_g, bg_b, bg_a = 255, 255, 255, 255

    # Rotate coordinates -25 degrees for tilted ellipse and ribbon
    rad = math.radians(-25)
    rx = nx * math.cos(rad) - ny * math.sin(rad)
    ry = nx * math.sin(rad) + ny * math.cos(rad)

    # 1. Check Blue Sphere/Oval (rx^2 / a^2 + ry^2 / b^2 <= 1)
    # Ellipse semi-axes: a = 0.52, b = 0.70
    a_axis = 0.52
    b_axis = 0.70
    oval_dist = (rx / a_axis)**2 + (ry / b_axis)**2

    in_sphere = oval_dist <= 1.0

    # 2. Check Ribbon Geometry
    # Upper Yellow/Gold Ribbon Crossing Front
    # Ribbon curve: y_center = -0.35 * rx - 0.05
    y_upper_ribbon = -0.32 * rx - 0.05
    upper_ribbon_width = 0.22 - 0.08 * rx
    in_upper_ribbon = abs(ry - y_upper_ribbon) < upper_ribbon_width and (-0.65 < rx < 0.60)

    # Top-Right Red Tail (behind sphere on right side)
    in_red_tail = False
    if rx > 0.35 and -0.45 < ry < 0.1:
        tail_center_y = -0.6 * rx + 0.15
        if abs(ry - tail_center_y) < 0.18:
            in_red_tail = True

    # Lower Yellow Ribbon Crossing Bottom Front
    y_lower_ribbon = -0.15 * rx + 0.35
    lower_ribbon_width = 0.16 + 0.05 * rx
    in_lower_ribbon = abs(ry - y_lower_ribbon) < lower_ribbon_width and (-0.45 < rx < 0.50)

    # Render Layers in 3D Order:
    # A) Red Tail (behind sphere)
    # B) Blue Sphere
    # C) Upper Ribbon (in front of sphere)
    # D) Lower Ribbon (in front of sphere)

    if in_upper_ribbon:
        # Yellow to Gold Gradient with highlight
        ribbon_pos = (ry - y_upper_ribbon) / upper_ribbon_width
        # Gold/Yellow
        r = int(255 - max(0, ribbon_pos * 30))
        g = int(195 - int(ribbon_pos * 50))
        b = int(0)
        return (r, g, b, 255)
    elif in_lower_ribbon and ry > 0.1:
        # Bright Golden Yellow
        return (255, 204, 0, 255)
    elif in_sphere:
        # 3D Shaded Blue Sphere
        # Shading light source top-left (-0.3, -0.3)
        lx, ly = -0.3, -0.3
        dist_from_light = math.sqrt((rx - lx)**2 + (ry - ly)**2)
        shade = max(0.0, min(1.0, 1.0 - dist_from_light / 1.2))
        
        r = int(2 + shade * 15)
        g = int(35 + shade * 50)
        b = int(160 + shade * 90)
        return (r, g, b, 255)
    elif in_red_tail:
        # Red/Orange Gradient Tail
        return (235, 45, 10, 255)
    else:
        return (bg_r, bg_g, bg_b, bg_a)

for size, name in [(192, 'public/pwa-192x192.png'), (512, 'public/pwa-512x512.png'), (180, 'public/apple-touch-icon.png'), (512, 'public/maskable-icon-512x512.png')]:
    data = create_png(size, size, shipplix_official_logo_pixel)
    with open(name, 'wb') as f:
        f.write(data)
print("Icons generated successfully!")
