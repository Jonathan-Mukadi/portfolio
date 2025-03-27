import  project1  from "../assets/project1.png";
// import  project2  from "../assets/project2.png";
import  project3  from "../assets/project3.png";
import  project4  from "../assets/project4.png";
// import  project5  from "../assets/project5.png";
import { BiCodeAlt, BiLaptop, BiSpreadsheet } from "react-icons/bi";

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  
  // {
  //   id: 1,
  //   title: "Weather App",
  //   image: project2,
  //   description:
  //     "Weather app using HTML, CSS, and JavaScript, integrated with a weather API. Displays real-time weather data.",
  // },
  {
    id: 2,
    title: "Calculator",
    image: project1,
    description:
      "Calculator built with HTML, CSS, and JavaScript. Performs basic arithmetic operations.",
    link: "https://stately-bombolone-75ee91.netlify.app/"
  },
  {
    id: 3,
    title: "To-Do App",
    image: project3,
    description:
      "A simple task manager built with HTML, CSS, and JavaScript. Features include adding, completing, and deleting tasks.",
    link: "https://beamish-dolphin-ca10b1.netlify.app/"
  },
  {
    id: 4,
    title: "Shoe Store App",
    image: project4,
    description: 
      "A sleek and user-friendly web application built with HTML, CSS, and JavaScript that allows customers to make calculations, track sales data and generate a receipt.",
    link: "https://sparkly-mochi-9488ba.netlify.app/"
  },
  // {
  //   id: 5,
  //   title: "Lodge Management System",
  //   image: project5,
  //   description: 
  //     "Built with HTML, CSS, JavaScript, Node.js, and SQLite, the system allows the lodge owner to manage occupant details, track payments, handle reservations, cancellations, and calculate revenue for each room."
  // }
];

export const services = [
  {
    title: "Web Development",
    description:
      "I build responsive, user-friendly websites using HTML, CSS, JavaScript, and React. From design to development, I ensure your website is fast, functional, and visually appealing.",
    icon: BiCodeAlt,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "I provide complete full-stack development, from designing responsive frontends with HTML, CSS, JavaScript and React to building robust backends with Node.js and Databases. I create seamless, scalable web applications that meet your business needs.",
    icon: BiLaptop,
  },
  {
    title: "Data Entry",
    description:
      "I provide fast and precise data entry services, including Excel and Google Sheets work, database updates, and document management.",
    icon: BiSpreadsheet,
  }
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "jonathanmukspro@gmail.com",
    link: "mailto:jonathanmukspro@gmail.com",
    icon: "📧",
  },
  {
    id: 2,
    type: "Phone",
    value: "+243 892 734 023",
    link: "tel:+243892734023",
    icon: "📞",
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/in/jonathan-mukadi",
    link: "https://www.linkedin.com/in/jonathan-mukadi-396a95263",
    icon: "🔗",
  },
  {
    id: 4,
    type: "Location",
    value: "Likasi, Democratic Republic of Congo",
    link: null,
    icon: "📍",
  },
];

export const words = [
  "React",
  "Next.js",
  "Tailwind",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "APIs",
  "Git",
  "GitHub",
  "VS Code",
  "Microsoft Excel",
  "Google Sheets"
];

// ::-webkit-scrollbar {
//     width: 12px;
//     height: 12px;
//   }

//   ::-webkit-scrollbar-track {
//     background: #20242d;
//   }

//   ::-webkit-scrollbar-thumb {
//     background: #3b82f6;
//     border-radius: 6px;
//     border: 1px solid #eee;
//     transition: background 0.3s ease;
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background: #555555;
//   }
