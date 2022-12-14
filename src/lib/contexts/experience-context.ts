import { createContext } from "react";

export type Experience = {
  id: string;
  name: string;
  company: string;
  description: string;
  domain: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
};

export type ExperienceContextType = {
  experiences: Experience[];
  setExperiences: any;
  addExperience: any
};