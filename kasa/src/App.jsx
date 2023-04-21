import React from "react";
import "./style.scss";
import Routes from "./components/Routes";
import Header from "./components/header";
import Footer from "./components/footer";
import "@fontsource/montserrat";

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
