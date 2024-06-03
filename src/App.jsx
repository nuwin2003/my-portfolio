import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          My Portfolio
        </Typography>
        <Button variant="outlined">Let's Start</Button>
      </Box>
    </Container>
  );
};

export default App;
