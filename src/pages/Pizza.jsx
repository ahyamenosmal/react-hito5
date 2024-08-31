import React, { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  if (pizza === null) return;

  return (
    <div className="container">
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        showMoreButton={false}
      />
    </div>
  );
};

export default Pizza;
