import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetail = () => {
  const { mealId } = useParams();
  const [mil, setMeal] = useState({});
  // console.log(mil)
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <div>
      <h2>this is meal id detail:{mealId}</h2>
      <h3>name:{mil.strMeal}</h3>
      <p>id:{mil.idMeal}</p>
      <small>{mil.strMealThumb}</small>
      <img src={mil.strMealThumb} alt="" width="100px" />
    </div>
  );
};

export default MealDetail;
