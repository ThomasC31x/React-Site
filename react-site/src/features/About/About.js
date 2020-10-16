import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom'; 
 
function About(props) {
  return (
    <div className="app">
      <h1>À propos de moi</h1>

      <Card>
        <Card.Header as="h5">Présentation</Card.Header>
        <Card.Body>
          <Card.Text>
          Je suis Thomas Cannet, 22 ans et passionné par le developpement informatique.
          Actuellement en alternance au sein d'Airbus SAS à Blagnac et en Master Développement Logiciel, Mobile et IoT à Ynov.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header as="h5">Parcours scolaire</Card.Header>
        <Card.Body>
          <Card.Title><Badge variant="primary">2019 - 2021</Badge> Ynov Toulouse</Card.Title>
          <Card.Text>
            Master Dev. Mobile et IoT
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title><Badge variant="secondary">2018 - 2019</Badge> ORT Colomiers</Card.Title>
          <Card.Text>
            Licence CSI (Concepteur de systèmes d'information)
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title><Badge variant="secondary">2018 - 2019</Badge> CFA Blagnac</Card.Title>
          <Card.Text>
            BTS SIO (Services Informatique aux Organisations)
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Header as="h5">Parcours Professionnel</Card.Header>
        <Card.Body>
          <Card.Title><Badge variant="primary">2019 - 2021</Badge> Airbus - Blagnac</Card.Title>
          <Card.Text>
            Création et maintenance de logiciels utiles au projet Skywise<br/>
            <Badge variant="dark">React</Badge> <Badge variant="success">Slate</Badge> <Badge variant="warning">Python</Badge>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title><Badge variant="secondary">2018 - 2019</Badge> Inovans - Toulouse</Card.Title>
          <Card.Text>
            Licence CSI (Concepteur de systèmes d'information)<br/>
            <Badge variant="danger">Angular</Badge> <Badge variant="warning">Java</Badge>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title><Badge variant="secondary">2016 - 2018</Badge> Acti'conseils - Blagnac</Card.Title>
          <Card.Text>
            Création de logiciels de gestion de personnel, sites web et SMQ.<br/>
            <Badge variant="success">HTML / CSS</Badge> <Badge variant="primary">PHP</Badge>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Header as="h5">Compétences</Card.Header>
        <Card.Body>
          <Card.Text as="h4" className="list-competencies">        
            <Badge variant="danger">React</Badge> 
            <Badge variant="danger">Slate</Badge> 
            <Badge variant="danger">Python</Badge>
            <Badge variant="danger">Angular</Badge> 
            <Badge variant="danger">Java</Badge>
            <Badge variant="danger">C / SDL</Badge>
            <Badge variant="danger">C++ / QT</Badge>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Header as="h5">Intérêts</Card.Header>
        <Card.Body>
          <Card.Text as="h6">        
            Sports : Handball, Running, Vélo, Cross-fit, Randonnée
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Text as="h2">        
            <Button variant="primary"><Link to="/projects" className="white">Voir mes projets</Link></Button> 
            <Button className="ml-5" variant="danger" href="../../CV.pdf"><a className="white" href='../CV.pdf' download>Télécharger mon CV</a></Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
 
export default About;