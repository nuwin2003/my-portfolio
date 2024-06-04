import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      data-aos="zoom-in-down"
      data-aos-duration="2500"
      sx={{
        minHeight: 350,
        maxHeight: 350,
        overflow: "auto",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.domain}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.organization}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.role}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {project.description}
        </Typography>
        <ul>
          {project?.responsibilities?.map((responsibility, index) => (
            <li key={index}>
              <Typography variant="body2">{responsibility}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
