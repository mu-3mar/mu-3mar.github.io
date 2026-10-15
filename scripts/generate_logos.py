from PIL import Image
import numpy as np
import base64

def main():
    # 1. Load original logo and crop transparent padding
    img = Image.open('public/images/logo.png').convert('RGBA')
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    # Save cropped light logo
    img.save('public/images/logo-light.png')
    img.save('public/images/logo.png')
    
    # Inverted dark logo
    arr = np.array(img)
    inv_arr = arr.copy()
    inv_arr[:, :, 0] = 255 - arr[:, :, 0]
    inv_arr[:, :, 1] = 255 - arr[:, :, 1]
    inv_arr[:, :, 2] = 255 - arr[:, :, 2]
    inv_arr[:, :, 3] = arr[:, :, 3]
    
    dark_img = Image.fromarray(inv_arr)
    dark_img.save('public/images/logo-dark.png')

    # Edge-to-edge max-bleed square icon for tabs (fill 100% of the canvas)
    def make_full_bleed_icon(source_img, size):
        res = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        w, h = source_img.size
        # Fill 100% of the box so it is as large as Gmail, GitHub, etc.
        scale = float(size) / max(w, h)
        nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
        resized = source_img.resize((nw, nh), Image.Resampling.LANCZOS)
        offset_x = (size - nw) // 2
        offset_y = (size - nh) // 2
        res.paste(resized, (offset_x, offset_y), resized)
        return res

    fav16 = make_full_bleed_icon(img, 16)
    fav32 = make_full_bleed_icon(img, 32)
    fav48 = make_full_bleed_icon(img, 48)
    fav64 = make_full_bleed_icon(img, 64)
    
    fav32.save('public/favicon-32.png')
    fav64.save('public/favicon.png')

    # Save multi-size favicon.ico
    fav64.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    # PWA icons
    icon192 = make_full_bleed_icon(img, 192)
    icon192.save('public/icon-192.png')
    icon512 = make_full_bleed_icon(img, 512)
    icon512.save('public/icon-512.png')

    # SVG favicon with embedded high-res PNG
    with open('public/favicon.png', 'rb') as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')
    
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <image href="data:image/png;base64,{b64_data}" width="64" height="64" preserveAspectRatio="xMidYMid meet" />
</svg>'''
    with open('public/favicon.svg', 'w') as f:
        f.write(svg_content)
    print("Full-bleed favicon.ico, favicon.svg, favicon.png generated!")

if __name__ == '__main__':
    main()
