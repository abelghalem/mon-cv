import { Dispatch, useState } from "react";

const useObject = <T extends { id: string }>(): [T[], Dispatch<React.SetStateAction<T[]>>, (object: T) => void, (object: T) => void, (id: string) => void] => {
  const [objects, setObjects] = useState<T[]>([]);

  const addObject = (object: T) => {
    setObjects([...objects, object]);
  };

  const updateObject = (object: T) => {
    const index = objects.findIndex((f) => f.id === object.id);
    objects[index] = { ...objects[index], ...object };
    setObjects([...objects]);
  };

  const deleteObject = (id: string) => {
    const index = objects.findIndex((f) => f.id === id);
    if (index > -1) {
      objects.splice(index, 1);
    }
    setObjects([...objects]);
  };

  return [objects, setObjects, addObject, updateObject, deleteObject]
};

export default useObject;
