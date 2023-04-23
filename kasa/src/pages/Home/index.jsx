import React from "react";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer";

const Home = () => {
  return (
    <div>
      <Banner
        title={"Chez vous, partout et ailleurs"}
        className="banner-home"
      />
      <CardContainer />
    </div>
  );
};

export default Home;
