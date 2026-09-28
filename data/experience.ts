export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
  type: "Work" | "Research" | "Education";
}

export const experiences: ExperienceItem[] = [
  {
    id: "synavos-global",
    role: "AI Engineer",
    company: "Synavos Global",
    location: "Lahore, Pakistan",
    period: "Aug 2025 – Present",
    startDate: "2025-08",
    endDate: "Present",
    current: true,
    description:
      "Engineering end-to-end Computer Vision, Multimodal AI systems, and scalable agentic automation workflows for enterprise deployment.",
    highlights: [
      "Architecting production-ready AI pipelines spanning biometrics, face embeddings search, and real-time anti-spoofing liveness verification.",
      "Developing low-latency inference services with FastAPI, ONNX Runtime, and TensorRT for edge and cloud deployment.",
      "Building intelligent automation agents and multimodal retrieval pipelines integrating LLMs, vector databases (FAISS, Chroma), and custom vision backbones.",
      "Collaborating with cross-functional engineering teams to harden production systems, optimize GPU compute, and maintain robust API contracts.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "InsightFace",
      "FAISS",
      "OpenCV",
      "Docker",
    ],
    type: "Work",
  },
  {
    id: "university-research",
    role: "AI & Machine Learning Researcher",
    company: "University Research Lab",
    location: "Lahore, Pakistan",
    period: "2024 – 2025",
    startDate: "2024-01",
    endDate: "2025-06",
    current: false,
    description:
      "Conducted applied deep learning research focusing on computer vision in healthcare, medical imaging diagnostics, and multimodal classifiers.",
    highlights: [
      "Formulated CNN and Transformer-based classification pipelines for medical MRI volumetric scans with Grad-CAM explainability.",
      "Developed a specialized NLP triage chatbot for ENT and nasal health guidance using conversational AI techniques.",
      "Trained transfer learning models on large-scale datasets (140k+ images) for deepfake detection and wildfire early-warning systems.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Scikit-Learn",
      "Pandas",
    ],
    type: "Research",
  },
  {
    id: "bsai-education",
    role: "BS Artificial Intelligence (BSAI)",
    company: "University Academic Program",
    location: "Lahore, Pakistan",
    period: "Graduated with Honors",
    startDate: "2021",
    endDate: "2025",
    current: false,
    description:
      "Specialized Bachelor of Science in Artificial Intelligence covering deep neural networks, computer vision, natural language processing, and autonomous systems.",
    highlights: [
      "Graduated with honors in BS Artificial Intelligence (BSAI).",
      "Advanced coursework: Computer Vision, Deep Learning, Pattern Recognition, Optimization, and Applied Machine Learning.",
      "Capstone & research focus: Biometric recognition and real-time liveness detection.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Algorithms",
      "Data Structures",
    ],
    type: "Education",
  },
];

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Computer Vision & Biometrics",
    iconName: "Eye",
    skills: [
      { name: "InsightFace & FAISS", level: "Production" },
      { name: "Liveness & Anti-Spoofing (EfficientNet)", level: "Production" },
      { name: "Object Detection & Segmentation (YOLO, OpenCV)", level: "Advanced" },
      { name: "DeepFake Detection (ResNet, MobileNet)", level: "Advanced" },
      { name: "Medical Imaging (MRI/DICOM)", level: "Research" },
    ],
  },
  {
    category: "Deep Learning & AI Frameworks",
    iconName: "BrainCircuit",
    skills: [
      { name: "PyTorch & TorchVision", level: "Advanced" },
      { name: "TensorFlow & Keras", level: "Advanced" },
      { name: "Hugging Face Transformers", level: "Intermediate" },
      { name: "Scikit-Learn & NumPy", level: "Advanced" },
      { name: "Model Optimization (ONNX)", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Systems Engineering",
    iconName: "Server",
    skills: [
      { name: "Python & FastAPI", level: "Production" },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "REST APIs & WebSockets", level: "Advanced" },
      { name: "Docker & Containerization", level: "Intermediate" },
      { name: "Vector Databases & Search", level: "Advanced" },
    ],
  },
  {
    category: "Frontend & Full-Stack",
    iconName: "Layout",
    skills: [
      { name: "TypeScript & JavaScript", level: "Advanced" },
      { name: "Next.js & React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Modern Web Security", level: "Advanced" },
    ],
  },
];
