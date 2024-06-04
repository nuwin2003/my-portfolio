import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "aos/dist/aos.css";

const About = () => {
  return (
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
            from the vibrant city of Colombo, Sri Lanka. At the youthful age of
            21, I've already embarked on an exciting journey in the realm of
            software engineering. My professional odyssey began as a Trainee
            Software Engineer at ICET, where I delved into the intricacies of
            software development and honed my skills under the guidance of
            seasoned professionals.
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
            Subsequently, I had the privilege of serving as a Software Engineer
            Intern at mobios private limited, where I contributed to various
            projects and gained invaluable hands-on experience in crafting
            innovative solutions. My educational background includes completing
            my O/Ls and A/Ls from <b>Taxila Central College</b>, followed by
            pursuing a Diploma in Software Engineering.
          </Typography>
          <Box sx={{ m: 2 }} data-aos="zoom-in" data-aos-duration="2500">
            <Typography variant="h5" component="h1" gutterBottom color="gray">
              Currently, I am pursuing my undergraduate studies at the
              prestigious{" "}
              <b>Faculty of Technology University of Sri Jayewardhanapura </b>,
              where I continue to expand my knowledge and skills in the dynamic
              field of software engineering. With a relentless passion for
              learning and a drive to make a meaningful impact through
              technology, I am committed to pushing the boundaries of innovation
              and creating transformative digital experiences.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
