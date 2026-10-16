import base64
from PIL import Image, ImageFilter
import numpy as np

def main():
    # 1. Clean crop original logo using alpha mask > 15
    orig = Image.open('public/images/logo.png').convert('RGBA')
    arr = np.array(orig)
    alpha = arr[:, :, 3]
    y_idx, x_idx = np.where(alpha > 15)
    clean = orig.crop((int(x_idx.min()), int(y_idx.min()), int(x_idx.max()) + 1, int(y_idx.max()) + 1))
    clean.save('public/images/logo.png')
    clean.save('public/images/logo-light.png')

    # Invert for logo-dark
    c_arr = np.array(clean)
    inv = c_arr.copy()
    m = c_arr[:, :, 3] > 10
    inv[m, 0] = 255 - c_arr[m, 0]
    inv[m, 1] = 255 - c_arr[m, 1]
    inv[m, 2] = 255 - c_arr[m, 2]
    Image.fromarray(inv).save('public/images/logo-dark.png')

    cw, ch = clean.size

    # 2. Function to generate complete uncropped bold tab icon
    def make_uncropped_bold_icon(source_img, size):
        margin = 2 if size >= 32 else 1
        target_h = size - (margin * 2)
        scale = float(target_h) / ch
        new_h = target_h
        new_w = max(1, int(cw * scale))
        
        resized = source_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        paste_x = (size - new_w) // 2
        paste_y = (size - new_h) // 2
        
        icon_content = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        icon_content.paste(resized, (paste_x, paste_y), resized)
        
        # Crisp white silhouette stroke around hair so it never vanishes on dark tabs
        c_alpha = np.array(icon_content)[:, :, 3]
        mask = Image.fromarray(c_alpha)
        filter_size = 3 if size <= 64 else 5
        dilated = mask.filter(ImageFilter.MaxFilter(filter_size))
        
        stroke_layer = np.zeros((size, size, 4), dtype=np.uint8)
        stroke_layer[np.array(dilated) > 40] = [255, 255, 255, 255]
        
        final_icon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        final_icon.paste(Image.fromarray(stroke_layer), (0, 0))
        final_icon.paste(icon_content, (0, 0), icon_content)
        return final_icon

    # Generate multi-res favicons
    fav16 = make_uncropped_bold_icon(clean, 16)
    fav32 = make_uncropped_bold_icon(clean, 32)
    fav48 = make_uncropped_bold_icon(clean, 48)
    fav64 = make_uncropped_bold_icon(clean, 64)

    fav32.save('public/favicon-32.png')
    fav48.save('public/favicon-48.png')
    fav64.save('public/favicon.png')
    fav64.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    # PWA icons
    pwa192 = make_uncropped_bold_icon(clean, 192)
    pwa192.save('public/icon-192.png')
    pwa512 = make_uncropped_bold_icon(clean, 512)
    pwa512.save('public/icon-512.png')

    # SVG favicon
    with open('public/favicon.png', 'rb') as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <image href="data:image/png;base64,{b64_data}" width="64" height="64" preserveAspectRatio="xMidYMid meet" />
</svg>'''

    with open('public/favicon.svg', 'w') as f:
        f.write(svg_content)

    print('All complete uncropped favicons generated!')

if __name__ == '__main__':
    main()
