import math
from PIL import Image, ImageDraw, ImageFont

WIDTH = 1536
HEIGHT = 1024

# Create background with warm espresso
bg = Image.new('RGBA', (WIDTH, HEIGHT), (20, 18, 17, 255))

# Draw ambient radial glow (orange-red #F04B24 at top-center and around center)
glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
center_x, center_y = WIDTH // 2, 400
max_radius = 650
for r in range(max_radius, 0, -8):
    alpha = int(32 * (1 - r / max_radius) ** 1.8)
    glow_draw.ellipse(
        (center_x - r, center_y - int(r * 0.7), center_x + r, center_y + int(r * 0.7)),
        fill=(240, 75, 36, alpha)
    )

bg = Image.alpha_composite(bg, glow)

# Setup drawing
draw = ImageDraw.Draw(bg)

# Fonts
try:
    font_bold_lg = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 38)
    font_bold_md = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
    font_bold_sm = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
    font_reg_md = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 22)
    font_reg_sm = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 17)
    font_mono = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 18)
    font_mono_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf', 20)
except Exception:
    font_bold_lg = ImageFont.load_default()
    font_bold_md = ImageFont.load_default()
    font_bold_sm = ImageFont.load_default()
    font_reg_md = ImageFont.load_default()
    font_reg_sm = ImageFont.load_default()
    font_mono = ImageFont.load_default()
    font_mono_bold = ImageFont.load_default()

# Window Frame
win_x1, win_y1 = 120, 100
win_x2, win_y2 = WIDTH - 120, HEIGHT - 100
win_radius = 28

# Drop shadow for window
shadow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
s_draw = ImageDraw.Draw(shadow)
s_draw.rounded_rectangle((win_x1 - 10, win_y1 + 15, win_x2 + 10, win_y2 + 25), radius=win_radius + 4, fill=(0, 0, 0, 90))
bg = Image.alpha_composite(bg, shadow)
draw = ImageDraw.Draw(bg)

# Window base
draw.rounded_rectangle((win_x1, win_y1, win_x2, win_y2), radius=win_radius, fill=(33, 27, 24, 255), outline=(56, 42, 37, 255), width=2)

# Top Bar / Nav
bar_h = 76
draw.rounded_rectangle((win_x1, win_y1, win_x2, win_y1 + bar_h), radius=win_radius, fill=(42, 34, 30, 255))
draw.rectangle((win_x1, win_y1 + bar_h - 20, win_x2, win_y1 + bar_h), fill=(42, 34, 30, 255))
draw.line((win_x1, win_y1 + bar_h, win_x2, win_y1 + bar_h), fill=(56, 42, 37, 255), width=2)

# Window control dots
draw.ellipse((win_x1 + 30, win_y1 + 28, win_x1 + 46, win_y1 + 44), fill=(240, 75, 36, 220))
draw.ellipse((win_x1 + 56, win_y1 + 28, win_x1 + 72, win_y1 + 44), fill=(220, 150, 60, 200))
draw.ellipse((win_x1 + 82, win_y1 + 28, win_x1 + 98, win_y1 + 44), fill=(74, 222, 128, 200))

# Brand Title in header
draw.text((win_x1 + 130, win_y1 + 22), "HealthLens", font=font_bold_md, fill=(255, 248, 245))
draw.text((win_x1 + 285, win_y1 + 27), "· CDC Diabetes Health Indicators", font=font_reg_sm, fill=(199, 187, 181))

# Pill badges in header right
live_badge_x = win_x2 - 320
draw.rounded_rectangle((live_badge_x, win_y1 + 18, win_x2 - 30, win_y1 + 58), radius=20, fill=(30, 24, 22, 255), outline=(56, 42, 37, 255), width=1)
draw.ellipse((live_badge_x + 18, win_y1 + 34, live_badge_x + 28, win_y1 + 44), fill=(74, 222, 128, 255))
draw.text((live_badge_x + 36, win_y1 + 26), "FastAPI  ·  Docker  ·  Vercel", font=font_reg_sm, fill=(230, 220, 215))

# Content Layout: Two Columns
# Left Column: Input Features & Workflow
# Right Column: Evaluation & Inference Result
col_gap = 36
left_w = 680
left_x1 = win_x1 + 40
left_x2 = left_x1 + left_w
right_x1 = left_x2 + col_gap
right_x2 = win_x2 - 40
content_y1 = win_y1 + bar_h + 30

# Left Card: 21 Health Indicators Overview
draw.rounded_rectangle((left_x1, content_y1, left_x2, content_y1 + 320), radius=18, fill=(42, 34, 30, 220), outline=(56, 42, 37, 255), width=1)
draw.text((left_x1 + 24, content_y1 + 20), "21 CDC BRFSS Health Indicators", font=font_bold_sm, fill=(240, 75, 36))
draw.text((left_x1 + 24, content_y1 + 50), "Standardized survey inputs feeding into Logistic Regression (C=1, lbfgs)", font=font_reg_sm, fill=(169, 154, 147))

# Grid of indicator tags inside left card
indicators = [
    ("Age Group", "60-64 yrs"), ("BMI", "27.0"), ("GenHlth", "Good (3)"),
    ("HighBP", "0 (No)"), ("HighChol", "0 (No)"), ("CholCheck", "1 (Yes)"),
    ("Smoker", "0 (No)"), ("Stroke", "0 (No)"), ("HeartDisease", "0 (No)"),
    ("PhysActivity", "1 (Yes)"), ("Fruits", "1 (Yes)"), ("Veggies", "1 (Yes)")
]

ix_start = left_x1 + 24
iy_start = content_y1 + 90
for idx, (label, val) in enumerate(indicators):
    r_idx = idx // 3
    c_idx = idx % 3
    bx = ix_start + c_idx * 210
    by = iy_start + r_idx * 50
    draw.rounded_rectangle((bx, by, bx + 198, by + 42), radius=10, fill=(33, 27, 24, 255), outline=(65, 48, 42, 255), width=1)
    draw.text((bx + 10, by + 6), label, font=font_reg_sm, fill=(199, 187, 181))
    draw.text((bx + 10, by + 23), val, font=font_bold_sm, fill=(255, 248, 245))

# Left Subcard: Dataset & ML Architecture
subcard_y = content_y1 + 340
draw.rounded_rectangle((left_x1, subcard_y, left_x2, subcard_y + 340), radius=18, fill=(42, 34, 30, 220), outline=(56, 42, 37, 255), width=1)
draw.text((left_x1 + 24, subcard_y + 20), "Dataset & Pipeline Architecture", font=font_bold_sm, fill=(255, 248, 245))

# Metric stats grid
stats = [
    ("229,474", "Cleaned Records"),
    ("24,206", "Duplicates Removed"),
    ("0.60", "Recall Threshold"),
    ("balanced", "Class Weighting")
]
for idx, (val, lbl) in enumerate(stats):
    bx = left_x1 + 24 + (idx % 2) * 315
    by = subcard_y + 60 + (idx // 2) * 85
    draw.rounded_rectangle((bx, by, bx + 295, by + 72), radius=12, fill=(28, 24, 22, 255), outline=(56, 42, 37, 255), width=1)
    draw.text((bx + 18, by + 12), val, font=font_bold_md, fill=(240, 75, 36))
    draw.text((bx + 18, by + 44), lbl, font=font_reg_sm, fill=(169, 154, 147))

# Bottom note in left subcard
draw.rounded_rectangle((left_x1 + 24, subcard_y + 250, left_x2 - 24, subcard_y + 315), radius=10, fill=(50, 32, 26, 180), outline=(240, 75, 36, 120), width=1)
draw.text((left_x1 + 40, subcard_y + 262), "Artifact: models/diabetes_model.joblib (Pipeline + Threshold)", font=font_mono, fill=(255, 220, 210))
draw.text((left_x1 + 40, subcard_y + 288), "Stratified 5-Fold Cross-Validation with Preprocessing Encapsulation", font=font_reg_sm, fill=(199, 187, 181))

# Right Column: Inference Result & Model Evaluation
# Right Card 1: Interactive Prediction Output
draw.rounded_rectangle((right_x1, content_y1, right_x2, content_y1 + 390), radius=18, fill=(42, 34, 30, 220), outline=(56, 42, 37, 255), width=1)
draw.text((right_x1 + 28, content_y1 + 22), "Inference & Risk Assessment", font=font_bold_sm, fill=(255, 248, 245))

# Gauge / Probability Meter Visual
meter_x1 = right_x1 + 28
meter_x2 = right_x2 - 28
meter_y = content_y1 + 72
draw.text((meter_x1, meter_y), "Estimated Risk Probability", font=font_reg_sm, fill=(199, 187, 181))
draw.text((meter_x2 - 90, meter_y), "52.81%", font=font_bold_md, fill=(240, 75, 36))

# Meter Bar
bar_y = meter_y + 36
bar_h = 24
draw.rounded_rectangle((meter_x1, bar_y, meter_x2, bar_y + bar_h), radius=12, fill=(25, 21, 19, 255), outline=(56, 42, 37, 255), width=1)

# Filled progress (52.8%)
fill_w = int((meter_x2 - meter_x1) * 0.5281)
draw.rounded_rectangle((meter_x1 + 2, bar_y + 2, meter_x1 + fill_w, bar_y + bar_h - 2), radius=10, fill=(240, 75, 36, 230))

# Threshold marker line at 60%
thresh_x = meter_x1 + int((meter_x2 - meter_x1) * 0.60)
draw.line((thresh_x, bar_y - 6, thresh_x, bar_y + bar_h + 6), fill=(255, 255, 255, 240), width=3)
draw.text((thresh_x - 42, bar_y + bar_h + 10), "Threshold 0.60", font=font_reg_sm, fill=(199, 187, 181))

# Result Banner
res_y = bar_y + 70
draw.rounded_rectangle((meter_x1, res_y, meter_x2, res_y + 80), radius=14, fill=(30, 45, 35, 220), outline=(74, 222, 128, 120), width=1)
draw.ellipse((meter_x1 + 20, res_y + 32, meter_x1 + 36, res_y + 48), fill=(74, 222, 128, 255))
draw.text((meter_x1 + 48, res_y + 16), "PREDICTION: CLASS 0 (NO DIABETES)", font=font_bold_sm, fill=(74, 222, 128))
draw.text((meter_x1 + 48, res_y + 46), "Positive probability 0.5281 is below decision threshold 0.60", font=font_reg_sm, fill=(200, 230, 210))

# API Endpoint JSON Snippet
api_y = res_y + 100
draw.rounded_rectangle((meter_x1, api_y, meter_x2, api_y + 88), radius=12, fill=(20, 17, 15, 255), outline=(48, 38, 33, 255), width=1)
draw.text((meter_x1 + 16, api_y + 12), "POST /predict -> {\"prediction\": 0, \"probability\": 0.5281, \"threshold\": 0.6}", font=font_mono, fill=(240, 160, 120))
draw.text((meter_x1 + 16, api_y + 38), "Interactive Swagger docs available at /docs & OpenAPI schema at /openapi.json", font=font_reg_sm, fill=(160, 148, 142))
draw.text((meter_x1 + 16, api_y + 60), "Docker image: mu3mar/healthlens-api:latest  (Port 8000)", font=font_mono, fill=(74, 222, 128))

# Right Card 2: Test Evaluation Metrics
eval_y = content_y1 + 410
draw.rounded_rectangle((right_x1, eval_y, right_x2, eval_y + 270), radius=18, fill=(42, 34, 30, 220), outline=(56, 42, 37, 255), width=1)
draw.text((right_x1 + 28, eval_y + 20), "Evaluation Metrics (Test Set @ Threshold 0.6)", font=font_bold_sm, fill=(255, 248, 245))

metrics = [
    ("77.49%", "Accuracy"),
    ("64.2%", "Recall (Primary)"),
    ("36.6%", "Precision"),
    ("0.466", "F1-Score"),
    ("0.4121", "PR-AUC")
]
for idx, (m_val, m_lbl) in enumerate(metrics):
    mx = right_x1 + 24 + idx * 95
    my = eval_y + 60
    draw.rounded_rectangle((mx, my, mx + 88, my + 72), radius=10, fill=(30, 25, 22, 255), outline=(60, 45, 38, 255), width=1)
    draw.text((mx + 10, my + 12), m_val, font=font_bold_sm, fill=(240, 75, 36) if "Recall" in m_lbl else (255, 248, 245))
    draw.text((mx + 10, my + 44), m_lbl.split()[0], font=font_reg_sm, fill=(169, 154, 147))

# Caveat & Disclaimer bar inside evaluation card
caveat_y = eval_y + 152
draw.rounded_rectangle((right_x1 + 24, caveat_y, right_x2 - 24, caveat_y + 98), radius=10, fill=(36, 26, 22, 255), outline=(240, 75, 36, 90), width=1)
draw.text((right_x1 + 40, caveat_y + 12), "! Healthcare Disclaimer & Evaluation Caveat", font=font_bold_sm, fill=(240, 75, 36))
draw.text((right_x1 + 40, caveat_y + 38), "- Educational ML project; not a clinical diagnostic system.", font=font_reg_sm, fill=(220, 210, 205))
draw.text((right_x1 + 40, caveat_y + 64), "- Test set was reused during early exploratory comparisons; metrics may be optimistic.", font=font_reg_sm, fill=(180, 168, 162))

# Save image
bg.convert('RGB').save('public/images/projects/project-healthlens-diabetes-cover.png', 'PNG', quality=95)
print('HealthLens cover generated successfully at public/images/projects/project-healthlens-diabetes-cover.png')
