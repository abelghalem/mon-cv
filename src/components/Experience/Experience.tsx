import React from "react";
import CSS from "csstype";
import Description from "../Description";
import { formatDate } from "../../utils/date";

export type ExperienceProps = {
  name: string;
  company: string;
  description: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  container: {
    borderBottom: "1px solid white",
  },
  small: {
    fontSize: "0.7rem",
  },
};

const Experience = ({
  name,
  company,
  description,
  location,
  startDate,
  endDate,
}: ExperienceProps) => {
  return (
    <div style={styles.container}>
      <h3>
        {name}
        <span style={styles.small}> chez </span>
        {company}
        {" - "}
        <span style={styles.small}>
          {formatDate(startDate)}
          {endDate && ` - ${formatDate(endDate)}`}
          {!endDate && ` - Poste actuel`}
          {location && ` / ${location}`}
        </span>
      </h3>
      <Description text={description} />
    </div>
  );
};

export default Experience;
