import React from "react";
import "./style.scss";
import Card from "../Card";
import useFetch from "../../service/useFetch";

const CardContainer = () => {
  const { data, isLoading } = useFetch(`/assets/logements.json`);
  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div>
      <ul className="gallery">
        {data.map((accomodation) => (
          <Card key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
