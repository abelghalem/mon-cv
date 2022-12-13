import React, { useState } from "react";
import CSS from "csstype";

export type DescriptionProps = {
  text: string;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  seeMore: {
    color: '#191b20',
    cursor: 'pointer',
    fontWeight: '500'
  },
};

const Description = ({ text }: DescriptionProps) => {
  const isLarge = text.length > 115;
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <p>
        {!isLarge || (isLarge && showAll)
          ? text
          : text.substring(0, 100) + "..."}
        {isLarge && (
          <span style={styles.seeMore} onClick={() => setShowAll(!showAll)}>
            {showAll ? " Voir moins..." : " Voir plus..."}
          </span>
        )}
      </p>
    </>
  );
};

export default Description;
