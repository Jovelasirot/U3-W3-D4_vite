import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Container
    className="d-flex vh-100 align-items-center justify-content-center 
  "
  >
    <Row className="flex-column text-center">
      <Col xs={12} md={6}>
        <iframe
          src="https://giphy.com/embed/U6GixhwsEXOlZSYvqq"
          width="480"
          height="480"
          allowFullScreen
        ></iframe>
      </Col>
      <Col>
        <h2 className="mt-2 text-light">404 - Not Found</h2>
        <Button variant="primary" className="text-white mt-2 ">
          <Link to="/" className="nav-link ">
            Go Home
          </Link>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
