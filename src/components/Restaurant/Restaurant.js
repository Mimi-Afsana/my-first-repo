import React, { useEffect, useState } from "react";
import Description from "../Description/Description";
import Meal from "../Meal/Meal";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  const searchFood = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h2 className="mt-5 mb-4 text-primary">
        Search food which one you like:{meals.length}
      </h2>

      <input
        onChange={searchFood}
        type="text"
        className="me-2 border border-warning rounded  p-2"
        placeholder="Search food"
        aria-label="Search"
      />
      <h3 className="mt-5">By using search button you can search any food</h3>
      <div className="grid">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
