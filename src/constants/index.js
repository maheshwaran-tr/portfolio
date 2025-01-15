import tpc from "../assets/projects/tpc.png";
import portfolio from "../assets/projects/portfolio.jpg";
import seatmaster from "../assets/projects/SeatMaster.png";

export const HERO_CONTENT = `An enthusiastic Data Engineer and Backend Developer with hands-on experience in building data pipelines, creating APIs, and managing backend systems. I have worked on projects involving database integration, API development, and data processing, and I am eager to enhance my skills further in these areas. I enjoy learning and applying new technologies to deliver efficient and reliable solutions. With a growing understanding of modern tools and frameworks, I aim to contribute effectively to projects and expand my knowledge in the field.`

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Data Science Intern",
    company: "Avasoft Pvt Ltd",
    stipend: "₹10,000/month",
    description: `Transforming the raw data into meaningfull business insights by developing ETL Pipelines to provide a clean data to analytical and ML Persons and learnt Data warehousing concepts`,
    technologies: ["PostgreSQL", "Databricks", "PySpark", "Excel"],
  },
  {
    year: "June 2023 - Dec 2023",
    role: "Intern - Hyper Automation",
    company: "Nextwealth Entrepreneurs Pvt Ltd",
    stipend: "₹10,000/month",
    description: `Developed the back-end and core functionality of a Restful API,integrating a website using Python, Django, and MySQL. Participated in code reviews and client meetings to ensure project alignment and quality`,
    technologies: ["Python", "Django", "MySQL", "RestAPI"],
  }
];

export const PROJECTS = [
  {
    title: "Training and Placement Cell Application",
    image: tpc,
    description:
      "An Application to manage student profiles, job postings, and company visits, facilitating seamless communication between students and recruiters",
    technologies: ["Flutter", "ExpressJS", "PostgreSQL", "Supabase", "RestAPI", "Github"],
    gitLink : "https://github.com/maheshwaran-tr/placementapp-backend"
  },
  {
    title: "Seat Master",
    image: seatmaster,
    description:
      "An Application Developed to Automate th Exam Hall Seating Arrangement system that optimizes seat allocation for students based on various criteria",
    technologies: ["Flutter", "SpringBoot", "MySQL", "RestAPI", "Github"],
    gitLink : "https://github.com/maheshwaran-tr/SHA-BACKEND"
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Github"],
    gitLink : "https://github.com/maheshwaran-tr/portfolio"
  },
];

export const CONTACT = {
  address: "Madurai, Tamilnadu",
  phoneNo: "+91 6380616973",
  email: "maheswaran6380@gmail.com",
};