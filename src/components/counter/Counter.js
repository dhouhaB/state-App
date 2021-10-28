import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    Person: {
      fullName: "Dhouha Bessalah",
      bio: "React",
      imgSrc:"https://t3.ftcdn.net/jpg/03/29/36/40/360_F_329364028_wVuGGblS5BxfbbQYiPMZzpzOuAYUBkzx.jpg" ,
      profession: "Student",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div className="borderDesign">
        {this.state.show && (
          <div div className="divDesign">
            <h1 style={{ color:"black" }}>{this.state.Person.fullName}</h1>
            <h2 style={{ color:"black" }}>{this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt="coder girl"
              style={{ width: "30%", borderRadius: "100%" }}
            ></img>
            <h2 style={{ color:"black" }}>{this.state.Person.profession}</h2>

            <h2 style={{ color:"black" }}> {this.state.timer}</h2>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}
