import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Components/GlobalContext";
import "./Details.css";
import Navbar from "../../Components/Navbar/Navbar";
const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleFavourites,
    favouritesList,
    findItem,
    removeItem,
    btn,
    accessBtn
  } = useContext(GlobalContext);


  useEffect(() => {
    async function getRecipeData(id) {
      try {
        const response =
          await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=e7bcaaec-364b-4b22-a5e2-11b1a2c682ba

`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const recipeData = await response.json();
        setRecipeDetailsData(recipeData);
      } catch (error) {
        console.error("Error fetching recipe g data:", error);
      }
    }
    getRecipeData(id);
  }, [id]);

  

  

  
  return (
    <div className="details">
      {!recipeDetailsData && (
        <p className="first-message">
          Please hit the view details button to see the details
        </p>
      )}
      {recipeDetailsData && (
        <img src={recipeDetailsData.data.recipe.image_url} alt="" />
      )}
      {recipeDetailsData && (
        <div className="description">
          {recipeDetailsData && (
            <h3>{recipeDetailsData.data.recipe.publisher}</h3>
          )}
          {recipeDetailsData && <h2>{recipeDetailsData.data.recipe.title}</h2>}

          <button
            onClick={async() => await findItem(recipeDetailsData.data.recipe.id) === "false"?handleFavourites(recipeDetailsData.data.recipe):removeItem(recipeDetailsData.data.recipe.id)}
          >{btn}</button>
          <h2>Ingredients:</h2>
          {recipeDetailsData && (
            <ul>
              {recipeDetailsData.data.recipe.ingredients.map((step, index) => (
                <li key={index} className="step">
                  {step.quantity} {step.unit}
                  {step.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
<div className="details"></div>;
