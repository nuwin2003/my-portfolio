import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

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
          <Button color="inherit" sx={{ color: "white" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ color: "white" }}>
            About
          </Button>
          <Button color="inherit" sx={{ color: "white" }}>
            Projects
          </Button>
          <Button color="inherit" sx={{ color: "white" }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
