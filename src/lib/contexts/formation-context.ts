import { createContext } from "react";

export type Formation = {
  id: string;
  school: string;
  diploma?: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

type FormationContextType = {
  formations: Formation[];
  setFormations: any;
};

const formationContext = createContext<FormationContextType>({
  formations: [],
  setFormations: null,
});

export default formationContext;
