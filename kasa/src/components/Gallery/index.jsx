import React from "react";
import "./style.scss";
import Thumb from "../Thumb";
import useFetch from "../../service/useFetch";

const Gallery = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div>
      <ul className="gallery">
        {data.map((accomodation) => (
          <Thumb key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
