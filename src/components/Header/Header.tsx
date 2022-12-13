import React from "react";
import CSS from "csstype";

export type HeaderProps = {
  name: string;
  title: string;
  location?: string;
  phone?: string;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    display: "grid",
    gridTemplateColumns: "150px auto 150px",
    padding: "0 10px",
    borderBottom: "1px solid black",
    backgroundColor: "#191b20",
  },
  name: {
    textAlign: "center",
  },
  title: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    fontWeight: "700",
  },
  about: {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    gap: "2px",
  },
};

const Header = ({ name, title, location, phone }: HeaderProps) => {
  return (
    <header style={styles.container}>
      <div style={styles.name}>
        <p>{name}</p>
      </div>
      <div style={styles.title}>
        <p>{title}</p>
      </div>
      <div style={styles.about}>
        <div>{location && location}</div>
        <div>{phone && `Tél: ${phone}`}</div>
      </div>
    </header>
  );
};

export default Header;
