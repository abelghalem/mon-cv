import React, { createContext, SetStateAction } from "react";
import { Experience } from "./experience-context";
import { Formation } from "./formation-context";
import { User } from "./user-context";

export type ContextElement<T> = {
  elements: T[];
  setElements: React.Dispatch<SetStateAction<T[]>>;
  addElement: (t: T) => void;
  updateElement: (t: T) => void;
  deleteElement: (id: string) => void;
};

export type Context = {
  user: User;
  experiences?: ContextElement<Experience>;
  formations?: ContextElement<Formation>;
};

const generalContext = createContext<Context>({
  user: {
    name: "Abdelmounaim",
    surname: "Belghalem",
    city: "Nantes",
    avatarURL: "https://i.pravatar.cc/150",
    phone: "0123456789",
    jobTitle: "Développeur React / Typescript",
  },
});

export default generalContext;
