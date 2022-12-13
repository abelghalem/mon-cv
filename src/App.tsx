import React, { useState } from "react";
import CSS from "csstype";

import lorems from "./data/lorem";
import experiencesData from "./data/experiences";
import formationsData from "./data/formations";

import Card from "./components/Card";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import ExperienceForm from "./components/ExperienceForm";
import FormationForm from "./components/FormationForm";

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    backgroundColor: "#282c34",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
    color: "white",
  },
  fullWidthCard: {
    gridColumn: "span 2",
  },
};

// background-color: #191b20;

function App() {
  const [experiences, setExperiences] = useState<any[]>(experiencesData);
  const [formations, setFormations] = useState(formationsData);
  return (
    <div style={styles.container}>
      <Header
        name={"Belghalem Abdelmounaim"}
        title={"Développeur React/Typescript"}
        location={"Nantes"}
        phone={"0123456789"}
      />
      <Content>
        <Card style={styles.fullWidthCard}>
          {lorems.map((lorem) => (
            <p>{lorem}</p>
          ))}
        </Card>
        <Card>
          <h2>Expériences</h2>
          {experiences.map((experience, index) => (
            <Experience
              key={`experience-${experience.name}-${index}`}
              {...experience}
            />
          ))}
        </Card>
        <Card>
          <h2>Formation</h2>
          {formations.map((formation, index) => (
            <Formation
              key={`formation-${formation.school}-${index}`}
              {...formation}
            />
          ))}
        </Card>
        <Card>
          <h2>Formulaire expériences</h2>
          <ExperienceForm onSubmit={(e) => {
            setExperiences([...experiences, e])
          }} />
        </Card>
        <Card>
          <h2>Formulaire formations</h2>
          <FormationForm onSubmit={(f) => {
            setFormations([...formations, f])
          }} />
        </Card>
        <Card style={styles.fullWidthCard}>
          <Footer />
        </Card>
      </Content>
    </div>
  );
}

export default App;
