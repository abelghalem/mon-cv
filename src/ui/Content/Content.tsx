import React from "react";
import CSS from "csstype";

export type ContentProps = {
  children: React.ReactNode;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    padding: "20px 50px",
    display: "grid",
    gridTemplateRows: "repeat(3, fit-content(200px))",
    gap: "10px",
  },
};

const Content = ({ children }: ContentProps) => {
  return <div style={styles.container}>{children}</div>;
};

export default Content;
