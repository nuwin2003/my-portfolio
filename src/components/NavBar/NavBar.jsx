import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: "black", zIndex: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          My Portfolio
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            gap: { lg: 4, sm: 2, xs: 1 },
          }}
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button color="inherit" sx={{ color: "white" }}>
              Home
            </Button>
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button color="inherit" sx={{ color: "white" }}>
              About
            </Button>
          </ScrollLink>
          <ScrollLink
            to="myProjects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button color="inherit" sx={{ color: "white" }}>
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink
            to="techStack"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button color="inherit" sx={{ color: "white" }}>
              Tech Stack
            </Button>
          </ScrollLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
