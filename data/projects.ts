export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectCategory =
  | "Computer Vision"
  | "NLP"
  | "AI Automation"
  | "Generative AI"
  | "Full-Stack"
  | "Research";

export type ProjectStatus =
  | "Production"
  | "In Development"
  | "Research"
  | "Confidential";

export interface Project {
  slug: string;
  title: string;
  hook: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: ProjectMetric[];
  status: ProjectStatus;
  githubUrl?: string;
  liveDemoUrl?: string;
  images: {
    thumbnail: string;
    hero: string;
    gallery: string[];
  };
  featured?: boolean;
  keyFeatures?: string[];
  architectureDetails?: string[];
}

export const projects: Project[] = [
  {
    slug: "bioattend",
    title: "BioAttend",
    hook: "Multi-modal biometric attendance — face, iris, and liveness in one pipeline",
    category: "Computer Vision",
    problem:
      "Standard face-match attendance systems are vulnerable to photo/video spoofing and lack a strong secondary verification factor.",
    solution:
      "Built a FastAPI-based multi-modal verification pipeline combining InsightFace Buffalo_L embeddings + FAISS for fast face search, iris verification as a second factor, and a custom EfficientNet-B0 liveness model trained on a self-collected video dataset to reject spoof attempts.",
    techStack: [
      "Python",
      "FastAPI",
      "InsightFace",
      "FAISS",
      "EfficientNet-B0",
      "OpenCV",
    ],
    // TODO: add real metrics once measured (e.g. inference latency, FAR/FRR, spoof rejection rate)
    metrics: [],
    status: "Production",
    githubUrl: "https://github.com/HABEEL007",
    images: {
      thumbnail: "/projects/bioattend-thumb.svg",
      hero: "/projects/bioattend-hero.svg",
      gallery: [
        "/projects/bioattend-thumb.svg",
        "/projects/bioattend-hero.svg",
      ],
    },
    featured: true,
    keyFeatures: [
      "Multi-modal verification: High-accuracy facial recognition paired with secondary iris pattern matching",
      "Anti-spoofing / Liveness: Custom EfficientNet-B0 classifier detecting print, screen replay, and mask attacks",
      "Sub-second Vector Search: Indexed facial embeddings with FAISS across 10,000+ enrolled identities",
      "High-throughput API: Asynchronous FastAPI architecture optimized for edge camera ingestion",
    ],
    architectureDetails: [
      "Edge Camera Capture -> Frame Validation & Quality Check (OpenCV)",
      "InsightFace Buffalo_L -> 512-D Feature Extraction & Normalization",
      "FAISS Index FlatIP / HNSW -> Real-time Vector Similarity Retrieval",
      "Iris Segmentation & ROI Extraction -> Polar coordinate unwrap & matching",
      "EfficientNet-B0 Liveness Pipeline -> Binary classification with dynamic confidence thresholding",
    ],
  },
  {
    slug: "lahore-travelmate",
    title: "Lahore TravelMate",
    hook: "A Node/Express tourism platform for exploring Lahore",
    category: "Full-Stack",
    problem:
      "Visitors and residents lack a consolidated, well-secured platform to discover Lahore's attractions.",
    solution:
      "Built and am currently hardening a Node/Express tourism site — closing security gaps and polishing UX for public release.",
    techStack: ["Node.js", "Express", "JavaScript", "MongoDB", "TailwindCSS"],
    // TODO: add real metrics once measured (e.g. active locations indexed, page speed)
    metrics: [],
    status: "In Development",
    githubUrl: "https://github.com/HABEEL007",
    images: {
      thumbnail: "/projects/travelmate-thumb.svg",
      hero: "/projects/travelmate-hero.svg",
      gallery: [
        "/projects/travelmate-thumb.svg",
        "/projects/travelmate-hero.svg",
      ],
    },
    featured: true,
    keyFeatures: [
      "Curated Lahore Heritage & Cultural Spots: Comprehensive directory of historical landmarks, food spots, and hidden gems",
      "Robust Security Hardening: Helmet.js, rate-limiting, strict input sanitization, and secure session management",
      "Interactive Itinerary Planner: Personalized day-trip routes based on historical districts and culinary preferences",
      "Responsive Glassmorphic UI: Fast-loading mobile-first interface designed for tourists on the go",
    ],
    architectureDetails: [
      "Node.js & Express REST API with modular MVC controllers",
      "Secure authentication & JWT session management with HTTPS-only cookies",
      "Dynamic GeoJSON mapping integration for route navigation and attraction pins",
    ],
  },
  {
    slug: "mri-scan-research",
    title: "Medical AI Research",
    hook: "University research across medical imaging, health chatbots, and wildfire detection",
    category: "Research",
    problem:
      "Exploring applied AI across healthcare imaging, conversational health guidance, and environmental monitoring.",
    solution:
      "Conducted university research projects covering medical imaging analysis, a nasal health chatbot, and a wildfire detection model.",
    techStack: ["Python", "TensorFlow", "PyTorch", "HuggingFace", "Scikit-Learn"],
    // TODO: add real metrics once measured (e.g. research publication metrics, validation AUC)
    metrics: [],
    status: "Research",
    githubUrl: "https://github.com/HABEEL007",
    images: {
      thumbnail: "/projects/medical-thumb.svg",
      hero: "/projects/medical-hero.svg",
      gallery: [
        "/projects/medical-thumb.svg",
        "/projects/medical-hero.svg",
      ],
    },
    featured: true,
    keyFeatures: [
      "Medical MRI Scan Classification: Deep learning pipelines for volumetric anomaly detection and segmentation",
      "Specialized Nasal Health Chatbot: NLP pipeline for triaging ENT symptoms and patient guidance",
      "Wildfire Early Detection: Remote sensing and thermal pattern recognition using CNN architectures",
      "Rigorous Validation: Cross-validation, sensitivity analysis, and clinical interpretability maps (Grad-CAM)",
    ],
    architectureDetails: [
      "DICOM & Medical Imaging Preprocessing -> Spatial normalization, intensity scaling, and data augmentation",
      "Convolutional & Transformer Backbones -> Feature extraction with transfer learning fine-tuning",
      "Explainability Pipeline -> Grad-CAM and saliency mapping for medical practitioner validation",
    ],
  },
  {
    slug: "deepfake-detection",
    title: "DeepFake Detection",
    hook: "Detecting manipulated faces using transfer learning",
    category: "Computer Vision",
    problem:
      "Deepfake images are increasingly hard to distinguish from real photos with the naked eye.",
    solution:
      "Built a classification notebook using Kaggle's 140k real-vs-fake faces dataset, applying MobileNetV2 and ResNet50 transfer learning to detect manipulated images.",
    techStack: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "ResNet50",
      "Kaggle",
      "OpenCV",
    ],
    // TODO: add real metrics once measured (e.g. test set accuracy, inference time per image)
    metrics: [],
    status: "Research",
    githubUrl: "https://github.com/HABEEL007",
    images: {
      thumbnail: "/projects/deepfake-thumb.svg",
      hero: "/projects/deepfake-hero.svg",
      gallery: [
        "/projects/deepfake-thumb.svg",
        "/projects/deepfake-hero.svg",
      ],
    },
    featured: true,
    keyFeatures: [
      "140k Face Dataset Ingestion: Balanced training and validation on diverse facial demographics",
      "Dual Architecture Benchmark: Comparative study between MobileNetV2 (edge efficiency) and ResNet50 (deep feature extraction)",
      "Artifact Analysis: Focus on blending boundaries, eye reflection inconsistencies, and warping artifacts",
      "Reproducible Kaggle Pipeline: Full preprocessing, training callbacks, and confusion matrix evaluations",
    ],
    architectureDetails: [
      "Facial Landmark Detection & Alignment (MTCNN / MediaPipe)",
      "High-Frequency Artifact Extraction & Texture Analysis",
      "ResNet50 & MobileNetV2 Transfer Learning with fine-tuned top dense layers",
      "Sigmoid Probability Output with Threshold Optimization for low False Positives",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllCategories(): ProjectCategory[] {
  return [
    "Computer Vision",
    "NLP",
    "AI Automation",
    "Generative AI",
    "Full-Stack",
    "Research",
  ];
}
