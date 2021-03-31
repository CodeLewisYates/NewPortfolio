import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#3282b8",
    fontSize: "3rem",
    fontWeight: 500,
  },
  subtitle: {
    color: "#f0f5f9",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const matches = useMediaQuery("(min-width:1500px)");
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Typography
        variant="h4"
        className={classes.title}
        style={{ fontSize: matches ? "4rem" : "3rem" }}
      >
        <Typed strings={["Lewis Yates"]} typeSpeed={80} />
      </Typography>
      <br />
      <Typography variant="h5" className={classes.subtitle}>
        <Typed
          strings={["Web Developer"]}
          typeSpeed={40}
          startDelay={1300}
          showCursor={false}
        />
      </Typography>
    </Box>
  );
};

export default Header;
