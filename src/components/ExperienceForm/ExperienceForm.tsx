import React, { useRef, useState } from "react";
import CSS from "csstype";

import { ExperienceProps } from "../Experience/Experience";

export type ExprienceFormProps = {
  experience?: ExperienceProps;
  onSubmit: (exp: ExperienceProps) => void;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridTemplateRows: "repeat(2, auto)",
  },
  label: {
    width: "100%",
  },
  input: {
    width: "90%",
    height: "30px",
    marginTop: "5px",
  },
  buttonDiv: {
    gridColumn: "span 2",
    margin: "auto",
    width: "50%",
  },
  button: {
    margin: "auto",
    cursor: "pointer",
    width: "100%",
    height: "40px",
    marginTop: "15px",
    fontSize: "1.3rem",
  },
};

const ExperienceForm = ({
  experience: propsExperience,
  onSubmit,
}: ExprienceFormProps) => {
  const [experience, setExperience] = useState(propsExperience);

  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  if (!experience) {
    setExperience({
      name: "",
      company: "",
      description: "",
      startDate: new Date(),
      location: "",
    });
  }

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !nameRef.current?.value ||
          !companyRef.current?.value ||
          !descriptionRef.current?.value ||
          !startDateRef.current?.valueAsDate ||
          !endDateRef.current?.valueAsDate
        ) {
          return;
        }
        onSubmit({
          name: nameRef.current?.value,
          company: companyRef.current?.value,
          description: descriptionRef.current?.value,
          location: locationRef.current?.value,
          startDate: startDateRef.current?.valueAsDate,
          endDate: endDateRef.current?.valueAsDate,
        });
      }}
    >
      <div>
        <label>
          Intitulé du poste :
          <input style={styles.input} type="text" name="name" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Société :
          <input
            style={styles.input}
            type="text"
            name="company"
            ref={companyRef}
          />
        </label>
      </div>
      <div>
        <label>
          Description du poste :
          <input
            style={styles.input}
            type="text"
            name="description"
            ref={descriptionRef}
          />
        </label>
      </div>
      <div>
        <label>
          Ville :
          <input
            style={styles.input}
            type="text"
            name="location"
            ref={locationRef}
          />
        </label>
      </div>
      <div>
        <label>
          Date de début :
          <input
            style={styles.input}
            type="date"
            name="startDate"
            ref={startDateRef}
          />
        </label>
      </div>
      <div>
        <label>
          Date de fin :
          <input
            style={styles.input}
            type="date"
            name="endDate"
            ref={endDateRef}
          />
        </label>
      </div>

      <div style={styles.buttonDiv}>
        <button style={styles.button} type="submit">
          Ajouter une expérience
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
