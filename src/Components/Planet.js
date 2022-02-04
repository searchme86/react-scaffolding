import React from "react";
import { useQuery } from "react-query";

const fetchPlanents = async () => {
  const res = await fetch("http://swapi.dev.api/planets/");
  return res.json();
};

const Planet = () => {
  const { data, status } = useQuery("planets", fetchPlanents);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
};

export default Planet;
