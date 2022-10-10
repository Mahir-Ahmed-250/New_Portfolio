import React, { Component } from "react";

import { Fade } from "react-reveal";

class SkillSection extends Component {
  state = {
    abouts: [],
  };

  componentDidMount() {
    fetch("about.json")
      .then((response) => response.json())

      .then((aboutsList) => {
        this.setState({ abouts: aboutsList });
      });
  }
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {this.state.abouts.map((abt) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <img
                  style={{
                    borderRadius: "50px",
                    margin: "0 auto",
                  }}
                  width={300}
                  height="100%"
                  src={abt.img}
                  alt=""
                />
              </Fade>
              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h4
                    className="skills-heading-2"
                    style={{ color: theme.green }}
                  >
                    I completed my graduation in Mathematics, right now i am
                    focusing on Web development and learning new technology's.
                  </h4>
                </Fade>
                <br />

                <Fade right duration={2000}>
                  <span style={{ fontWeight: "bolder" }}>
                    Comfortable With:
                  </span>
                  <span style={{ display: "inline" }}>{abt.comfortable}</span>
                </Fade>

                <Fade right duration={2000}>
                  <div style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bolder" }}>
                      Familiar With:{" "}
                    </span>
                    <span style={{ display: "inline" }}>{abt.familiar}</span>
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  <div style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bolder" }}>Tools: </span>
                    <span style={{ display: "inline" }}>{abt.tools}</span>
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
