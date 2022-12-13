import React from "react";
import CSS from "csstype";
import { formatDate } from "../../utils/date";
import Description from "../Description";

export type FormationProps = {
  school: string;
  diploma?: string;
  description: string;
  startDate: Date;
  endDate: Date;
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
  diploma: {
    fontWeight: 400,
  }
};

const Formation = ({
  school,
  diploma,
  description,
  startDate,
  endDate,
}: FormationProps) => {
  return (
    <div style={styles.container}>
      <h3>
        {school}
        {diploma && <span style={styles.diploma}>{` - ${diploma}`}</span>}
        {" - "}
        <span style={styles.small}>
          {`${formatDate(startDate)} - ${formatDate(endDate)}`}
        </span>
      </h3>
      <Description text={description} />
    </div>
  );
};

export default Formation;
