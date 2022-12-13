import lorems from "./lorem";
import { subYear } from "../utils/date";

const experiences = [{
    name: 'Journaliste',
    company: 'Facebook',
    description: 'Texte court',
    location: 'Tourcoing',
    startDate: subYear(new Date(), 1),
},{
    name: 'Plombier',
    company: 'Facebook',
    description: lorems[0],
    startDate: subYear(new Date(), 2),
    endDate: subYear(new Date(), 1),
},{
    name: 'Architecte',
    company: 'Facebook',
    description: lorems[0],
    startDate: subYear(new Date(), 3),
    endDate: subYear(new Date(), 2),
}];

export default experiences;
