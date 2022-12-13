import lorems from "./lorem";
import { subYear } from "../utils/date";

const formations = [
  {
    school: "Polytech",
    diploma: "Diplôme d'ingénieur",
    description: "Texte court",
    startDate: subYear(new Date(), 10),
    endDate: subYear(new Date(), 6),
  },
  {
    school: "Lycée Jean Jean",
    diploma: "Bac S (option spé math)",
    description: lorems[0],
    startDate: subYear(new Date(), 14),
    endDate: subYear(new Date(), 10),
  },
  {
    school: "Collège Victor Hugo",
    description: lorems[2],
    startDate: subYear(new Date(), 17),
    endDate: subYear(new Date(), 14),
  },
];

export default formations;
