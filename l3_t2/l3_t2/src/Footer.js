import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {

  length = Math.trunc(12 / this.props.phones.length);
  render() {
    return (
      <Container style={{ position: "fixed", bottom: "10px", border: "1px solid black",}}>
        <Row>
          {this.props.phones.map((phone) => (
            <Col md={this.length}><a href={phone}>Звоните нам бесплатно!</ a></Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Footer;
//style={{ bottom: "10px", position: "absolute" }}
