import React from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Badge from 'react-bootstrap/Badge';

function Projects(props) {
  return (
    <div>
      <h1>Mes projets</h1>
      <Card className="project-item">
        <Card.Header as="h5">Walter</Card.Header>
          <Card.Body>
          <Badge as="h6" variant="dark">2020 - Airbus</Badge>

            <Tabs defaultActiveKey="desc">
              <Tab eventKey="desc" title="Description">
                <Card.Body>
                  Logiciel servant à ingérer des données dans une base de données visant à générer une business value utile aux compagnies aériennes et aux usines Airbus grâce à l'utilisation de technologies de big data et de machine learning.
                </Card.Body>
              </Tab>
              <Tab eventKey="techno" title="Technologies">
                <Card.Body>
                  <Badge as="h6" variant="dark">React</Badge> <Badge as="h6" variant="danger">Java</Badge> <Badge as="h6" variant="warning">Python</Badge> <Badge as="h6" variant="success">Splunk</Badge>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
        <Card className="project-item">
        <Card.Header as="h5">Inov'Apps</Card.Header>
          <Card.Body>
          <Badge as="h6" variant="dark">2018 - Inovans</Badge>

            <Tabs defaultActiveKey="desc">
              <Tab eventKey="desc" title="Description">
                <Card.Body>
                  Création d'une application web visant à une meilleure gestion des collobarateurs dans une PME. Renseignez les projets sur lesquelles vous travailler, faites vos comptes-rendus annuel en ligne, et bien d'autres fonctionnalités.
                </Card.Body>
              </Tab>
              <Tab eventKey="techno" title="Technologies">
                <Card.Body>
                  <Badge as="h6" variant="dark">Java</Badge> <Badge as="h6" variant="danger">Angular</Badge>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
        <Card className="project-item">
        <Card.Header as="h5">Project Solaire</Card.Header>
          <Card.Body>
          <Badge as="h6" variant="dark">2016 - Lycée Saint Exupéry Blagnac</Badge>

            <Tabs defaultActiveKey="desc">
              <Tab eventKey="desc" title="Description">
                <Card.Body>
                Le projet solaire est une compétition organisé chaque année entre plusieurs écoles et lycées de la région Occitanie.
                Il faut concevoir un véhicule électrique radiocommandé et finir la course le plus rapidemment possible pour gagner.
                </Card.Body>
              </Tab>
              <Tab eventKey="techno" title="Technologies">
                <Card.Body>
                  <Badge as="h6" variant="success">Arduino</Badge> <Badge as="h6" variant="dark">C</Badge> <Badge as="h6" variant="warning">Electronique</Badge>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
    </div>
  )
}
 
export default Projects;