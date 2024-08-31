import React from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
