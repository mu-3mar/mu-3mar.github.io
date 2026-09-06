import { Icons } from "@/components/icons";
import {
  HomeIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siLinux,
  siMediapipe,
  siNumpy,
  siOpencv,
  siPandas,
  siPlotly,
  siPytorch,
  siPython,
  siScikitlearn,
  siSqlite,
  siYolo,
} from "simple-icons";

function SimpleIcon({ icon, ...props }: { icon: { path: string; hex: string } } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden="true" {...props}>
      <path d={icon.path} />
    </svg>
  );
}

export const SKILL_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Python: (props) => <SimpleIcon icon={siPython} {...props} />,
  Docker: (props) => <SimpleIcon icon={siDocker} {...props} />,
  SQL: (props) => <SimpleIcon icon={siSqlite} {...props} />,
  Git: (props) => <SimpleIcon icon={siGit} {...props} />,
  GitHub: (props) => <SimpleIcon icon={siGithub} {...props} />,
  Linux: (props) => <SimpleIcon icon={siLinux} {...props} />,
  NumPy: (props) => <SimpleIcon icon={siNumpy} {...props} />,
  Pandas: (props) => <SimpleIcon icon={siPandas} {...props} />,
  "Scikit-learn": (props) => <SimpleIcon icon={siScikitlearn} {...props} />,
  Seaborn: (props) => <SimpleIcon icon={siPython} {...props} />,
  Matplotlib: (props) => <SimpleIcon icon={siPlotly} {...props} />,
  MediaPipe: (props) => <SimpleIcon icon={siMediapipe} {...props} />,
  YOLO: (props) => <SimpleIcon icon={siYolo} {...props} />,
  OpenCV: (props) => <SimpleIcon icon={siOpencv} {...props} />,
  FastAPI: (props) => <SimpleIcon icon={siFastapi} {...props} />,
  PyTorch: (props) => <SimpleIcon icon={siPytorch} {...props} />,
};

export const DATA = {
  name: "Muhammad Ammar",
  initials: "MA",
  url: "https://mu-3mar.github.io",
  location: "",
  locationLink: "",
  description: "Machine Learning Engineer",
  summary:
    "Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "ML & AI",
      items: [
        "Supervised Learning",
        "Classification",
        "Regression",
        "Deep Learning",
        "Feature Engineering",
        "Model Evaluation",
        "Hyperparameter Tuning",
      ],
    },
    {
      category: "Frameworks & Technologies",
      items: ["PyTorch", "FastAPI", "OpenCV", "YOLO", "MediaPipe"],
    },
    {
      category: "Libraries",
      items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    },
    {
      category: "Languages & Tools",
      items: ["Python", "SQL", "Docker", "Git", "GitHub", "Linux"],
    },
    { category: "Languages", items: ["Arabic", "English"] },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mu.3marr@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mu-3mar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mu-3mar",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mu.3marr@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Cellula Technology",
      href: "",
      badges: [],
      location: "Project-based",
      title: "Machine Learning Intern",
      logoUrl: "/cellula-technology.png",
      start: "Oct 2025",
      end: "Dec 2025",
      description:
        "Hotel Booking Cancellation Prediction\n- Worked with 500K+ records.\n- Achieved 87% accuracy and 0.91 F1 on the minority class.\n- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.\n- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.\n\nUber Fare Prediction\n- Worked with 1M+ records.\n- Achieved R² of 0.74 and MAE of 1.01 using gradient boosting.\n- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.\n- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.",
    },
  ],
  education: [
    {
      school: "Mansoura University",
      href: "",
      degree: "Faculty of Computer and Information Science | Bachelor’s Degree in Computer Science",
      logoUrl: "/mansoura-university.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Real-Time Industrial Quality Control System",
      href: "https://github.com/mu-3mar/real-time-industrial-defect-detection-system",
      type: "University Graduation Project",
      dates: "",
      image: "/projects/industrial-quality-control.png",
      video: "",
      description:
        "- Built a two-stage object detection pipeline using YOLO26n, first localizing products and then detecting defects within cropped product regions.\n- Achieved 99.4% validation mAP50 for product detection and 94.2% validation mAP50 for defect detection.\n- Exported PyTorch models through ONNX and implemented dynamic-shape TensorRT conversion, while using asynchronous frame processing for camera inference.\n- Integrated the detection pipeline into a FastAPI service with annotated video streaming, Firebase event storage, and a monitoring dashboard.",
      technologies: ["YOLO26n", "OpenCV", "ONNX", "TensorRT", "FastAPI", "WebRTC", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mu-3mar/real-time-industrial-defect-detection-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "NYC Taxi Trip Duration Prediction",
      href: "https://github.com/mu-3mar/nyc-taxi-duration-prediction",
      type: "",
      dates: "",
      image: "/projects/nyc-taxi.png",
      video: "",
      description:
        "- Built a regression pipeline for predicting NYC taxi trip duration from 1M+ training records, using geospatial and temporal trip features.\n- Engineered Haversine distance and time-based features, applied log transformations and degree-3 polynomial features, and trained a Ridge regression model with scaling.\n- Integrated the trained model into a FastAPI REST API for local trip-duration inference.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mu-3mar/nyc-taxi-duration-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Road Accident Risk Prediction",
      href: "https://github.com/mu-3mar/road-accident-risk-prediction",
      type: "",
      dates: "",
      image: "/projects/road-accident.png",
      video: "",
      description:
        "- Built an end-to-end regression pipeline to predict road accident risk across 517K+ records, comparing Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost.\n- Improved performance over a Linear Regression baseline from 0.804 to 0.887 test R² using HistGradientBoosting with one-hot encoding and engineered numerical/categorical features.\n- Tuned model hyperparameters using RandomizedSearchCV with 5-fold cross-validation and implemented reusable model serialization with batch and single-record inference.",
      technologies: ["Python", "Scikit-learn", "HistGradientBoosting", "XGBoost"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mu-3mar/road-accident-risk-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "AI Body Measurement System",
      href: "https://github.com/mu-3mar/ai-body-measurement",
      type: "",
      dates: "",
      image: "/projects/body-measurement.png",
      video: "",
      description:
        "- Built a multi-input deep learning model combining front and side body images with gender, height, and weight to predict 14 body measurements.\n- Developed a dual-branch CNN regression architecture and achieved a recorded validation MAE of 2.86 across the predicted measurements.\n- Integrated image preprocessing, background removal, and model inference into a FastAPI application with a browser-based interface for measurement and clothing-size recommendations.",
      technologies: ["TensorFlow", "Keras", "Computer Vision", "FastAPI", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mu-3mar/ai-body-measurement",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Sign Language Recognition",
      href: "https://github.com/mu-3mar/sign-language-recognition",
      type: "",
      dates: "",
      image: "/projects/sign-language.png",
      video: "",
      description:
        "- Built a real-time sign language recognition system using MediaPipe hand landmarks and a PyTorch classifier.\n- Exposed recognition through a FastAPI service with a base64-encoded frame endpoint and a webcam client.\n- Added text accumulation with delete and space handling, plus spell correction.",
      technologies: ["MediaPipe", "PyTorch", "FastAPI", "OpenCV", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mu-3mar/sign-language-recognition",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  courses: [
    {
      provider: "DeepLearning.AI",
      items: [
        "Machine Learning Specialization",
        "Deep Learning Specialization",
        "Machine Learning in Production",
      ],
    },
    { provider: "CSkilled", items: ["Machine Learning Diploma"] },
  ],
  hackathons: [],
};
