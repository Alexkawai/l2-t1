import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

class App extends React.Component {
  data = [
    {
      title: "title1",
      text: "kjnbhgv cfdxcgv hbjnkmlm jnhbgvfyt fchgvh",
    },
    {
      title: "title2",
      text: "kjnbhgv cfdxcgvhb jnkmlmj nhbgvfyt fchgvh",
    },
    {
      title: "title3",
      text: "kjnbhgv cfdxcgvhb jnkmlmj nhbgvfyt fchgvh",
    },
    {
      title: "title4",
      text: "kjnbhgv cfdxcgvhb jnkmlmj nhbgvfyt fchgvh",
    },
    {
      title: "title5",
      text: "kjnbhgv cfdxcgvhb jnkmlmj nhbgvfyt fchgvh",
    }
  ];
  render() {
    return (
      <Container style={{ height: "680px" }}>
        <Row>
          <Col md={12}>
            <Header lefts={[1, 2, 3]} rights={[1, 2, 3, 4, 5]} />
          </Col>
        </Row>
        <Row style={{ height: "80%" }}>
          <Col md={3}>
            <Nav />
          </Col>
          <Col md={6}>
            <Section header={"Zagolovok"} data={this.data} />
          </Col>
          <Col md={3}>
            <Aside />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Footer
              phones={[
                "tel:+8800567890",
                "tel:+8800567890",
                "tel:+8800567890",
                "tel:+8800567890",
              ]}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
