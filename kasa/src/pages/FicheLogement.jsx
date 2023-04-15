import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../service/useFetch";

const FicheLogement = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);

  const { id } = useParams();
  // if (data.filter((accomodation) => accomodation.id === id)) {
  // }
  console.log(data);
  console.log(id);

  return <div>{id}</div>;
};

export default FicheLogement;
