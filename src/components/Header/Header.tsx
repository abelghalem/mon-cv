import React, { useContext } from "react";
import CSS from "csstype";
import generalContext from "../../lib/contexts/general-context";

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
    minWidth: "150px",
    height: "150px",
    backgroundColor: "gray",
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
  const ctx = useContext(generalContext);
  if (!ctx) {
    return <></>;
  }

  const { user } = ctx;
  return (
    <header style={styles.container}>
      <div style={styles.user}>
        <img style={styles.image} src={user.avatarURL} alt="" />
        <p style={styles.name}>
          {user.surname} {user.name}
        </p>
      </div>
      <div style={styles.title}>
        <p>{user.jobTitle}</p>
      </div>
      <div style={styles.about}>
        <div>{user.city && `Ville : ${user.city}`}</div>
        <div>{user.phone && `Tél : ${user.phone}`}</div>
      </div>
    </header>
  );
};

export default Header;
