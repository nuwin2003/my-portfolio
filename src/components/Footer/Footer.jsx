import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        py: 3,
        mt: 5,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Nuwin Vinwath
          </Typography>
          <Typography variant="body1">
            Full Stack Developer based in Colombo, Sri Lanka
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button>Home</Button>
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button>About</Button>
          </ScrollLink>
          <ScrollLink
            to="techStack"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button>Tech Stack</Button>
          </ScrollLink>
          <ScrollLink
            to="myProjects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button>My Projects</Button>
          </ScrollLink>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            Email: nuwinvinwath47@gmail.com
          </Typography>
          <Typography variant="body1">
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/nuwin-vinwath/"
              color="inherit"
              target="_blank"
            >
              Nuwin Vinwath
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 3 }}>
        &copy; {new Date().getFullYear()} Nuwin Vinwath. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
