import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import {
  Navbar,
  Container,
  Nav,
  Carousel,
  Card,
  CardGroup,
  Button,
  NavDropdown,
} from "react-bootstrap";
import handshake from "./images/hand-shake.png";
import certification from "./images/certification.png";
import project from "./images/project.png";

const initialFormState = { name: "", description: "" };

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      })
    );
    setNotes(apiData.data.listNotes.items);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">RoadRunner Inc</Navbar.Brand>
          <Nav className="justify-content-end">
            <NavDropdown title="Our Services" id="ourServices">
              <NavDropdown.Item href="#stormwaterManagement">
                Stormwater Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#overflow">
                Overflow Analysis
              </NavDropdown.Item>
              <NavDropdown.Item href="#cadDesigns">CAD Design</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#testimonials">Testimonial</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
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
        Why RoadRunner Inc
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
              You have to work hard every single day. Even if that means forgetting to sleep!
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
              Success isn't an accident. It is the result of hardwork day after day, week after week,
              year after year.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
