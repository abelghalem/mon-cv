import { createContext } from "react";

export type Formation = {
  id: string;
  school: string;
  diploma?: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type FormationContextType = {
  formations: Formation[];
  setFormations: any;
};