import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, strMealThumb, strArea, idMeal } = props.meal;
  const navigate = useNavigate();
  const handleClick = () => {
    const path = `/meal/${idMeal}`;
    navigate(path);
  };

  return (
    <div className="mt-5 col-12 container">
      <div className="card ">
        <img className="img-fluid" src={strMealThumb} alt="this is picture" />
        <div className="card-body">
          <h5 className="card-title">Name: {strMeal}</h5>
          <p>Area: {strArea}</p>
          <div>
            <Link className="me-2" to="description">
              link click
            </Link>
            <button onClick={handleClick} className="btn btn-primary">
              click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
