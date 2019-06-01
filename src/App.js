import React, {Component} from 'react'; 
import FormControl from 'react-bootstrap/FormControl';
import {
    BrowserRouter as Router, 
    Link, 
    Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from './Form';
import './app.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-133675835-1');
};

const topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters/'
        },
        {
          name: 'Programatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ]
  
  function Resource ({ match }) {
    const topic = topics.find(({ id }) => id === match.params.topicId)
      .resources.find(({ id }) => id === match.params.subId)
  
    return (
      <div>
        <h3>{topic.name}</h3>
        <p>{topic.description}</p>
        <a href={topic.url}>More info.</a>
      </div>
    )
  }
  
  function Splash () {
    return (
      <rTag>
      <h1>
          <center id="home">
          <Container>
                <Image src={require('./genmain.png')} fluid />
          </Container>
            <br></br>
            <br></br>
            <br></br>
            <form action="#info">
              <Button variant="dark" size="lg" type="submit">   ▾   </Button>
            </form>
            <br></br>
          </center>
          
          <center id="info">
            <Jumbotron>
              <biggestTextW>
                Our Mission
              </biggestTextW>
              <br></br>
              <p2>
                Vizumo is a software company with the goal of accelerating and enhancing 
                the home buying experience.
              </p2>
              <br></br>
              <br></br>
              <p2>
                <form action="#concept">
                  <Button variant="dark" size="lg" type="submit">Learn more</Button>
                </form>
              </p2>
            </Jumbotron>

            <Carousel id="photos">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./homes/modern_home.jpg")}
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./homes/modern_interior.jpg")}
                  //src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./homes/small_house.jpg")}
                  //src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>
          </center>

          <center id="concept">
            <Jumbotron>
              <biggestTextW>
                Concept
              </biggestTextW>
              <br></br>
              <CardColumns>
                <Card>
                  <Card.Img variant="top" src={require("./homes/nice_interior.jpg")} />
                  <Card.Body>
                    <Card.Title>Listing Agent</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      “Home isn't where you're from, it's where you find light when all grows dark.” 
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Pierce Brown<cite title="Source Title">Golden Son</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Card>
                <Card>
                  <Card.Img variant="top" src={require("./homes/walkway.jpg")} />
                  <Card.Body>
                    <Card.Title>Buying Agent</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Competitors</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img src={require("./homes/happy_realtor.png")} />
                  <Card.Body>
                    <Card.Title>Home Buyers</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Advantages</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <br></br>
              <p2>
                <form action="#team">
                  <Button variant="dark" size="lg" type="submit">Our Team</Button>
                </form>
              </p2>
            </Jumbotron>
          </center>

          <center id="team">
            <biggestText>
              Our Team
            </biggestText>
            <br></br>
            <Container>
              <Row>
                <Col xs={12} md={4}>
                  <Image src={require("./people/sim.png")} fluid />
                  <medText class="caption center-block">Simeon, CEO</medText>
                </Col>
                <Col xs={12} md={4}>
                  <Image src={require("./people/noosh.png")} fluid />
                  <medText class="caption center-block">Nooshin, COO</medText>
                </Col>
                <Col xs={12} md={4}>
                  <Image src={require("./people/aus.png")} fluid />
                  <medText class="caption center-block">Austin, CTO</medText>
                </Col>
              </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </center>
      </h1>

      <center id="table-of-contents">
        <Container>
          <botTag>
            <Row>
              <Col>Content</Col>
              <Col xs={4}>Contact</Col>
              <Col>Resources</Col>
            </Row>
          </botTag>
          <botTagLinked>
            <Row>
              <Col><a href="#home">Home</a></Col>
              <Col xs={4}><a href="https://www.linkedin.com/in/simeon-bowman/">Simeon</a></Col>
              <Col>-</Col>
            </Row>
            <Row>
              <Col><a href="#info">Mission</a></Col>
              <Col xs={4}><a href="https://www.linkedin.com/in/nooshin-shahlari/">Nooshin</a></Col>
              <Col>-</Col>
            </Row>
            <Row>
              <Col><a href="#concept">About</a></Col>
              <Col xs={4}><a href="https://www.linkedin.com/in/austinirvine/">Austin</a></Col>
              <Col>-</Col>
            </Row>
          </botTagLinked>
        </Container>
        <br></br>
      </center>
      </rTag>
    )
  }
  
  class App extends Component {
    render() {
      return (
        <Router>
            <div className="app">
                <header>
                  {/* Global site tag (gtag.js) - Google Analytics */}
                  <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-133675835-1"
                  />
                  <script>{injectGA()}</script>
                </header>
                <Navbar bg="green" expand="lg">
                    <Navbar.Brand href="/vizumo-site/">
                    <img
                      alt=""
                      src={require('./gen.png')}
                      width="60"
                      height="60"
                      className="d-inline-block align-center"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="navClass">
                            {/* <Link to="/"><Nav.Link href="/"></Nav.Link></Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
    
                <Route exact path='/' component={Splash} />
            </div>
        </Router>
      )
    }
  }
  
  export default App