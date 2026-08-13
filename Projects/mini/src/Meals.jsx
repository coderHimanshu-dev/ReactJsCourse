import React, { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card  rounded border">
      <img src={strMealThumb} alt={strMeal} />
      <section className="content flex justify-between text-[12px] p-2">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  ));

  return (
    <>
      <div className="grid grid-cols-3 gap-2 m-2">{itemsList}</div>
    </>
  );
};

export default Meals;
