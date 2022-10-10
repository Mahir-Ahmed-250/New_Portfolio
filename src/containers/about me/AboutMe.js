import React from "react";
import { Fade } from "react-reveal";
import AboutMeSection from "./AboutMeSection";

export default function AboutMe(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            About Me
          </h1>
        </Fade>
      </div>
      <AboutMeSection theme={theme} />
    </div>
  );
}
