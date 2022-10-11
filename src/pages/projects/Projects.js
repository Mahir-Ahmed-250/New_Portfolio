import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { CardColumns, Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    fetch("https://firestore.googleapis.com/v1/projects/portfolio-a3ff3/databases/(default)/documents/projects")
      .then((response) => response.json())
      .then((projectsList) => {
        this.setState({ projects: projectsList.documents });
        console.log(projectsList.documents)
      });
  }

  render() {

    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <CardColumns>
            {this.state.projects.map((proj) => {
              return (
                <Card className="h-100">
                  <a
                    href={proj.fields.Project_Link.stringValue}
                    style={{ textDecoration: "none", color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="project">
                      <div className="project-browser">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                      </div>
                      <iframe
                        className="frame"
                        src={proj?.fields.Project_Link.stringValue}
                        frameborder="0"
                        width="
                      100%"
                        height="100%"
                        title={proj.fields.Project_Name.stringValue}
                      ></iframe>
                    </div>

                    <h2
                      style={{
                        lineHeight: "1.5",
                        marginTop: "20",
                        color: "black",
                      }}
                    >
                      {proj.fields.Project_Name.stringValue}
                      <br />
                      <a
                        style={{ color: theme.text }}
                        href={proj.fields.Project_Link.stringValue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className={`fas fa-external-link-alt`}
                          style={{
                            color: "black",
                            marginLeft: "10px",
                          }}
                        ></i>
                      </a>
                      <a
                        style={{ color: theme.text }}
                        href={proj.fields.Project_Code.stringValue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className={`fab fa-github`}
                          style={{
                            color: "black",
                            paddingLeft: "10px",
                          }}
                        ></i>
                      </a>
                      {proj.fields.Project_Code_Backend.stringValue ? (<>

                        <a
                          style={{ color: theme.text }}
                          href={proj.fields.Project_Code_Backend.stringValue}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`fas fa-server`}
                            style={{
                              color: "black",
                              paddingLeft: "10px",
                            }}
                          ></i>
                        </a>
                      </>) : (<></>)

                      }
                    </h2>

                    <Card.Body>
                      <Card.Title></Card.Title>
                      <div>
                        <Badge
                          style={{
                            marginRight: "0.5em",
                            backgroundColor: proj.fields.TechColor1.stringValue
                          }}
                        >
                          {" "}
                          {proj.fields.Technology1.stringValue}
                        </Badge>
                        <Badge
                          style={{
                            marginRight: "0.5em",
                            backgroundColor: proj.fields.TechColor2.stringValue
                          }}
                        >
                          {" "}
                          {proj.fields.Technology2.stringValue}
                        </Badge>
                        <Badge
                          style={{
                            marginRight: "0.5em",
                            backgroundColor: proj.fields.TechColor3.stringValue
                          }}
                        >
                          {" "}
                          {proj.fields.Technology3.stringValue}
                        </Badge>
                        {
                          proj.fields.Technology4.stringValue && proj.fields.TechColor4.stringValue ? (<>
                            <Badge
                              style={{
                                marginRight: "0.5em",
                                backgroundColor: proj.fields.TechColor4.stringValue
                              }}
                            >
                              {" "}
                              {proj.fields.Technology4.stringValue}
                            </Badge>

                          </>) : (<></>)
                        }
                        {
                          proj.fields.Technology5.stringValue && proj.fields.TechColor5.stringValue ? (<>
                            <Badge
                              style={{
                                marginRight: "0.5em",
                                backgroundColor: proj.fields.TechColor5.stringValue
                              }}
                            >
                              {" "}
                              {proj.fields.Technology5.stringValue}
                            </Badge>

                          </>) : (<></>)
                        }


                      </div>

                      <div
                        className="text-center"
                        style={{ marginTop: "20px" }}
                      ></div>
                    </Card.Body>
                  </a>
                </Card>
              );
            })}
          </CardColumns>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/Mahir-Ahmed-250"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
