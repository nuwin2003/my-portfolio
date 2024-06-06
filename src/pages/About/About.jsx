import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            m: { lg: 2, xs: 1 },
            fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" },
          }}
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          Who am I ?
        </Typography>
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{ m: { lg: 2, xs: 1 } }}
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            color="gray"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", lg: "1.5rem" } }}
          >
            Hi, I'm Nuwin Vinwath, a passionate Full Stack Developer hailing
            from the vibrant city of Colombo, Sri Lanka. At the youthful age of
            21, I've already embarked on an exciting journey in the realm of
            software engineering. My professional odyssey began as a Trainee
            Software Engineer at ICET, where I delved into the intricacies of
            software development and honed my skills under the guidance of
            seasoned professionals.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{ m: { lg: 2, xs: 1 } }}
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            color="gray"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", lg: "1.5rem" } }}
          >
            Subsequently, I had the privilege of serving as a Software Engineer
            Intern at mobios private limited, where I contributed to various
            projects and gained invaluable hands-on experience in crafting
            innovative solutions. My educational background includes completing
            my O/Ls and A/Ls from Taxila Central College, followed by pursuing a
            Diploma in Software Engineering.
          </Typography>
          <Box
            sx={{ m: { lg: 2, xs: 1 } }}
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              color="gray"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", lg: "1.5rem" } }}
            >
              Currently, I am pursuing my undergraduate studies at the
              prestigious Faculty of Technology University of Sri
              Jayewardhanapura, where I continue to expand my knowledge and
              skills in the dynamic field of software engineering. With a
              relentless passion for learning and a drive to make a meaningful
              impact through technology, I am committed to pushing the
              boundaries of innovation and creating transformative digital
              experiences.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default About;
