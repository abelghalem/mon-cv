import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../Card";
import Content from "../Content";
import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div({
  backgroundColor: "#282c34",
  display: "grid",
  gridTemplateRows: "auto auto 1fr auto",
  minHeight: "100vh",
  color: "white",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>{children}</Content>
      <Card>
        <Footer languages={["a"]} />
      </Card>
    </Container>
  );
};

export default Layout;
