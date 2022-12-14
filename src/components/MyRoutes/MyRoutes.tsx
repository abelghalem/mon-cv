import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Experiences from "../../pages/Experiences";
import Formations from "../../pages/Formations/Formations";
import Contact from "../../pages/Contact";
import withContext from "../../lib/hocs/withContext";

type Props = {};

const MyRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default withContext(MyRoutes);
