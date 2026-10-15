# Machine Learning Engineer Portfolio

A modern, high-performance portfolio built with **React 19**, **TypeScript**, and **Vite**, fully refactored for complete data decoupling, customization, and dark/light mode support.

---

## 🚀 دليل الإعداد والتخصيص (Configuration Guide)

تم فصل جميع البيانات والديزاين عن كود التطبيق تماماً داخل المجلد [`src/config/`](src/config/). لا تحتاج إلى تعديل أي كود برمجى لتغيير أي محتوى في الموقع!

### 1. إضافة أو تعديل المشاريع (`src/config/projects.config.ts`)
لإضافة مشروع جديد، ببساطة انسخ كائن جديد وأضفه إلى مصفوفة `projects`:
```ts
{
  slug: 'my-new-project',                      // رابط المشروع: /projects/my-new-project
  title: 'Real-Time Object Detection',        // عنوان المشروع
  type: 'Computer Vision',                    // نوع المشروع أو التصنيف الفرعي
  period: '2026',                             // سنة أو فترة المشروع
  category: 'Computer Vision',                // الفئة (تظهر تلقائياً في فلاتر المشاريع)
  featured: true,                             // إذا true يظهر تلقائياً في الصفحة الرئيسية
  description: 'A brief overview...',         // وصف مختصر للمشروع
  problem: 'The business problem...',         // المشكلة
  solution: 'The technical solution...',      // الحل
  contribution: 'What you specifically did',  // مساهمتك
  tech: ['YOLO', 'PyTorch', 'FastAPI'],       // التقنيات (Badges)
  githubUrl: 'https://github.com/...',        // رابط GitHub
  demoUrl: 'https://...',                     // رابط تجربة حية (اختياري)
  image: '/images/projects/your-cover.png',   // مسار الصورة في public/
}
```
> **ملاحظة:** عند إضافة أي مشروع، سيتم تلقائياً:
> - إنشاء بطاقة له في صفحة المشاريع.
> - إضافته إلى تصنيفات الفلترة (Filter Chips).
> - عرضه في الصفحة الرئيسية إذا تم تحديد `featured: true`.
> - إنشاء صفحة تفاصيل مخصصة له على الرابط `/projects/:slug`.
> - اقتراحه في المشاريع ذات الصلة (Related Projects).

---

### 2. تخصيص الديزاين والألوان واللوجو (`src/config/theme.config.ts`)
يمكنك التحكم في وضع العرض الافتراضي، مسارات اللوجو، والصورة الشخصية، وألوان الدارك مود واللايت مود:
```ts
export const themeConfig = {
  defaultTheme: 'dark', // 'dark' | 'light' | 'system'

  branding: {
    logoType: 'image',                               // 'image' أو 'text'
    logoUrl: '/images/logo-placeholder.svg',         // مسار اللوجو
    logoText: 'MA',                                  // النص البديل / المونوغرام
    avatarUrl: '/images/avatar-placeholder.svg',     // مسار صورتك الشخصية
    avatarPlaceholder: '/images/avatar-placeholder.svg',
    projectPlaceholder: '/images/projects/placeholder-project.svg',
  },

  colors: {
    dark: {
      accent: '#FFC006', // اللون الذهبي المميز للدارك مود
      bg: '#111111',
      /* ... */
    },
    light: {
      accent: '#d97706', // لون دافئ مريح مع خلفيات اللايت مود
      bg: '#f8fafc',
      /* ... */
    },
  },
}
```

---

### 3. الصورة الشخصية واللوجو (Placeholders)
تم استبدال صورتك واللوجو القديم بـ **SVG Placeholders** احترافية وجاهزة:
- **الصورة الشخصية:** ضع صورتك في `public/images/` وعدّل `avatarUrl` في `src/config/theme.config.ts` (مثلاً: `avatarUrl: '/images/portrait.png'`).
- **اللوجو:** ضع ملف اللوجو في `public/images/` وعدّل `logoUrl` في `src/config/theme.config.ts`.
- **أيقونة الموقع (Favicon):** موجودة في `public/favicon.svg`.

---

### 4. البيانات الشخصية وروابط التواصل (`src/config/profile.config.ts`)
لتعديل اسمك، نبذتك التعريفية، بيانات التواصل، ورابط الـ CV:
- `name`: اسمك بالكامل.
- `title`: مسماك الوظيفي.
- `heroSummary`: النبذة المختصرة في واجهة الموقع.
- `contact`: البريد الإلكتروني، رقم الهاتف.
- `socials`: روابط GitHub, LinkedIn, Kaggle.
- `resume`: رابط واسم ملف الـ CV.

---

### 5. المهارات والخبرات (`src/config/skills.config.ts` & `src/config/experience.config.ts`)
- **المهارات:** لتعديل الكروت الرئيسية والـ Tags وشعارات التقنيات الطافية في الخلفية.
- **الخبرات:** لتعديل فترات العمل، المشاريع داخل كل شركة، والشهادات التعليمية.

---

## 🛠️ أوامر التشغيل والتطوير (Scripts)

```bash
# تشغيل خادم التطوير مع الـ API
npm run dev

# فحص الأخطاء (Linting)
npm run lint

# بناء نسخة الإنتاج
npm run build

# معاينة نسخة الإنتاج
npm run preview
```

---

## 📁 هيكلية المشروع النظيفة (Project Architecture)

```
mu-3mar.github.io/
├── public/
│   ├── favicon.svg              # أيقونة المتصفح
│   ├── images/
│   │   ├── logo-placeholder.svg   # بليس هولدر اللوجو
│   │   ├── avatar-placeholder.svg # بليس هولدر الصورة الشخصية
│   │   └── projects/              # صور المشاريع
│   └── Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf
├── src/
│   ├── components/
│   │   ├── common/              # مكونات عامة (Cards, Header, Images, Logos)
│   │   └── layout/              # مكونات التخطيط (Navbar, Footer, ThemeToggle)
│   ├── config/                  # جميع الكونفيجات والبيانات المفصولة
│   │   ├── profile.config.ts    # البيانات الشخصية
│   │   ├── projects.config.ts   # قائمة المشاريع
│   │   ├── theme.config.ts      # ألوان وستايل الدارك واللايت مود
│   │   ├── skills.config.ts     # المهارات والتقنيات
│   │   ├── experience.config.ts # الخبرات والتعليم
│   │   └── navigation.config.ts # عناصر القوائم
│   ├── context/
│   │   └── ThemeContext.tsx     # إدارة التبديل بين الدارك واللايت مود
│   ├── pages/                   # صفحات الموقع المنفصلة
│   ├── styles/
│   │   ├── theme.css            # متغيرات الثيمات
│   │   └── main.css             # الستايل المنسق بدون تكرار
│   ├── App.tsx                  # راوتر خفيف ونظيف
│   └── main.tsx                 # نقطة الدخول
```
