import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
//import  './assets/css/shakazz.css';

function UserHeader() {
  const mapStyles = {
  width: '100%',
  height: '100%',
};
  return (
    <div>
    <Carousel className="home_page_section_shakazz">
      <Carousel.Item interval={10000}>
        <Carousel.Caption>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <Carousel.Caption>
          <h2>Découvrez et profiter de la puissance du crowdlending</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <Carousel.Caption>
          <h2>Découvrez et profiter de la puissance du crowdlending</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
      <Jumbotron className="home_page_section_presentation">
        <h1>Présentation de Shakazz</h1>
        <p>
          Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum. L'avantage du latin est que l'opérateur sait au premier coup d'œil que la page contenant ces lignes n'est pas valide et que l'attention du lecteur n'est pas dérangée par le contenu, lui permettant de demeurer concentré sur le seul aspect graphique.
        </p>
        <br/>
        <a><strong>En savoir plus</strong></a>
    </Jumbotron>
    <div className="home_page_section_whyus">
      <h1>Pourquoi nous choisir?</h1>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Caractéristiques 1</Card.Title>
          </Card.Body>
          <p>
            <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
          </p>
        </Card>
      </CardDeck>
      </div>
          <div className="home_page_section_market">
      <h1>Notre marché en un coup d'oeil</h1>
         <CardDeck className="home_page_section_market_carddeck">
          <Card className="home_page_section_market_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <center><h2>En savoir plus</h2></center>
          </Card>
          <Card className="home_page_section_market_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Cryptomonaies</Card.Title>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <center><h2>En savoir plus</h2></center>
          </Card>
        </CardDeck>
      </div>
      <div className="home_page_section_plans">
      <center><h1>Plans</h1></center>
      <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.</p>
         <CardDeck className="home_page_section_market_carddeck">
          <Card className="home_page_section_market_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <center><h2>En savoir plus</h2></center>
          </Card>
          <Card className="home_page_section_market_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <center><h2>En savoir plus</h2></center>
          </Card>
          <Card className="home_page_section_market_card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Cryptomonaies</Card.Title>
            </Card.Body>
            <p>
              <small className="text-muted">Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été</small>
            </p>
            <br/>
            <center><h2>En savoir plus</h2></center>
          </Card>
        </CardDeck>
      </div>
      <div className="home_page_section_trust">
      <center><h1>Ils nous font confiance</h1></center>
      <Container>
        <Row>
          <Col xs={5} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={5} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={5} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
          <Col xs={5} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </Container>
      </div>
       <div className="home_page_section_started">
        <Row>
          <Col className="home_page_section_started_col1">
            <div className="google-map-code">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </Col>
          <Col>
            <Jumbotron className="home_page_section_started_jumbotron">
              <h1>Ready to started?</h1>
              <p>
                Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum.
              </p>
              <p>
                <center><Button variant="primary">Commencez</Button></center>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserHeader;
