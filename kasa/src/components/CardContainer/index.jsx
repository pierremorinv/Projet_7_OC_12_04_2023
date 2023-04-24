import React from "react";
import "./style.scss";
import Card from "../Card";
import useFetch from "../../service/useFetch";
import Loader from "../Loader";

const CardContainer = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  return isLoading && !error ? (
    <Loader />
  ) : (
    <div>
      <ul className="card-container">
        {data.map((accomodation) => (
          <Card key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
