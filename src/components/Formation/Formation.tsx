import React from "react";
import CSS from "csstype";
import { formatDate } from "../../utils/date";
import Description from "../../ui/Description";
import { Formation as FormationType } from "../../lib/contexts/formation-context";
import styled from "styled-components";
import Modal from "react-modal";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import FormationForm from "../FormationForm";

export type FormationProps = {
  handleUpdate: (formation: FormationType) => void;
  handleDelete: (id: string) => void;
} & FormationType;

const styles: {
  [name: string]: CSS.Properties;
} = {
  small: {
    fontSize: "0.7rem",
  },
  diploma: {
    fontWeight: 400,
  },
};

const Container = styled.div({
  borderTop: "1px solid white",
  display: "grid",
  paddingTop: "5px",
  gridTemplateRows: "repeat(2, auto)",
  gridTemplateColumns: "auto 100px",
});

const Title = styled.div({});

const Buttons = styled.div({
  display: "grid",
  gap: "5px",
  gridTemplateColumns: "auto auto",
});

const Button = styled.button({
  height: "40px",
});

const DescriptionContainer = styled.div({
  gridColumn: "span 2",
});

Modal.setAppElement("#root");
const Formation = ({ handleUpdate, handleDelete, ...formation }: FormationProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { id, school, diploma, description, startDate, endDate } = formation;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Title>
        <h3>
          {school}
          {diploma && <span style={styles.diploma}>{` - ${diploma}`}</span>}
          {" - "}
          <span style={styles.small}>
            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
          </span>
        </h3>
      </Title>
      <Buttons>
        <Button onClick={openModal}>
          <AiFillEdit />
        </Button>
        <Button>
          <AiFillDelete />
        </Button>
      </Buttons>
      <DescriptionContainer>
        <Description text={description} />
      </DescriptionContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ajouter"
      >
        <div>
          <button onClick={closeModal}>X</button>
        </div>
        <div>
          <FormationForm
            formation={formation}
            onSubmit={(formation) => {
              handleUpdate(formation);
              closeModal();
            }}
          />
        </div>
      </Modal>
    </Container>
  );
};

export default Formation;
