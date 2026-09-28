const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 32, bottom: 32, left: 40, right: 40 },
});

const outputPath = path.join(__dirname, '../public/resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Colors
const PRIMARY = '#1D4ED8';     // Blue-700
const DARK = '#0F172A';        // Slate-900
const TEXT = '#334155';        // Slate-700
const MUTED = '#64748B';       // Slate-500
const LINE = '#E2E8F0';        // Slate-200
const ACCENT = '#7C3AED';      // Violet-700

// Helper functions
function drawDivider(y) {
  doc.strokeColor(LINE).lineWidth(0.75).moveTo(40, y).lineTo(555, y).stroke();
}

function sectionHeading(title, y) {
  doc.fillColor(PRIMARY).fontSize(10.5).font('Helvetica-Bold').text(title.toUpperCase(), 40, y, {
    characterSpacing: 1,
  });
  drawDivider(y + 13);
  return y + 20;
}

// ---------------- HEADER WITH PHOTO ----------------
const photoPath = path.join(__dirname, '../public/profile.jpg');
const hasPhoto = fs.existsSync(photoPath);

if (hasPhoto) {
  doc.save();
  doc.roundedRect(495, 30, 60, 60, 8).clip();
  doc.image(photoPath, 495, 30, { width: 60, height: 60, fit: [60, 60], align: 'center', valign: 'center' });
  doc.restore();
  doc.roundedRect(495, 30, 60, 60, 8).strokeColor(PRIMARY).lineWidth(1.5).stroke();
}

doc.fillColor(DARK).fontSize(21).font('Helvetica-Bold').text('MUHAMMAD HABEEL', 40, 32, { width: 440 });

doc.fillColor(PRIMARY).fontSize(10.5).font('Helvetica-Bold').text('AI ENGINEER · COMPUTER VISION & MULTI-MODAL SYSTEMS', 40, 57, {
  characterSpacing: 0.5,
  width: 440,
});

doc.fillColor(MUTED).fontSize(8).font('Helvetica').text(
  'Lahore, Pakistan  |  Email: habeelnaveed@gmail.com  |  GitHub: github.com/HABEEL007  |  LinkedIn: linkedin.com/in/muhammad-habeel-ai-engineer',
  40,
  74,
  { width: 445 }
);

drawDivider(97);

let y = 105;

// ---------------- SUMMARY ----------------
y = sectionHeading('Professional Summary', y);
doc.fillColor(TEXT).fontSize(8.5).font('Helvetica').text(
  'Results-driven AI Engineer specialized in Computer Vision, Multi-modal Biometrics, Deep Learning pipelines, and high-performance backend architectures. Experienced in building production-grade verification pipelines combining facial recognition (InsightFace), sub-second vector search (FAISS), and custom anti-spoofing liveness classifiers (EfficientNet-B0) deployed via asynchronous FastAPI services.',
  40,
  y,
  { width: 515, lineGap: 2 }
);
y += 38;

// ---------------- EXPERIENCE ----------------
y = sectionHeading('Professional Experience', y);

// Role 1: Synavos Global
doc.fillColor(DARK).fontSize(9.5).font('Helvetica-Bold').text('Synavos Global', 40, y);
doc.fillColor(MUTED).fontSize(8.5).font('Helvetica').text('Lahore, Pakistan', 450, y, { align: 'right' });
y += 12;

doc.fillColor(PRIMARY).fontSize(9).font('Helvetica-Bold').text('AI Engineer', 40, y);
doc.fillColor(MUTED).fontSize(8).font('Helvetica').text('Aug 2025 – Present', 450, y, { align: 'right' });
y += 13;

const synavosPoints = [
  'Architected and deployed production-ready multi-modal biometric attendance pipelines integrating InsightFace Buffalo_L (512-D embeddings), FAISS vector similarity search, and secondary iris pattern verification.',
  'Developed and trained a custom EfficientNet-B0 anti-spoofing classifier on a self-collected dataset to detect print attacks, screen replays, and physical masks with minimal latency.',
  'Engineered scalable, asynchronous FastAPI microservices containerized with Docker, optimized for low-latency edge camera ingestion and GPU compute utilization.',
  'Integrated multimodal retrieval pipelines with vector databases (FAISS, Chroma) to empower intelligent automation workflows and internal analytical agents.',
];

synavosPoints.forEach((point) => {
  doc.fillColor(PRIMARY).fontSize(7.5).font('Helvetica-Bold').text('•', 45, y);
  doc.fillColor(TEXT).fontSize(8).font('Helvetica').text(point, 56, y, { width: 495, lineGap: 1.5 });
  y += doc.heightOfString(point, { width: 495, lineGap: 1.5 }) + 2.5;
});

y += 3;

// Role 2: Research Lab
doc.fillColor(DARK).fontSize(9.5).font('Helvetica-Bold').text('University Applied AI Research Lab', 40, y);
doc.fillColor(MUTED).fontSize(8.5).font('Helvetica').text('Lahore, Pakistan', 450, y, { align: 'right' });
y += 12;

doc.fillColor(PRIMARY).fontSize(9).font('Helvetica-Bold').text('AI & Deep Learning Researcher', 40, y);
doc.fillColor(MUTED).fontSize(8).font('Helvetica').text('2024 – 2025', 450, y, { align: 'right' });
y += 13;

const researchPoints = [
  'Conducted research on volumetric medical MRI scan classification and anomaly segmentation using CNN and Transformer backbones with Grad-CAM visual interpretability heatmaps.',
  'Designed a conversational NLP triage system for ENT and nasal health guidance leveraging Hugging Face Transformers.',
  'Trained transfer learning models (MobileNetV2, ResNet50) on 140k+ Kaggle face datasets to classify and detect deepfake synthesis artifacts.',
];

researchPoints.forEach((point) => {
  doc.fillColor(PRIMARY).fontSize(7.5).font('Helvetica-Bold').text('•', 45, y);
  doc.fillColor(TEXT).fontSize(8).font('Helvetica').text(point, 56, y, { width: 495, lineGap: 1.5 });
  y += doc.heightOfString(point, { width: 495, lineGap: 1.5 }) + 2.5;
});

y += 3;

// ---------------- KEY PROJECTS ----------------
y = sectionHeading('Selected Engineering Projects', y);

const projects = [
  {
    name: 'BioAttend — Multi-Modal Biometric Attendance Pipeline',
    tech: 'Python, FastAPI, InsightFace, FAISS, EfficientNet-B0, OpenCV',
    desc: 'Complete verification system featuring face embeddings search across 10,000+ IDs, iris verification, and real-time anti-spoofing liveness detection.',
  },
  {
    name: 'Lahore TravelMate — Tourism & Heritage Platform',
    tech: 'Node.js, Express, JavaScript, MongoDB, TailwindCSS',
    desc: 'Full-stack cultural discovery platform with hardened security middleware, rate limiting, and interactive itinerary routing.',
  },
  {
    name: 'DeepFake Detection Engine — Transfer Learning Benchmark',
    tech: 'Python, TensorFlow, MobileNetV2, ResNet50, OpenCV',
    desc: 'Deep learning classification notebook on Kaggle 140k dataset benchmarking residual architectures for synthetic facial boundary artifact detection.',
  },
];

projects.forEach((proj) => {
  doc.fillColor(DARK).fontSize(8.5).font('Helvetica-Bold').text(proj.name, 40, y);
  doc.fillColor(MUTED).fontSize(7.5).font('Helvetica-Oblique').text(`[${proj.tech}]`, 40, y + 10);
  doc.fillColor(TEXT).fontSize(8).font('Helvetica').text(proj.desc, 40, y + 20, { width: 515, lineGap: 1.5 });
  y += 34;
});

// ---------------- SKILLS ----------------
y = sectionHeading('Core Technical Competencies', y);

const skills = [
  { category: 'Computer Vision & AI', items: 'InsightFace, FAISS, EfficientNet, OpenCV, DeepFake Detection, Transfer Learning, YOLO' },
  { category: 'Frameworks & Deep Learning', items: 'PyTorch, TensorFlow, Keras, Hugging Face Transformers, Scikit-Learn, NumPy, ONNX' },
  { category: 'Backend & Infrastructure', items: 'Python (FastAPI, Flask), Node.js, Express, REST APIs, WebSockets, Docker, Git' },
  { category: 'Frontend & Full-Stack', items: 'TypeScript, JavaScript, Next.js 14, React, Tailwind CSS, Responsive Web Design' },
];

skills.forEach((skill) => {
  doc.fillColor(DARK).fontSize(8).font('Helvetica-Bold').text(`${skill.category}: `, 40, y, { continued: true });
  doc.fillColor(TEXT).fontSize(8).font('Helvetica').text(skill.items);
  y += 12;
});

y += 2;

// ---------------- EDUCATION ----------------
y = sectionHeading('Education', y);
doc.fillColor(DARK).fontSize(9).font('Helvetica-Bold').text('Bachelor of Science in Artificial Intelligence (BSAI)', 40, y);
doc.fillColor(MUTED).fontSize(8).font('Helvetica').text('Graduated with Honors', 450, y, { align: 'right' });
y += 11;
doc.fillColor(TEXT).fontSize(8).font('Helvetica').text('Specialization: Deep Neural Networks, Computer Vision & Multimodal Systems', 40, y);

doc.end();
console.log('Resume PDF generated successfully at:', outputPath);
