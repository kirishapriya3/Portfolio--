import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub
} from "react-icons/si";
import { Code2, Database } from "lucide-react";

export const personalInfo = {
  name: "Kirisha Priya",
  title: "Full Stack Developer (MERN Stack)",
  education: "B.E. Computer Science Engineering",
  location: "Tamil Nadu, India",
  email: "kirishapriya3@gmail.com",
  phone: "8072341027",
  github: "https://github.com/kirishapriya3",
  linkedin: "https://www.linkedin.com/in/kirisha-r-501212248?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

export const skills = {
  frontend: [
    { name: "HTML5", icon: SiHtml5, level: 90 },
    { name: "CSS3", icon: SiCss, level: 88 },
    { name: "JavaScript", icon: SiJavascript, level: 88 },
    { name: "React", icon: SiReact, level: 85 },
    { name: "Redux", icon: SiRedux, level: 75 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 82 },
    { name: "Express.js", icon: SiExpress, level: 80 }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, level: 80 },
    { name: "MySQL", icon: SiMysql, level: 75 }
  ],
  tools: [
    { name: "Git", icon: SiGit, level: 85 },
    { name: "GitHub", icon: SiGithub, level: 85 },
    { name: "VS Code", icon: Code2, level: 90 }
  ],
  concepts: [
    { name: "Data Structures & Algorithms", icon: Database, level: 78 },
    { name: "DBMS", icon: Database, level: 78 }
  ]
};

export const projects = [
  {
    title: "StayMate — Hostel Management System",
    image: "/staymate.png",
    duration: "March 2026",
    description:
      "Full-stack MERN application for hostel management with room allocation, maintenance tracking, and resident management, cutting manual admin effort by 40%. Implemented secure authentication and optimized REST APIs, improving system efficiency and user experience by 35%.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://darling-jelly-524929.netlify.app/",
    github: [
      { label: "Frontend", url: "https://github.com/kirishapriya3/ManagementFrontend.git" },
      { label: "Backend", url: "https://github.com/kirishapriya3/ManagementBackend.git" }
    ]
  },
  {
    title: "ParkStub",
    image: "/parkstub.png",
    duration: "April 2026",
    description:
      "Full-stack parking reservation system with real-time slot availability, user authentication, and payment integration. Reduced average parking search time by 45% and increased booking conversions by 30% through optimized slot caching and streamlined checkout flows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://sensational-stroopwafel-c9fe41.netlify.app/",
    github: [
      { label: "Frontend", url: "https://github.com/kirishapriya3/ParkStub-Frontend.git" },
      { label: "Backend", url: "https://github.com/kirishapriya3/ParkStub-Backend.git" }
    ]
  },
  {
    title: "Carverse",
    image: "/carverse.png",
    duration: "May 2026",
    description:
      "Smart car discovery app with natural-language search, saved favorites, and authenticated wishlist flows. Improved engagement by 22% and reduced load latency by 30% through optimized API calls and client-side pagination.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://glistening-daifuku-af446f.netlify.app/",
    github: [
      { label: "Frontend", url: "https://github.com/kirishapriya3/carverse-fronten.git" },
      { label: "Backend", url: "https://github.com/kirishapriya3/Carverse-Backend.git" }
    ]
  }
];

export const education = [
  {
    institution: "Anjalai Ammal Mahalingam Engineering College",
    location: "Thiruvarur",
    degree: "B.E. in Computer Science and Engineering",
    detail: "CGPA: 8.23",
    period: "June 2021 – May 2025"
  }
];

export const certifications = [
  {
    title: "MERN Full Stack Development Certification — GUVI HCL",
    credentialUrl: "https://drive.google.com/uc?export=view&id=1JU4JlMRXHtpdjoAEfulRUrnGKL6PAHOr"
  }
];
