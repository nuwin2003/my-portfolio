import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1c1c1c',
        color: 'white',
        py: 3,
        mt: 5,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Nuwin Vinwath
          </Typography>
          <Typography variant="body1">
            Full Stack Developer based in Colombo, Sri Lanka
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#home" color="inherit" sx={{ display: 'block' }}>
            Home
          </Link>
          <Link href="#about" color="inherit" sx={{ display: 'block' }}>
            About
          </Link>
          <Link href="#projects" color="inherit" sx={{ display: 'block' }}>
            Projects
          </Link>
          <Link href="#contact" color="inherit" sx={{ display: 'block' }}>
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            Email: nuwinvinwath47@gmail.com
          </Typography>
          <Typography variant="body1">
            LinkedIn: <Link href="https://www.linkedin.com/in/nuwin-vinwath/" color="inherit" target="_blank">Nuwin Vinwath</Link>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 3 }}>
        &copy; {new Date().getFullYear()} Nuwin Vinwath. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
