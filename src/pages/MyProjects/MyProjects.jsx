import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const MyProjects = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  const projectList = [
    {
      title: "MedEd Connect",
      domain: "Healthcare",
      organization: "Mobios Private Limited",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed responsive and complex user interfaces with React, Vite, Material-UI (MUI), and Redux for state management, integrated with back-end APIs.",
        "Built back-end APIs using Java Spring Boot to support the application's functionality.",
      ],
      description:
        "MedEd Connect is a healthcare platform that facilitates seamless communication and collaboration between medical professionals, educators, and students. With a focus on delivering high-quality medical education, this project aimed to streamline the learning process and provide a centralized hub for accessing educational resources.",
    },
    {
      title: "CALSDA",
      domain: "Education",
      organization: "Mobios Private Limited",
      role: "Front-End Developer",
      responsibilities: [
        "Crafted responsive user interfaces using React.js, Material-UI (MUI), and Redux for state management.",
      ],
      description:
        "CALSDA is an innovative educational platform designed to enhance the learning experience for students and instructors alike. By leveraging cutting-edge technologies, this project aimed to create an engaging and interactive environment that fosters collaborative learning and knowledge sharing.",
    },
    {
      title: "N-Find",
      domain: "Accommodation Finding Application",
      organization: "LogicNex Technologies (Freelance)",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed back-end APIs using Java Spring Boot, incorporating user role-based authentication and authorization.",
        "Created APIs for a fully functional accommodation finding application.",
        "Built responsive user interfaces using React, Material-UI (MUI), and integrated with the back-end APIs.",
      ],
      description:
        "N-Find is a comprehensive accommodation finding application that revolutionizes the way people search for and secure housing. By leveraging advanced algorithms and intuitive user interfaces, this project aimed to simplify the process of finding the perfect living space, catering to diverse preferences and requirements.",
    },
    {
      title: "BidZone",
      domain: "Car Bidding Application",
      organization: "LogicNex Technologies (Freelance)",
      role: "Back-End Developer",
      responsibilities: [
        "Developed APIs using Java Spring Boot to handle multiple requests and retrieve data for the front-end based on various conditions.",
      ],
      description:
        "BidZone is an innovative car bidding platform that brings together automobile enthusiasts and sellers in a dynamic and transparent marketplace. By leveraging cutting-edge technologies and robust back-end capabilities, this project aimed to streamline the process of buying and selling vehicles, ensuring a seamless and secure bidding experience.",
    },
    {
      title: "Outsourcing Project",
      domain: "Manpower and Item Outsourcing",
      organization:
        "Institute of Computer Engineering Technology (Trainee Software Engineer)",
      role: "Full-Stack Developer",
      responsibilities: [
        "Back-End Development: Developed server-side applications using Java Spring Boot, with MySQL database integration. Implemented RESTful APIs for communication between front-end and back-end components. Gained experience in version control systems like Git and collaborated with the team using GitHub.",
        "Unit Testing: Utilized JUnit 5 for comprehensive unit testing, ensuring code quality and reliability. Employed Mockito to create mock objects and facilitate isolated unit testing.",
        "Front-End Development: Developed user interfaces using Angular, incorporating Bootstrap for consistent styling.",
      ],
      description:
        "The Outsourcing Project is a comprehensive platform that facilitates the efficient outsourcing of manpower and items. By leveraging modern technologies and robust back-end capabilities, this project aimed to streamline the outsourcing process, enabling businesses to seamlessly locate and acquire the necessary resources while ensuring transparency and reliability.",
    },
    {
      title: "Weather Application",
      domain: "Weather",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Weather API",
        "Bootstrap",
        "OpenStreetMap",
      ],
      description:
        '"Weather Wise" is a versatile web-based weather application that provides location-based weather details, hourly weather updates, forecasts for three days, and historical data for the past seven days. With responsive design principles in mind, this project ensures a seamless user experience across both mobile and desktop interfaces. Hosted on GitHub Pages for global access, "Weather Wise" aims to be a reliable and user-friendly source of weather information.',
    },
    {
      title: "Wholesale Store",
      domain: "Wholesale",
      technologies: ["JavaFX", "JFoenix", "Java", "MySQL", "MVC Architecture"],
      description:
        '"Wholesale Store" is a standalone application developed using JavaFX, with user interfaces created using Scene Builder. This application enables CRUD (Create, Read, Update, Delete) operations for customers, items, and orders. Users can place orders, and upon order placement, the items, orders, and order details are automatically updated, ensuring efficient inventory management and order tracking.',
    },
    {
      title: "Clothify Store",
      domain: "Retail",
      technologies: [
        "JavaFX",
        "Java",
        "MySQL",
        "Layered Architecture",
        "Hibernate",
      ],
      description:
        '"Clothify Store" is a standalone application developed using JavaFX, featuring two types of users: admins and employees. Upon logging in, the application checks the user type and applies appropriate restrictions. Employees have limited access and cannot add users or generate reports, while admins have full control over the system. This application enables CRUD operations for customers, products, orders, and users, ensuring efficient management of inventory and customer data.',
    },
  ];

  return (
    <Grid container xs={12}>
      <Grid item sm={12} data-aos="zoom-in" data-aos-duration="2500">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", m: 2 }}
        >
          My Projects
        </Typography>
      </Grid>
      <Grid container item sm={12} spacing={2} m={2}>
        {projectList.map((project, index) => (
          <Grid key={index} item sm={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MyProjects;
