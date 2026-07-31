import zlib
import struct
import math

def create_png(width, height, draw_func):
    # PNG header
    png_data = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('!IIBBBBB', width, height, 8, 6, 0, 0, 0) # 8-bit RGBA
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png_data += struct.pack('!I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('!I', ihdr_crc)
    
    # IDAT chunk (raw pixel data)
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # filter type 0 (None)
        for x in range(width):
            r, g, b, a = draw_func(x, y, width, height)
            raw_data.extend([r, g, b, a])
            
    compressed = zlib.compress(raw_data, 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png_data += struct.pack('!I', len(compressed)) + b'IDAT' + compressed + struct.pack('!I', idat_crc)
    
    # IEND chunk
    iend_crc = zlib.crc32(b'IEND')
    png_data += struct.pack('!I', 0) + b'IEND' + struct.pack('!I', iend_crc)
    
    return png_data

def shipplix_icon_pixel(x, y, w, h):
    # Background: Shipplix Navy (#0b1736) with rounded corners
    nx, ny = x / w, y / h
    
    # Rounded rectangle mask
    radius = 0.22
    dx = max(0, abs(nx - 0.5) - (0.5 - radius))
    dy = max(0, abs(ny - 0.5) - (0.5 - radius))
    dist = math.sqrt(dx*dx + dy*dy)
    if dist > radius:
        return (0, 0, 0, 0) # transparent outside rounded box
        
    # Navy blue gradient background
    bg_r = int(11 + ny * 15)
    bg_g = int(23 + ny * 20)
    bg_b = int(54 + ny * 35)
    
    # Draw airplane / S shape in center (Shipplix yellow #fbbf24 & cyan/white)
    # Center coords: cx, cy in [-1, 1]
    cx = (nx - 0.5) * 2
    cy = (ny - 0.5) * 2
    
    # Airplane wing / arrow shape
    # Simple sleek supersonic plane shape pointing top-right
    # Rotate (cx, cy) by -35 deg
    rad = math.radians(-35)
    rcx = cx * math.cos(rad) - cy * math.sin(rad)
    rcy = cx * math.sin(rad) + cy * math.cos(rad)
    
    # Check if inside airplane fuselage / wings
    in_plane = False
    in_yellow = False
    
    # Main wing triangle
    if -0.55 < rcy < 0.55 and -0.12 - (0.55 - rcy)*0.45 < rcx < 0.12 + (0.55 - rcy)*0.1:
        in_plane = True
    # Fuselage body
    if -0.65 < rcy < 0.65 and abs(rcx) < 0.13:
        in_plane = True
    # Tail wing / accent streak (Yellow)
    if -0.45 < rcy < -0.1 and -0.45 < rcx < -0.1:
        if abs(rcx - rcy) < 0.15:
            in_yellow = True

    if in_yellow:
        return (251, 191, 36, 255) # Shipplix Yellow #fbbf24
    elif in_plane:
        return (255, 255, 255, 255) # Pure White airplane
    else:
        # Subtle glowing ring around center
        r_dist = math.sqrt(cx*cx + cy*cy)
        if 0.72 < r_dist < 0.78:
            return (251, 191, 36, 200) # Gold border ring
        return (bg_r, bg_g, bg_b, 255)

# Generate 192x192, 512x512, 180x180
for size, name in [(192, 'public/pwa-192x192.png'), (512, 'public/pwa-512x512.png'), (180, 'public/apple-touch-icon.png'), (512, 'public/maskable-icon-512x512.png')]:
    data = create_png(size, size, shipplix_icon_pixel)
    with open(name, 'wb') as f:
        f.write(data)
print("Icons generated successfully!")
