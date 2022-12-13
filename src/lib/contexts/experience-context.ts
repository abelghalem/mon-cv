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

type ExperienceContextType = {
  experiences: Experience[];
  setExperiences: any;
};

const experienceContext = createContext<ExperienceContextType>({
  experiences: [],
  setExperiences: null,
});

export default experienceContext;
