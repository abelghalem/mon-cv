import { createContext } from "react";

export type User = {
  name: string;
  surname: string;
  avatarURL: string;
  city: string;
  phone: string;
  jobTitle: string;
};

const userContext = createContext<User>({
  name: "Abdelmounaim",
  surname: "Belghalem",
  city: "Nantes",
  avatarURL: "https://i.pravatar.cc/150",
  phone: "0123456789",
  jobTitle: "Développeur React / Typescript",
});

export default userContext;
