export const personal = {
  name: "Imasha Nethmini Athapaththu",
  title: "Full-Stack Developer",
  tagline: "I build scalable, user-focused web applications using modern frontend and backend technologies.",
  email: "imaaathapattu@gmail.com",
  location: "Sri Lanka",
  photo: "/images/profile/imasha.jpeg",
  social: [
    { label: "GitHub", url: "https://github.com/Imasha-N", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/imasha-@", icon: "linkedin" },
    { label: "Email", url: "mailto:imaaathapattu@gmail.com", icon: "email" },
  ],
}

export const cv = {
  file: "/cv/Imasha_Nethmini_Athapaththu_CV.pdf",
  fileName: "Imasha_Nethmini_Athapaththu_CV.pdf",
  lastUpdated: "June 2026",
  highlights: [
    {
      title: "Education",
      items: [
        { label: "BSc in Information Technology", detail: "University — SLIIT" },
      ],
    },
    
    {
      title: "Certifications",
      items: [
        { label: "MongoDB Node.js Developer Path", detail: "Online Certification" },
      ],
    },
  ],
}

export const skills = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "HTML & CSS", category: "frontend" },
  { name: "Vite", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "design" },
  { name: "UI/UX Design", category: "design" },
  { name: "Responsive Design", category: "design" },
  { name: "Framer Motion", category: "frontend" },
]

export const projects = [
   
  {
    title: "Smart Dairy - Inventory Management System",
    description:
      "Developed the Inventory Management module for a dairy production management system, including inventory tracking, warehouse management, stock monitoring, REST API development, and PostgreSQL integration.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "PERN"],
    image: "/images/projects/smart dairy.png",
    link: "https://github.com/Imasha-N/ITProject.git",
    featured: true,
  },
  {
    title: "UNI NEXUS - Tutor Booking Management System",
    description:
      "Developed the Tutor Booking Management module with tutor slot management, student booking, conflict prevention, waitlist management, JWT authentication, and REST API development.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT"],
    image: "/images/projects/Uni Nexus.png",
    link: "https://github.com/Imasha-N/Uni_nexus.git",
    featured: true,
  },
  {
    title: "FLEXIT - Smart Campus Operations Hub",
    description:
      "Developed the Booking Management module with booking creation, approval, rejection, cancellation, conflict detection, secure REST APIs, JWT authentication, and MongoDB integration.",
    tags: ["React", "Spring Boot", "Java", "MongoDB", "REST API", "JWT"],
    image: "/images/projects/booking.png",
    link: "https://github.com/PrabodhaLakshan/it3030-paf-2026-smart-campus-3Y1S-WD-38.git",
    featured: true,
  },
  {
    title: "Tintora - Cosmetics Mobile App UI/UX Design",
    description:
      "Designed a modern cosmetics shopping mobile application with wireframes, high-fidelity UI screens, reusable components, and interactive prototypes using Figma.",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image: "/images/projects/tintora.png",
    link: "https://www.figma.com/proto/ZXQSD4z0jcZxk0gGtb2PKj/Untitled?node-id=0-1&t=7fynMGeuugGVufeZ-1",
    featured: false,
  },
  {
    title: "MotorCastle - Online Vehicle Park Reservation Management System",
    description:
      "Developed a park reservation management module with slot booking, reservation management, and MySQL database integration for efficient visitor parking management.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/images/projects/park.png",
    link: "#",
    featured: true,
  },

]

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]
