import React from "react";
import "./style.scss";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import useFetch from "../../service/useFetch";
import Loader from "../../components/Loader";

const About = () => {
  const { data, isLoading, error } = useFetch(`/assets/about.json`);
  return isLoading && !error ? (
    <Loader />
  ) : (
    <div>
      <Banner className="banner-about" />

      <div className="collapse-container-about">
        {data.map((collapse, index) => (
          <Collapse
            className="collapse-about"
            title={collapse.title}
            content={collapse.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
