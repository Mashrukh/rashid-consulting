import { Carousel, Card, CardGroup, Button } from "react-bootstrap";
import handshake from "./../images/hand-shake.png";
import certification from "./../images/certification.png";
import project from "./../images/project.png";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="h-80 w-50"
            src="https://images.financialexpress.com/2018/10/dam.jpg"
            alt="First slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-80 w-50"
            src="https://trusteyman.com/wp-content/uploads/2018/10/How-Deep-Are-Sewer-Lines-e1539276949275-1024x622.jpeg"
            alt="Second slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-80 w-50"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Queenston-Chippawa_power_canal_-a.jpg"
            alt="Third slide"
            fluid
          />
        </Carousel.Item>
      </Carousel>
      <br />

      <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            semper pellentesque enim, in tempus diam rhoncus id. Cras felis
            eros, elementum ut sapien id, dictum cursus odio. Ut scelerisque
            bibendum venenatis. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Maecenas ornare mi sit
            amet auctor accumsan. Vestibulum suscipit sapien eget odio euismod
            eleifend. Etiam maximus imperdiet congue. Cras quis tincidunt dolor.
            Proin lacinia imperdiet metus, quis egestas lorem tempor ac. In
            rutrum dictum rhoncus.
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br />

      {/* <Card
    className="bg-dark text-white"
    style={{ width: "60rem", margin: "auto" }}
  >
    <Card.Img
      style={{ height: "10rem" }}
      src="https://www.chargify.com/blog/wp-content/uploads/2015/12/CUSTOMER-SUCCESS-COVER2.png"
      alt="Card image"
    />
    <Card.ImgOverlay>
      <Card.Title>Why Us?</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.ImgOverlay>
  </Card> */}

      <Card.Header as="h5" style={{ width: "60rem", margin: "auto" }}>
        Why Avengers Inc
      </Card.Header>
      <CardGroup style={{ width: "60rem", margin: "auto" }}>
        <Card>
          <Card.Img
            src={handshake}
            style={{ width: "13rem", height: "13rem", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Customer First</Card.Title>
            <Card.Text>
              The customer is always right SpongeBob! You have to listen to the
              customer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            src={certification}
            style={{ width: "13rem", height: "13rem", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Experience</Card.Title>
            <Card.Text>
              First you put the patty in the bun, then ketchup, mustard, lettuce, lemon, bu, in that ORDER!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            src={project}
            style={{ width: "13rem", height: "13rem", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Successful Projects</Card.Title>
            <Card.Text>
              Once there was a very successful company, there were so successful, that everyone else quit.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />
    </div>
  );
};

export default Home;
