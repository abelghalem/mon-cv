import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ExperienceForm from "../../components/ExperienceForm";
import FormationForm from "../../components/FormationForm";

export type EditableContentProps = {
  title: string;
  children: React.ReactNode;
  type: string;
  showFilter?: boolean;
  handleAdd?: (res: any) => void;
};

const Container = styled.div({
  display: "grid",
  gridAutoRows: "max-content",
});

const Header = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 70px",
});

const Content = styled.div({});

const Button = styled.button({
  width: "50px",
  height: "40px",
  margin: "auto",
  fontSize: "1.3rem",
});

Modal.setAppElement("#root");

const EditableContent = ({
  title,
  handleAdd,
  children,
  type,
}: EditableContentProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <Button onClick={openModal}>+</Button>
      </Header>
      <Content>{children}</Content>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ajouter"
      >
        <div>
          <button onClick={closeModal}>X</button>
        </div>
        <div>
          {type === "experience" && (
            <ExperienceForm
              onSubmit={(experience) => {
                if (handleAdd) {
                  handleAdd(experience);
                }
                closeModal();
              }}
            />
          )}
          {type === "formation" && (
            <FormationForm
              onSubmit={(formation) => {
                if (handleAdd) {
                  handleAdd(formation);
                }
                closeModal();
              }}
            />
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default EditableContent;
