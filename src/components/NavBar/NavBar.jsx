import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Tech Stack", to: "techStack" },
    { label: "My Projects", to: "myProjects" },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={handleMenuItemClick}
          >
            <ListItem button>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar sx={{ backgroundColor: "black", zIndex: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          My Portfolio
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            flexGrow: 1,
            gap: { lg: 4, sm: 2, xs: 1 },
          }}
        >
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button color="inherit" sx={{ color: "white" }}>
                {item.label}
              </Button>
            </ScrollLink>
          ))}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
