import React, { useEffect } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundImage from "../../assets/BackgroundImage.png";
import NavBar from "../../components/NavBar/NavBar";
import {
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiDotnet,
} from "react-icons/si";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  return (
    <>
      <NavBar />
      <Grid container xs={12}>
        <Grid
          item
          sm={6}
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
        {/* <Grid
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                color="gray"
                sx={{ textAlign: "center" }}
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                I'm a full-stack software engineer with one year of industry
                experience, specializing in [Your Primary Technologies or
                Stack]. I've gained hands-on experience through training and
                self-learning, and I'm passionate about building innovative
                solutions to solve real-world problems.
              </Typography>
            </Box>
          </Box>
        </Grid> */}
        <Grid
          item
          sm={6}
          data-aos="zoom-in"
          data-aos-duration="2500"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { lg: 500, sm: 400, xs: 200 } }}>
            <img
              src={BackgroundImage}
              alt="BgImage"
              width={"100%"}
              style={{ borderRadius: "20%" }}
            />
          </Box>
        </Grid>
        <Grid container sm={12}>
          <Grid item sm={12}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", m: 2 }}
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              Who am I ?
            </Typography>
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
          >
            <Box sx={{ m: 2 }} data-aos="zoom-in" data-aos-duration="2500">
              <Typography variant="h5" component="h1" gutterBottom color="gray">
                Hi, I'm Nuwin Vinwath, a passionate Full Stack Developer hailing
                from the vibrant city of Colombo, Sri Lanka. At the youthful age
                of 21, I've already embarked on an exciting journey in the realm
                of software engineering. My professional odyssey began as a
                Trainee Software Engineer at ICET, where I delved into the
                intricacies of software development and honed my skills under
                the guidance of seasoned professionals.
              </Typography>
            </Box>
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
          >
            <Box sx={{ m: 2 }} data-aos="zoom-in" data-aos-duration="2500">
              <Typography variant="h5" component="h1" gutterBottom color="gray">
                Subsequently, I had the privilege of serving as a Software
                Engineer Intern at mobios private limited, where I contributed
                to various projects and gained invaluable hands-on experience in
                crafting innovative solutions. My educational background
                includes completing my O/Ls and A/Ls from{" "}
                <b>Taxila Central College</b>, followed by pursuing a Diploma in
                Software Engineering. Currently, I am pursuing my undergraduate
                studies at the prestigious{" "}
                <b>Faculty of Technology University of Sri Jayewardhanapura </b>
                , where I continue to expand my knowledge and skills in the
                dynamic field of software engineering. With a relentless passion
                for learning and a drive to make a meaningful impact through
                technology, I am committed to pushing the boundaries of
                innovation and creating transformative digital experiences.
              </Typography>
            </Box>
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
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
