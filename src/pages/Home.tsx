import React from "react";
import lorems from "../data/lorem";
import Card from "../ui/Card";

type IndexProps = {};

const Index = (props: IndexProps) => {
  return (
    <Card>
      {lorems.map((lorem) => (
        <p>{lorem}</p>
      ))}
    </Card>
  );
};

export default Index;
