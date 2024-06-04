import React, { useEffect } from "react";
import { Grid, Typography, Button, Box, Divider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundImage from "../../assets/BackgroundImage.jpg";
import NavBar from "../../components/NavBar/NavBar";
import {
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiDotnet,
} from "react-icons/si";
import Footer from "../../components/Footer/Footer";
import MyProjects from "../MyProjects/MyProjects";
import About from "../About/About";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  return (
    <>
      <NavBar />
      <Grid container xs={12} sx={{ mt: 15 }} id="home">
        <Grid
          item
          sm={4}
          data-aos="fade-right"
          data-aos-duration="2500"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            paddingLeft: "2rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "4px",
                height: "100px",
                backgroundColor: "white",
                marginRight: "1rem",
              }}
            />
            <Box>
              <Typography variant="h2" component="h1" gutterBottom>
                Nuwin Vinwath
              </Typography>
              <Typography variant="h5" component="h1" gutterBottom color="gray">
                Full Stack Developer
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              marginTop: "1rem",
              color: "white",
              borderColor: "white",
            }}
          >
            Contact
          </Button>
        </Grid>
        <Grid
          item
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Box
            sx={{ display: { lg: "flex", sm: "none" }, alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                color="gray"
                sx={{ textAlign: "center" }}
                data-aos="zoom-out"
                data-aos-duration="2500"
              >
                "The only way to do great work is to love what you do."
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                gutterBottom
                color="white"
                sx={{ textAlign: "center" }}
                data-aos="zoom-out"
                data-aos-duration="2500"
              >
                - Steve Jobs
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={4}
          data-aos="flip-right"
          data-aos-duration="2500"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { sm: 400, xs: 200 } }}>
            <img
              src={BackgroundImage}
              alt="BgImage"
              width={"100%"}
              style={{ borderRadius: "20%" }}
            />
          </Box>
        </Grid>
        <Grid container sm={12}>
          <Grid item sm={12} id="about">
            <About />
          </Grid>

          <Grid item sm={12}>
            <Divider sx={{ my: 5, backgroundColor: "gray" }} />
          </Grid>

          <Grid item sm={12} data-aos="zoom-in" data-aos-duration="2500">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", m: 2 }}
            >
              Tech Stack
            </Typography>
            <Box sx={{ textAlign: "center", m: 2 }}>
              <Typography variant="h5" component="p" gutterBottom>
                Main technologies I work with:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  mb: 4,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <SiSpringboot size={60} />
                  <Typography variant="h6">Java Spring Boot</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiReact size={60} />
                  <Typography variant="h6">React.js</Typography>
                </Box>
              </Box>
              <Typography variant="h5" component="p" gutterBottom>
                Other technologies I've worked with:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <SiNodedotjs size={60} />
                  <Typography variant="h6">Node.js</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiAngular size={60} />
                  <Typography variant="h6">Angular</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiDotnet size={60} />
                  <Typography variant="h6">.NET</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Divider sx={{ my: 5, backgroundColor: "gray" }} />
          </Grid>
          <Grid
            item
            sm={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
            id="myProjects"
          >
            <MyProjects />
          </Grid>
          <Grid item sm={12}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
