import React, { useState } from "react";
import CSS from "csstype";

import lorems from "./data/lorem";

import Card from "./ui/Card";
import Content from "./ui/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import EditableContent from "./ui/EditableContent";
import ExperienceContext from "./lib/contexts/experience-context";
import FormationContext from "./lib/contexts/formation-context";

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
  resetRadius: {
    borderRadius: "0",
  },
};

function App() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [formations, setFormations] = useState<any[]>([]);
  const languages = ["Français", "Anglais", "Espagnol", "Arabe"];
  const hobbies = ["Informatique", "Voitures", "Camions"];

  return (
    <div style={styles.container}>
      <Header />
      <Content>
        <Card style={styles.fullWidthCard}>
          {lorems.map((lorem) => (
            <p>{lorem}</p>
          ))}
        </Card>
        <Card>
          <ExperienceContext.Provider
            value={{
              experiences,
              setExperiences,
            }}
          >
            <EditableContent
              title={"Expériences"}
              type={"experience"}
              handleAdd={(e) => {
                setExperiences([...experiences, e]);
              }}
            >
              {experiences
                ?.sort((b, a) => a.startDate.getTime() - b.startDate.getTime())
                .map((experience, index) => (
                  <Experience
                    key={`experience-${experience.id}-${index}`}
                    showFilter={true}
                    handleDelete={(id: number) => {
                      const index = experiences.findIndex((f) => f.id === id);
                      if (index > -1) {
                        // only splice array when item is found
                        experiences.splice(index, 1); // 2nd parameter means remove one item only
                      }
                      setExperiences([...experiences]);
                    }}
                    handleUpdate={(form: any) => {
                      const index = experiences.findIndex(
                        (f) => f.id === form.id
                      );
                      const experience = experiences[index];
                      experiences[index] = { ...experience, ...form };
                      setExperiences([...experiences]);
                    }}
                    {...experience}
                  />
                ))}
            </EditableContent>
          </ExperienceContext.Provider>
        </Card>
        <Card>
          <FormationContext.Provider
            value={{
              formations,
              setFormations,
            }}
          >
            <EditableContent
              title={"Formations"}
              type={"formation"}
              handleAdd={(f) => {
                setFormations([...formations, f]);
              }}
            >
              {formations?.map((formation, index) => (
                <Formation
                  key={`formation-${formation.id}-${index}`}
                  handleDelete={(id: number) => {
                    const index = formations.findIndex((f) => f.id === id);
                    if (index > -1) {
                      // only splice array when item is found
                      formations.splice(index, 1); // 2nd parameter means remove one item only
                    }
                    setFormations([...formations]);
                  }}
                  handleUpdate={(form: any) => {
                    const index = formations.findIndex((f) => f.id === form.id);
                    const formation = formations[index];
                    formations[index] = { ...formation, ...form };
                    setFormations([...formations]);
                  }}
                  {...formation}
                />
              ))}
            </EditableContent>
          </FormationContext.Provider>
        </Card>
      </Content>
      <Card style={styles.resetRadius}>
        <Footer languages={languages} hobbies={hobbies} />
      </Card>
    </div>
  );
}

export default App;
