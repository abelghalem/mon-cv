import React from "react";
// import CSS from "csstype";

// import lorems from "./data/lorem";

// import Card from "./ui/Card";
// import Content from "./ui/Content";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Experience from "./components/Experience";
// import Formation from "./components/Formation";
// import EditableContent from "./ui/EditableContent";
// import ExperienceContext, {
//   Experience as ExperienceType,
// } from "./lib/contexts/experience-context";
// import FormationContext, {
//   Formation as FormationType,
// } from "./lib/contexts/formation-context";
// import useArray from "./lib/hooks/useArray";

// const styles: {
//   [name: string]: CSS.Properties;
// } = {
//   container: {
//     backgroundColor: "#282c34",
//     display: "grid",
//     gridTemplateRows: "auto 1fr auto",
//     minHeight: "100vh",
//     color: "white",
//   },
//   fullWidthCard: {
//     gridColumn: "span 2",
//   },
//   resetRadius: {
//     borderRadius: "0",
//   },
// };

// function App() {
//   const [
//     experiences,
//     setExperiences,
//     addExperience,
//     updateExperience,
//     deleteExperience,
//   ] = useArray<ExperienceType>();
//   const [
//     formations,
//     setFormations,
//     addFormation,
//     updateFormation,
//     deleteFormation,
//   ] = useArray<FormationType>();
//   const languages = ["Français", "Anglais", "Espagnol", "Arabe"];

//   return (
//     <div style={styles.container}>
//       <Header />
//       <Content>
//         <Card style={styles.fullWidthCard}>
//           {lorems.map((lorem) => (
//             <p>{lorem}</p>
//           ))}
//         </Card>
//         <Card>
//           <ExperienceContext.Provider
//             value={{
//               experiences,
//               setExperiences,
//             }}
//           >
//             <EditableContent
//               title={"Expériences"}
//               type={"experience"}
//               handleAdd={addExperience}
//             >
//               {experiences
//                 ?.sort((b, a) => a.startDate.getTime() - b.startDate.getTime())
//                 .map((experience, index) => (
//                   <Experience
//                     key={`experience-${experience.id}-${index}`}
//                     handleDelete={deleteExperience}
//                     handleUpdate={updateExperience}
//                     {...experience}
//                   />
//                 ))}
//             </EditableContent>
//           </ExperienceContext.Provider>
//         </Card>
//         <Card>
//           <FormationContext.Provider
//             value={{
//               formations,
//               setFormations,
//             }}
//           >
//             <EditableContent
//               title={"Formations"}
//               type={"formation"}
//               handleAdd={addFormation}
//             >
//               {formations
//                 ?.sort((b, a) => a.startDate.getTime() - b.startDate.getTime())
//                 ?.map((formation, index) => (
//                   <Formation
//                     key={`formation-${formation.id}-${index}`}
//                     handleDelete={deleteFormation}
//                     handleUpdate={updateFormation}
//                     {...formation}
//                   />
//                 ))}
//             </EditableContent>
//           </FormationContext.Provider>
//         </Card>
//       </Content>
//       <Card style={styles.resetRadius}>
//         <Footer languages={languages} />
//       </Card>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return <></>;
};
export default App;
