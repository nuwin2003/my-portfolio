import React, { useState, useEffect } from "react";
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
import ContactMe from "../../components/ContactMe/ContactMe";

const HomePage = () => {
  const [openContactDialog, setOpenContactDialog] = useState(false);

  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  const handleContactClick = () => {
    setOpenContactDialog(true);
  };

  const handleContactClose = () => {
    setOpenContactDialog(false);
  };

  return (
    <>
      <NavBar />
      <Grid container xs={12} id="home">
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            mt: 12,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                variant="h6"
                component="h1"
                gutterBottom
                color="gray"
                sx={{
                  textAlign: "center",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.25rem",
                    sm: "1rem",
                    xs: "0.875rem",
                  },
                }}
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
                sx={{
                  textAlign: "center",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.25rem",
                    sm: "1rem",
                    xs: "0.875rem",
                  },
                }}
                data-aos="zoom-out"
                data-aos-duration="2500"
              >
                - Steve Jobs
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container xs={12} sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="fade-right"
            data-aos-duration="2500"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { sm: "center", xs: "left" },
              textAlign: "left",
              paddingLeft: "2rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "4px",
                  height: "150px",
                  backgroundColor: "white",
                  marginRight: "1rem",
                }}
              />
              <Box>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ fontSize: { lg: "4rem", sm: "3rem", xs: "2rem" } }}
                >
                  Nuwin Vinwath
                </Typography>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  color="gray"
                  sx={{ fontSize: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" } }}
                >
                  Full Stack Developer
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    marginTop: "1rem",
                    color: "white",
                    borderColor: "white",
                  }}
                  onClick={handleContactClick}
                >
                  Contact
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="flip-right"
            justifyContent={"center"}
            data-aos-duration="2500"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { sm: 0, xs: 2 },
            }}
          >
            <Box sx={{ width: { lg: 400, sm: 350, xs: 200 } }}>
              <img
                src={BackgroundImage}
                alt="BgImage"
                width={"100%"}
                style={{ borderRadius: "20%" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={12} id="about">
            <About />
          </Grid>

          <Grid item xs={12} id="techStack">
            <Divider sx={{ my: 5, backgroundColor: "gray" }} />
          </Grid>

          <Grid item xs={12} data-aos="zoom-in" data-aos-duration="2500">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                m: 2,
                fontSize: { lg: "4rem", sm: "3rem", xs: "2rem" },
              }}
            >
              Tech Stack
            </Typography>
            <Box sx={{ textAlign: "center", m: 2 }}>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{ fontSize: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" } }}
              >
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
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "1.5rem", sm: "1.25rem", xs: "1rem" },
                    }}
                  >
                    Java Spring Boot
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiReact size={60} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "1.5rem", sm: "1.25rem", xs: "1rem" },
                    }}
                  >
                    React.js
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{ fontSize: { lg: "2rem", sm: "1.5rem", xs: "1.25rem" } }}
              >
                Other technologies I've worked with:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <SiNodedotjs size={60} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "1.5rem", sm: "1.25rem", xs: "1rem" },
                    }}
                  >
                    Node.js
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiAngular size={60} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "1.5rem", sm: "1.25rem", xs: "1rem" },
                    }}
                  >
                    Angular
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <SiDotnet size={60} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "1.5rem", sm: "1.25rem", xs: "1rem" },
                    }}
                  >
                    .NET
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ my: 5, backgroundColor: "gray" }} />
          </Grid>
          <Grid
            item
            xs={12}
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
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
      {openContactDialog && (
        <ContactMe open={openContactDialog} onClose={handleContactClose} />
      )}
    </>
  );
};

export default HomePage;
