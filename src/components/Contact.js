import { Card, Image } from "react-bootstrap";
import profile from "./../images/profile.png";

const Contact = () => {
  return (
    <div>
      <Image src={profile} thumbnail />
      <br />
      <br />
      <Card border="light" style={{ width: "60rem", margin: "auto" }}>
        <Card.Header as="h5">Contact Us</Card.Header>
        <Card.Body>
          <Card.Title>We would love to hear from you</Card.Title>
          <Card.Text>
            Email: help@avengerinc.com
          </Card.Text>
          <Card.Text>
            Phone: 416-716-0920
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
