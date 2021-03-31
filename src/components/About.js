import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  heading: {
    color: "#3282b8",
    marginTop: "1rem",
    paddingTop: "1rem",
    fontWeight: 600,
  },
  text: {
    color: "#f0f5f9",
    lineHeight: "26px",
    letterSpacing: "1px",
    margin: "2rem",
  },
  button: {
    backgroundColor: "#3282b8",
    display: "block",
    margin: "2rem auto",
  },
  container: {
    backgroundColor: "#1e2022",
    overflow: "hidden",
    marginTop: "1rem",
  },
});

const About = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  const classes = useStyles();

  const downloadCV = () => {
    window.open("./Lewis Yates CV.pdf");
  };
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.container}>
        <Typography variant="h4" align="center" className={classes.heading}>
          About me
        </Typography>
        <Typography
          variant="body1"
          className={classes.text}
          style={{ margin: matches ? "2rem 30vw" : "2rem" }}
        >
          I am a self taught web developer with a passion for creating both
          beautiful and functional websites. I wish to pursue a career in web
          development, and am currently freelancing to provide my clients with
          websites to be proud of! I have experience in developing both the
          front end and back end areas of websites. <br />
          <br /> I have been interested in programming since secondary school,
          where I took computing as a GCSE and went on to do the same in
          college. I’ve taken several courses from sites such as udemy, however
          most of my learning has been completely self taught. I have developed
          a variety of skills in different programming languages and frameworks
          to be able to develop any site or web app you could think of!
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          onClick={downloadCV}
        >
          Download CV
        </Button>
      </Box>
    </>
  );
};

export default About;
