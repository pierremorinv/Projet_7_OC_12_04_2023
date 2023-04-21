import React from "react";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer";
import bannerImage from "../../assets/bannerImage.png";

const Home = () => {
  return (
    <div>
      <Banner title={"Chez vous, partout et ailleurs"} image={bannerImage} />
      <CardContainer />
    </div>
  );
};

export default Home;
