import React, { useState } from "react";
import CSS from "csstype";

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    justifyContent: "center",
    gap: "50px",
    height: "20px",
  },
  title: {
    fontWeight: "700",
  },
};

const Footer = ({ languages }: { languages: string[] }) => {
  const [hobbies] = useState([
    "Informatique",
    "Voitures",
    "Camions",
  ]);

  return (
    <div style={styles.container}>
      <div>
        <span style={styles.title}>Langues parlées : </span>
        {languages.map((l) => (
          <span>{l} </span>
        ))}
      </div>
      <div>
        <span style={styles.title}>Centres d'intérêts : </span>
        {hobbies.map((h) => (
          <span>{h} </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
