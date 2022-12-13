import React from "react";
import CSS from "csstype";
import Description from "../../ui/Description";
import { formatDate } from "../../utils/date";
import { Experience as ExperienceType } from "../../lib/contexts/experience-context";
import styled from "styled-components";
import Modal from "react-modal";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import ExperienceForm from "../ExperienceForm";

export type ExperienceProps = {
  handleDelete: (id: number) => void;
  handleUpdate: (experience: ExperienceType) => void;
} & ExperienceType;

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

const Experience = ({
  handleUpdate,
  handleDelete,
  ...experience
}: ExperienceProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { name, company, description, domain, location, startDate, endDate } =
    experience;

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
          {domain && ` / ${domain}`}
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
          <ExperienceForm
            experience={experience}
            onSubmit={(experience) => {
              handleUpdate(experience);
              closeModal();
            }}
          />
        </div>
      </Modal>
    </Container>
  );
};

export default Experience;
