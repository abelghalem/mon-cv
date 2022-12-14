import React, { useContext } from "react";
import Formation from "../../components/Formation";
import Card from "../../ui/Card";
import EditableContent from "../../ui/EditableContent";
import generalContext from "../../lib/contexts/general-context";

type FormationsProps = {};

const Formations = (props: FormationsProps) => {
  const ctx = useContext(generalContext);
  if (!ctx.formations) {
    return <>No context</>;
  }

  return (
    <Card>
      <EditableContent
        title={"Formations"}
        type={"formation"}
        handleAdd={ctx.formations.addElement}
      >
        {ctx.formations.elements
          ?.sort((b, a) => a.startDate.getTime() - b.startDate.getTime())
          ?.map((formation, index) => (
            <Formation
              key={`formation-${formation.id}-${index}`}
              handleDelete={ctx.formations!.deleteElement}
              handleUpdate={ctx.formations!.updateElement}
              {...formation}
            />
          ))}
      </EditableContent>
    </Card>
  );
};

export default Formations;
