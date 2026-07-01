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
    title: "Kanban Board",
    image: "/kanban.png",
    duration: "February 2026",
    description:
      "Responsive React-based task tracking and workflow management app. Improved UI responsiveness and task management efficiency by 25% using optimized React state handling.",
    tech: ["React", "CSS", "LocalStorage"],
    demo: "https://gleeful-valkyrie-8a9e9a.netlify.app/",
    github: [
      { label: "GitHub", url: "https://github.com/kirishapriya3/Kanban.git" }
    ]
  },
  {
    title: "Movie Searching App",
    image: "/movieapp.png",
    duration: "January 2026",
    description:
      "React application integrated with an external API to fetch and display real-time movie information. Enhanced search performance and user engagement by 35% through dynamic filtering and a responsive UI.",
    tech: ["React", "REST API", "CSS"],
    demo: "https://benevolent-mochi-705e41.netlify.app/",
    github: [
      { label: "GitHub", url: "https://github.com/kirishapriya3/Task7.git" }
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
