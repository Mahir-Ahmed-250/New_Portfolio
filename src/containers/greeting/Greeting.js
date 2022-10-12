import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
import { Link } from "react-router-dom";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1
                className="greeting-typewriter"
                style={{ color: theme.green }}
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Web Developer")
                      .pauseFor(400)
                      .deleteAll()
                      .typeString("Video Editor")
                      .pauseFor(400)
                      .deleteAll()
                      .typeString("Math's Student")
                      .pauseFor(400)
                      .deleteAll()
                      .typeString("Tech Enthusiast")
                      .pauseFor(400)
                      .deleteAll()
                      .typeString("Volunteer")
                      .pauseFor(400)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  An <mark data-entity="adjective">ordinary</mark> guy<mark data-entity="pronoun">who</mark>trying to{" "}
                  <mark data-entity="verb">learn</mark>{" "}
                  <mark data-entity="skill">Web Development</mark> and{" "}
                  <mark data-entity="skill">Video Editing</mark>
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Button text="Contact me" />
                </Link>
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
