import React from "react";
import { Container } from "react-bootstrap";

class Section extends React.Component {
  render() {
    return (
      <Container
        style={{
          border: "1px solid black",
        }}
      >
        <h2>{this.props.header}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "max-content",
            flexWrap: "wrap",
          }}
        >
          {this.props.data.map((data) => (
            <div
              style={{
                boxSizing: "border-box",
                padding: "10px",
                width: "30%",
              }}
            >
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default Section;
