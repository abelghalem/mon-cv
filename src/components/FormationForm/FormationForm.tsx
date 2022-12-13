import React, { useReducer } from "react";
import CSS from "csstype";
import { v4 as uuid } from "uuid";

import { Formation } from "../../lib/contexts/formation-context";
import { formatDateToValue } from "../../utils/date";
import styled from "styled-components";

export type FormationFormProps = {
  formation?: Formation;
  onSubmit: (formation: Formation) => void;
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
  state: Formation,
  action: { target: string; value: any }
) => {
  return {
    ...state,
    [action.target]: action.value,
  };
};

const FormationForm = ({
  formation: propsFormation = {
    id: uuid(),
    description: "",
    school: "",
    diploma: "",
    startDate: new Date(),
    endDate: new Date(),
  },
  onSubmit,
}: FormationFormProps) => {
  const [formation, dispatch] = useReducer(reducer, propsFormation);

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        onSubmit(formation);
      }}
    >
      <div>
        <label>
          École :
          <input
            style={styles.input}
            type="text"
            name="school"
            value={formation.school}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Diplôme :
          <input
            style={styles.input}
            type="text"
            name="diploma"
            value={formation.diploma}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }
          />
        </label>
      </div>
      <TextAreaContainer>
        <label>
          Description du poste :
          <TextArea
            rows={15}
            cols={40}
            name="description"
            value={formation.description}
            onChange={(e: any) =>
              dispatch({ target: e.target.name, value: e.target.value })
            }
          />
        </label>
      </TextAreaContainer>
      <div>
        <label>
          Date de début :
          <input
            style={styles.input}
            type="date"
            name="startDate"
            value={formatDateToValue(formation.startDate)}
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
            value={formatDateToValue(formation.endDate)}
            onChange={(e) =>
              dispatch({ target: e.target.name, value: e.target.valueAsDate })
            }
          />
        </label>
      </div>

      <div style={styles.buttonDiv}>
        <button style={styles.button} type="submit">
          Ajouter une formation
        </button>
      </div>
    </form>
  );
};

export default FormationForm;
