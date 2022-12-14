import React, { useReducer } from "react";
import CSS from "csstype";
import { v4 as uuid } from "uuid";

import { Experience } from "../../lib/contexts/experience-context";
import { formatDateToValue } from "../../utils/date";
import styled from "styled-components";

export type ExperienceFormProps = {
  experience?: Experience;
  onSubmit: (exp: Experience) => void;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridTemplateRows: "repeat(2, auto)",
    paddingBottom: "25px",
    marginTop: "10px",
  },
  label: {
    width: "100%",
  },
  input: {
    width: "99%",
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

const TextAreaContainer = styled.div({
  gridColumn: "span 2",
});

const TextArea = styled.textarea({
  width: "100%",
  marginTop: "5px",
});

const reducer = (
  state: Experience,
  action: { target: string; value: any }
) => {
  return {
    ...state,
    [action.target]: action.value,
  };
};

const ExperienceForm = ({
  experience: propsExperience = {
    id: uuid(),
    name: "",
    company: "",
    description: "",
    domain: "",
    location: '',
    startDate: new Date(),
    endDate: new Date(),
  },
  onSubmit,
}: ExperienceFormProps) => {
  const [experience, dispatch] = useReducer(reducer, propsExperience);

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        onSubmit(experience);
      }}
    >
      <div>
        <label>
          Intitulé du poste :
          <input style={styles.input} type="text" name="name"
            value={experience.name}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }/>
        </label>
      </div>
      <div>
        <label>
          Société :
          <input
            style={styles.input}
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }/>
        </label>
      </div>
      <div>
        <label>
          Ville :
          <input
            style={styles.input}
            type="text"
            name="location"
            value={experience.location}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }/>
        </label>
      </div>
      <div>
        <label>
          Domaine d'activité :
          <input
            style={styles.input}
            type="text"
            name="domain"
            value={experience.domain}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }/>
        </label>
      </div>
      <TextAreaContainer>
        <label>
          Description du poste :
          <TextArea
            rows={15}
            cols={40}
            name="description"
            value={experience.description}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }/>
        </label>
      </TextAreaContainer>
      <div>
        <label>
          Date de début :
          <input
            style={styles.input}
            type="date"
            name="startDate"
            value={formatDateToValue(experience.startDate)}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.valueAsDate })
            }
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
            value={formatDateToValue(experience.endDate)}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.valueAsDate })
            }
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
