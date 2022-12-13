import React from "react";
import CSS from "csstype";

export type CardProps = {
  children: React.ReactNode;
  style?: CSS.Properties;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    padding: "5px 20px",
  },
};

const Card = ({ style: propStyle, children }: CardProps) => {
  return <div style={{ ...styles.container, ...propStyle }}>{children}</div>;
};

export default Card;
