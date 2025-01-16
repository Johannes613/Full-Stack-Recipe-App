import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import "./Recipes.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/not-found.png";
import Navbar from "../Navbar/Navbar";
const Recipes = () => {
  const { recipeList, loading, count } = useContext(GlobalContext);

  return (
    <div className="recipes">
      {!count && (
        <p className="not-found-message">
          <p className="first-message">
            Search for any food (like apple, pizza, mango), and we'll provide a
            tasty recipe!
          </p>
          <img className="not-found" src={notFound} alt="" />
        </p>
      )}
      {loading ? (
        <p className="not-found-message">
          <p className="loading-message">Loading...Please Wait</p>
          <img className="not-found" src={notFound} alt="" />
        </p>
      ) : (
        count > 0 &&
        (recipeList && recipeList.length > 0 ? (
          recipeList.slice(0, 16).map((recipe) => (
            <div className="recipe" key={recipe.id}>
              <div className="img-cont">
              <img id="rec-img" src={recipe.image_url} alt="" />


              </div>
              <p>{recipe.publisher}</p>
              <h3>{recipe.title}</h3>
              <Link className="to-details" to={`/recipe-item/${recipe.id}`}>
                Recipe Details
              </Link>
            </div>
          ))
        ) : (
          <p className="not-found-message">
            We didn't find anything matching your search. Give it another try!
            <img className="not-found" src={notFound} alt="" />
          </p>
        ))
      )}
    </div>
  );
};

export default Recipes;
