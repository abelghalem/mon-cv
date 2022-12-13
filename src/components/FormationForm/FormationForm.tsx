import React, { useRef, useState } from "react";
import CSS from "csstype";

import { FormationProps } from "../Formation/Formation";

export type FormationFormProps = {
  formation?: FormationProps;
  onSubmit: (formation: FormationProps) => void;
};

const styles: {
  [name: string]: CSS.Properties;
} = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridTemplateRows: "repeat(2, auto)",
    paddingBottom: '25px'
  },
  label: {
    width: "100%",
  },
  input: {
    width: '90%',
    height: '30px',
    marginTop: '5px',
  },
  buttonDiv: {
    gridColumn: "span 2",
    margin: 'auto',
    width: '50%'
  },
  button: {
    margin: 'auto',
    cursor: 'pointer',
    width: '100%',
    height: '40px',
    marginTop: '15px',
    fontSize: '1.3rem'
  }
};

const FormationForm = ({
  formation: propsFormation,
  onSubmit
}: FormationFormProps) => {
  const [formation, setFormation] = useState(propsFormation);

  const schoolRef = useRef<HTMLInputElement>(null)
  const diplomaRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const startDateRef = useRef<HTMLInputElement>(null)
  const endDateRef = useRef<HTMLInputElement>(null)

  if (!formation) {
    setFormation({
      school: "",
      diploma: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  return (
    <form style={styles.form} onSubmit={(e) => {
      e.preventDefault();
      if (
        !schoolRef.current?.value ||
        !descriptionRef.current?.value ||
        !startDateRef.current?.valueAsDate ||
        !endDateRef.current?.valueAsDate
      ) {
        return;
      }
      onSubmit({
        school: schoolRef.current?.value,
        diploma: diplomaRef.current?.value,
        description: descriptionRef.current?.value,
        startDate: startDateRef.current?.valueAsDate,
        endDate: endDateRef.current?.valueAsDate!,
      })
    }}>
      <div>
        <label>
          École :
          <input style={styles.input} type="text" name="name" ref={schoolRef} />
        </label>
      </div>
      <div>
        <label>
          Diplôme :
          <input style={styles.input} type="text" name="company" ref={diplomaRef} />
        </label>
      </div>
      <div>
        <label>
          Description :
          <input style={styles.input} type="text" name="description" ref={descriptionRef} />
        </label>
      </div>
      <div>
        <label>
          Date de début :
          <input style={styles.input} type="date" name="startDate" ref={startDateRef} />
        </label>
      </div>
      <div>
        <label>
          Date de fin :
          <input style={styles.input} type="date" name="endDate" ref={endDateRef} />
        </label>
      </div>

      <div style={styles.buttonDiv}>
        <button style={styles.button} type="submit">Ajouter une formation</button>
      </div>
    </form>
  );
};

export default FormationForm;
