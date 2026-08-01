import zlib
import struct
import math
import os

def generate_svg_logo():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- 3D Sphere Shading -->
    <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#025eff" />
      <stop offset="40%" stop-color="#0239c4" />
      <stop offset="85%" stop-color="#011873" />
      <stop offset="100%" stop-color="#000d47" />
    </radialGradient>

    <!-- Top Red Ribbon Edge -->
    <linearGradient id="redEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff1a00" />
      <stop offset="60%" stop-color="#ff4400" />
      <stop offset="100%" stop-color="#ff7d00" />
    </linearGradient>

    <!-- Main Yellow Ribbon Front -->
    <linearGradient id="yellowRibbonGrad" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#ffea00" />
      <stop offset="30%" stop-color="#ffcc00" />
      <stop offset="75%" stop-color="#f5a000" />
      <stop offset="100%" stop-color="#d97700" />
    </linearGradient>

    <!-- Lower Ribbon Sweep -->
    <linearGradient id="lowerRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe600" />
      <stop offset="50%" stop-color="#ffb700" />
      <stop offset="100%" stop-color="#e08200" />
    </linearGradient>
  </defs>

  <g transform="translate(256 256) rotate(-28) translate(-256 -256)">
    <!-- Top-Right Red Ribbon Tip (Behind) -->
    <path d="M 310 110 C 370 100 425 140 435 195 C 440 225 410 245 365 255 C 390 220 395 180 355 145 Z" fill="url(#redEdgeGrad)" />

    <!-- Tilted Blue 3D Spheroid -->
    <ellipse cx="256" cy="256" rx="145" ry="192" fill="url(#sphereGrad)" />

    <!-- Main Upper Yellow Ribbon Crossing Front -->
    <path d="M 405 180 C 420 215 390 250 325 285 C 235 335 125 375 55 380 C 35 380 38 345 68 320 C 135 265 255 190 375 148 C 395 140 420 142 432 158 Z" fill="url(#yellowRibbonGrad)" />

    <!-- Left Ribbon Fold/Loop -->
    <path d="M 55 380 C 35 380 38 345 68 320 C 95 300 120 325 115 350 C 110 370 85 380 55 380 Z" fill="#d97700" />

    <!-- Lower Yellow Ribbon Sweeping Front -->
    <path d="M 90 355 C 135 370 215 390 315 380 C 385 373 420 335 405 295 C 390 330 350 353 285 360 C 195 370 125 355 90 355 Z" fill="url(#lowerRibbonGrad)" />
  </g>
</svg>"""

# Save SVG to public/favicon.svg
svg_content = generate_svg_logo()
with open('public/favicon.svg', 'w') as f:
    f.write(svg_content)

print("SVG Logo created successfully!")
