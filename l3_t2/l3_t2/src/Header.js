import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Header extends React.Component {
 
  render() {
    return (
      <Container style={{
        border: "1px solid black",
      }}>
        <Row>
          <Col md={6}>{this.props.lefts.map((left) => left + ",")}</Col>
          <Col md={6}>{this.props.rights.map((right) => right + ",")}</Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
