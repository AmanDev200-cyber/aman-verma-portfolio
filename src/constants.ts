import { Project, Skill, SkillCategory, Achievement, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export const SKILLS: Skill[] = [
  // Cybersecurity
  { name: 'Penetration Testing', category: SkillCategory.SECURITY, highlight: true },
  { name: 'ML-based Detection Systems', category: SkillCategory.SECURITY, highlight: true },
  { name: 'Applied Cryptography', category: SkillCategory.SECURITY },
  { name: 'Digital & Network Forensics', category: SkillCategory.SECURITY },

  // Frontend
  { name: 'React / Next.js', category: SkillCategory.FRONTEND, highlight: true },
  { name: 'TypeScript', category: SkillCategory.FRONTEND },
  { name: 'Data Visualization (Three.js / D3)', category: SkillCategory.FRONTEND },

  // Backend
  { name: 'Python (Scripting & Automation)', category: SkillCategory.BACKEND, highlight: true },
  { name: 'Node.js', category: SkillCategory.BACKEND },
  { name: 'Firebase / Cloud Services', category: SkillCategory.BACKEND },
  { name: 'ML/AI (TensorFlow, scikit-learn)', category: SkillCategory.BACKEND },

  // DevOps & Tools
  { name: 'Docker (Containerization)', category: SkillCategory.TOOLS },
  { name: 'Burp Suite', category: SkillCategory.TOOLS, highlight: true },
  { name: 'Git / GitHub Actions', category: SkillCategory.TOOLS },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'safe-docs',
    title: 'Safe Docs',
    tagline: 'Legal Document Analyzer & Forgery Detection',
    problem: 'Legal documents are often long, complex, and vulnerable to subtle tampering. Manual verification is time-consuming and prone to human error, especially when identifying missing clauses, altered formatting, or document forgery.',
    whyFails: [
      'Most tools focus only on OCR, not legal logic',
      'No integration of forgery detection + clause analysis',
      'Lack of visual forensic checks (ink, layout, inconsistencies)'
    ],
    solution: 'Safe Docs is an AI-powered legal document analyzer that combines OCR, NLP, and image forensics to automatically analyze contracts, detect suspicious patterns, and generate a forensic-grade legal report.',
    systemApproach: [
      'OCR extracts text from PDFs and images',
      'NLP analyzes legal clauses and structure',
      'Image processing checks forgery signals',
      'Results are compiled into a structured report'
    ],
    technicalDecisions: [
      'Tesseract OCR for image-based text',
      'PyMuPDF for multi-page PDFs',
      'spaCy + keyword rules for legal clause detection',
      'OpenCV for ink & layout inconsistency analysis',
      'Optional AI summarization using GPT-based models'
    ],
    specialSection: {
      title: 'Security & Intelligence Features',
      items: [
        'Detects missing clauses (termination, payment, non-compete)',
        'Flags repeated or suspicious legal language',
        'Identifies inconsistent fonts & layouts',
        'Analyzes security inks (UV, fluorescent, photochromic)'
      ]
    },
    outcome: [
      'Automated legal document verification',
      'Reduced manual review effort',
      'Generated downloadable forensic PDF reports'
    ],
    learnings: [
      'Combining NLP with image forensics significantly improves trust',
      'Legal AI must balance automation with explainability'
    ],
    techStack: ['Python', 'OpenCV', 'spaCy', 'Tesseract', 'NLP'],
    repoUrl: 'https://github.com/AmanDev200-cyber/Safe_docs',
    imagePlaceholder: 'https://picsum.photos/seed/safedocs/800/600',
    featured: true,
  },
  {
    id: '2',
    slug: 'cloud-file-sharing',
    title: 'Cloud Based File Sharing',
    tagline: 'Secure Encrypted Cloud File Sharing Platform',
    problem: 'Traditional cloud storage solutions expose users to privacy risks, weak access control, and centralized trust failures.',
    whyFails: [
      'Server-side access to files',
      'Weak encryption transparency',
      'Over-privileged sharing models'
    ],
    solution: 'A secure cloud-based file-sharing system emphasizing encryption, authentication, and controlled access, built using Firebase.',
    systemApproach: [
      'Firebase Authentication for user identity',
      'Encrypted file storage',
      'Controlled file access permissions'
    ],
    technicalDecisions: [
      'Firebase for scalability and reliability',
      'Encryption before storage',
      'Role-based access control'
    ],
    specialSection: {
      title: 'Security Focus',
      items: [
        'No unauthorized file access',
        'Secure authentication flow',
        'Controlled sharing permissions'
      ]
    },
    outcome: [
      'Secure and scalable file-sharing platform',
      'Demonstrated practical cloud security principles'
    ],
    learnings: [
      'Security must be designed before, not after, implementation',
      'Simplicity improves security and usability'
    ],
    techStack: ['React', 'Firebase', 'Encryption', 'Cloud Security'],
    repoUrl: 'https://github.com/AmanDev200-cyber/Cloud_based_file_sharing',
    imagePlaceholder: 'https://picsum.photos/seed/cloudfiles/800/601',
    featured: true,
  },
  {
    id: '3',
    slug: 'carbon-auditor',
    title: 'Carbon Auditor',
    tagline: 'Personal Carbon Footprint Forensic Analyzer',
    problem: 'Individuals lack precise, scientific tools to quantify their long-term carbon impact relative to global infrastructure and policy transitions.',
    whyFails: [
      'Oversimplified calculators',
      'No long-term accumulation modeling',
      'No policy or scenario simulation'
    ],
    solution: 'Carbon Auditor is a forensic carbon analysis platform that integrates daily behavior, scientific baselines, and policy models into long-term environmental impact projections.',
    systemApproach: [
      'User activity logging',
      'Scientific baseline modeling',
      'Scenario & policy modifiers',
      'Visualization & AI explanation layer'
    ],
    technicalDecisions: [
      'React + TypeScript for scalable frontend',
      'Recharts & Three.js for visual modeling',
      'Google GenAI for contextual insights'
    ],
    specialSection: {
      title: 'Advanced Features',
      items: [
        'Scientific audit mode',
        'Multi-scale accumulation charts',
        '3D Earth atmospheric visualization',
        'AI-powered explanation assistant'
      ]
    },
    outcome: [
      'Transparent carbon impact modeling',
      'User awareness through data, not guilt'
    ],
    learnings: [
      'Visualization dramatically improves comprehension',
      'Policy context changes individual perception of impact'
    ],
    techStack: ['React', 'TypeScript', 'Three.js', 'GenAI'],
    repoUrl: 'https://github.com/AmanDev200-cyber/Carbon_Auidtory',
    demoUrl: 'https://carbonauditor.netlify.app/',
    imagePlaceholder: 'https://picsum.photos/seed/carbon/800/602',
    featured: true,
  },
  {
    id: '4',
    slug: 'secure-password-toolkit',
    title: 'Secure Password Toolkit',
    tagline: 'Client-Side Password Strength & Hashing Tool',
    problem: 'Users rely on weak passwords and untrusted online tools that may store or transmit sensitive data.',
    whyFails: [
      'Server-side processing',
      'Data retention risks',
      'Poor transparency'
    ],
    solution: 'A fully client-side password security toolkit that evaluates strength and generates SHA-256 hashes entirely in the browser.',
    systemApproach: [
      'Real-time strength evaluation',
      'Visual feedback',
      'Browser-native cryptography'
    ],
    technicalDecisions: [
      'Web Crypto API for hashing',
      'Zero backend architecture',
      'Glassmorphism UI for clarity'
    ],
    specialSection: {
      title: 'Security Design',
      items: [
        'No data transmission',
        'Deterministic hashing',
        'Privacy-first by design'
      ]
    },
    outcome: [
      'Secure, fast, privacy-preserving password tool',
      'Demonstrated client-side crypto capabilities'
    ],
    learnings: [
      'Client-side security is powerful when done correctly',
      'UX clarity improves security behavior'
    ],
    techStack: ['JavaScript', 'Web Crypto API', 'CSS'],
    repoUrl: 'https://github.com/AmanDev200-cyber/PasswordMaker',
    imagePlaceholder: 'https://picsum.photos/seed/password/800/603',
    featured: true,
  },
  {
    id: '5',
    slug: 'spam-detection-web-app',
    title: 'Spam Detection Web App',
    tagline: 'Machine Learning–Based Spam Classifier',
    problem: 'Spam messages continue to evade basic keyword filters and manual detection.',
    whyFails: [
      'Overreliance on keywords',
      'Lack of contextual understanding',
      'Poor feature engineering'
    ],
    solution: 'A Streamlit-based ML app using TF-IDF, engineered features, and Naive Bayes for accurate spam detection.',
    systemApproach: [
      'Text preprocessing (NLTK)',
      'TF-IDF vectorization (3000 features)',
      'Feature engineering (counts, casing, punctuation)',
      'Model training & tuning'
    ],
    technicalDecisions: [
      'Multinomial Naive Bayes',
      'Feature scaling with MinMaxScaler',
      'Sparse + dense feature fusion'
    ],
    specialSection: {
      title: 'ML Pipeline',
      items: [
        'Text preprocessing (NLTK)',
        'TF-IDF vectorization (3000 features)',
        'Feature engineering (counts, casing, punctuation)',
        'Model training & tuning'
      ]
    },
    outcome: [
      'Accurate real-time spam detection',
      'Explainable ML workflow'
    ],
    learnings: [
      'Feature engineering matters as much as algorithms',
      'Simpler models can outperform complex ones when designed well'
    ],
    techStack: ['Python', 'Streamlit', 'Scikit-Learn', 'NLTK'],
    repoUrl: 'https://github.com/AmanDev200-cyber/MachineLearning_Cybersecurity',
    imagePlaceholder: 'https://picsum.photos/seed/spam/800/604',
    featured: true,
  },
  {
    id: '6',
    slug: 'secure-notes-app',
    title: 'Secure Notes Application',
    tagline: 'A security-first notes application built with Flask, demonstrating server-side authentication, role-based access control, CSRF protection, and audit logging.',
    problem: 'Many beginner web applications implement CRUD functionality without enforcing proper authorization, session hardening, or security monitoring, resulting in insecure systems.',
    whyFails: [
      'Lack of proper authorization checks',
      'Weak session management',
      'Missing security monitoring & logging'
    ],
    solution: 'This project implements a secure note management system with strict server-side enforcement of authentication, authorization, and security logging.',
    systemApproach: [
      'User authentication (PBKDF2)',
      'Role-Based Access Control (RBAC)',
      'CSRF protection on state changes',
      'Secure session cookies (HttpOnly, SameSite)'
    ],
    technicalDecisions: [
      'Flask for backend logic',
      'Werkzeug for secure password hashing',
      'Server-side session management',
      'SQLite for relational data storage'
    ],
    specialSection: {
      title: 'Audit Logging',
      items: [
        'Logs login attempts',
        'Logs note creation, modification, and deletion',
        'Logs CSRF-blocked requests',
        'Logs unauthorized access attempts'
      ]
    },
    outcome: [
      'Enforced strict server-side security',
      'Prevented common web attacks (CSRF, IDOR)',
      'Demonstrated secure audit trails'
    ],
    learnings: [
      'Security must be enforced server-side, not assumed from the UI',
      'Authorization checks are required for every protected action',
      'Audit logs are essential for detecting misuse and attacks',
      'RBAC simplifies permission management in multi-user systems'
    ],
    techStack: ['Flask', 'Python', 'SQLite', 'Jinja2', 'Werkzeug'],
    repoUrl: 'https://github.com/AmanDev200-cyber/Secure_Notes_flask',
    imagePlaceholder: 'https://picsum.photos/seed/securenotes/800/605',
    featured: true,
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Cybersecurity, AI & Systems Engineering',
    organization: 'Independent & Academic Projects',
    date: '2024 – Ongoing',
    description: 'Built security-first applications focused on document forensics, privacy, and abuse detection. Developed AI-powered legal document analysis systems using OCR, NLP, and image forensics. Implemented ML-based detection pipelines (TF-IDF, feature engineering, Naive Bayes). Applied threat modeling and failure-first design across all projects.',
    icon: 'briefcase'
  },
  {
    id: '2',
    title: 'Secure Cloud & Web Development',
    organization: 'Project-Based Experience',
    date: '2024 – Ongoing',
    description: 'Built a secure cloud-based file sharing platform with authentication, encrypted storage, and access control (Firebase). Developed modern React + TypeScript frontends with security-aware UX and performance focus. Integrated data visualization and simulation models (Recharts, Three.js). Designed applications using privacy-first principles, minimizing server-side trust.',
    icon: 'briefcase'
  },
  {
    id: '3',
    title: 'Second Runner-Up — Hack-O-Mania 2025',
    organization: 'NMIMS Chandigarh',
    date: '5 April 2025',
    description: 'Secured 2nd Runner-Up at a competitive hackathon organized by the Matrix Club. Collaborated in a time-constrained team to design, build, debug, and present a working solution. Demonstrated strong problem-solving, teamwork, and delivery under pressure.',
    icon: 'trophy'
  },
  {
    id: '4',
    title: 'Invited Participant — AI Impact Festival 2025',
    organization: 'Intel via CDAC | Dr. Ambedkar International Centre, New Delhi',
    date: '16–17 November 2025',
    description: 'Invited by Intel via CDAC to participate in a national-level AI and innovation showcase. Presented and refined an AI-based project under mentorship from industry professionals. Engaged with AI innovators, researchers, and global technology leaders.',
    icon: 'certificate'
  },
  {
    id: '5',
    title: 'First Prize — ESG Design Thinking Workshop',
    organization: 'NMIMS Chandigarh × Mirae Asset Foundation',
    date: '30–31 January 2026',
    description: 'Won First Prize for developing Carbon Auditor, a climate-tech forensic carbon analysis platform. Applied design thinking methodologies to ESG-focused real-world problems. Built predictive models and 3D visualizations to distinguish personal vs systemic emissions.',
    icon: 'trophy'
  }
];