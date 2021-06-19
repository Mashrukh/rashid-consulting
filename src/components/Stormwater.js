import { Card, Figure, Jumbotron } from "react-bootstrap";

const Stormwater = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Stormwater Project X</h1>
      </Jumbotron>
      <Figure>
        <Figure.Image
          width={400}
          height={400}
          alt="171x180"
          src="https://middlesexcentre.on.ca/sites/default/files/images/2019-02/232_stormwater_diagram.jpg"
        />
        <Figure.Caption>
          Figure 1: 2012 Design of North York General Hospital
        </Figure.Caption>
      </Figure>
      <br />
      <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>North York General Hospital Stormwater Design</Card.Title>
          <Card.Text>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacus velit, bibendum quis nisl a, congue molestie libero. Donec eu posuere odio, id fringilla mi. Donec lobortis, mi ac efficitur interdum, ex leo tincidunt leo, sit amet dignissim sapien felis ac mauris. Nulla diam metus, blandit eget congue nec, pharetra at ipsum. Aenean ullamcorper nunc in leo blandit mollis. Duis vel tellus sit amet enim scelerisque dapibus pellentesque non tortor. Praesent non eros nec felis volutpat fermentum. Mauris sed iaculis metus. Suspendisse porttitor dignissim est, vitae tincidunt arcu ornare et. Mauris commodo urna id mi bibendum ullamcorper. Suspendisse eu mi id augue elementum semper non in turpis. Praesent ullamcorper maximus risus non varius.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Stormwater;
