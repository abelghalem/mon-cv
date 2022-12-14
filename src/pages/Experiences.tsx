import React, { useContext } from "react";
import Experience from "../components/Experience";
import Card from "../ui/Card";
import EditableContent from "../ui/EditableContent";
import generalContext from "../lib/contexts/general-context";

type ExperiencesProps = {};

const Experiences = (props: ExperiencesProps) => {
  const ctx = useContext(generalContext);
  if (!ctx.experiences) {
    return <>No context</>
  }

  return (
    <Card>
        <EditableContent
          title={"Expériences"}
          type={"experience"}
          handleAdd={ctx.experiences.addElement}
        >
          {ctx.experiences.elements
            ?.sort((b, a) => a.startDate.getTime() - b.startDate.getTime())
            .map((experience, index) => (
              <Experience
                key={`experience-${experience.id}-${index}`}
                handleDelete={ctx.experiences!.deleteElement}
                handleUpdate={ctx.experiences!.updateElement}
                {...experience}
              />
            ))}
        </EditableContent>
    </Card>
  );
};

export default Experiences;
