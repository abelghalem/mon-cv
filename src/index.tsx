import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./components/MyRoutes/MyRoutes";
import Layout from "./ui/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <MyRoutes />
    </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
