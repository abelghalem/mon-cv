import React from "react";
import { Experience } from "../contexts/experience-context";
import { Formation } from "../contexts/formation-context";
import GeneralContext from "../contexts/general-context";
import useArray from "../hooks/useArray";

const withContext = (WrappedComponent: React.ComponentType) => {
  const HocComponent = ({ ...props }) => {
    const [
      experiences,
      setExperiences,
      addExperience,
      updateExperience,
      deleteExperience,
    ] = useArray<Experience>();

    const [
      formations,
      setFormations,
      addFormation,
      updateFormation,
      deleteFormation,
    ] = useArray<Formation>();

    return (
      <GeneralContext.Provider
        value={{
          user: {
            name: "Abdelmounaim",
            surname: "Belghalem",
            city: "Nantes",
            avatarURL: "https://i.pravatar.cc/150",
            phone: "0123456789",
            jobTitle: "Développeur React / Typescript",
          },
          experiences: {
            elements: experiences,
            setElements: setExperiences,
            addElement: addExperience,
            updateElement: updateExperience,
            deleteElement: deleteExperience,
          },
          formations: {
            elements: formations,
            setElements: setFormations,
            addElement: addFormation,
            updateElement: updateFormation,
            deleteElement: deleteFormation,
          },
        }}
      >
        <WrappedComponent {...props} />
      </GeneralContext.Provider>
    );
  };

  return HocComponent;
};

export default withContext;
