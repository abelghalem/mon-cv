import React, { useContext } from "react";
import CSS from "csstype";
import userContext from "../../lib/contexts/user-context";

export type HeaderProps = {};

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
  user: {
    display: "flex",
  },
  name: {
    textAlign: "left",
    margin: "auto",
    paddingLeft: "5px",
    fontSize: "1.2rem",
  },
  image: {
    minWidth: '150px',
    height: '150px',
    backgroundColor: 'gray',
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

const Header = () => {
  const ctx = useContext(userContext);
  return (
    <header style={styles.container}>
      <div style={styles.user}>
        <img style={styles.image} src={ctx.avatarURL} alt="" />
        <p style={styles.name}>
          {ctx.surname} {ctx.name}
        </p>
      </div>
      <div style={styles.title}>
        <p>{ctx.jobTitle}</p>
      </div>
      <div style={styles.about}>
        <div>{ctx.city && `Ville : ${ctx.city}`}</div>
        <div>{ctx.phone && `Tél : ${ctx.phone}`}</div>
      </div>
    </header>
  );
};

export default Header;
