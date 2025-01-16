import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Favourites = () => {
  const { favouritesList, fetchList } = useContext(GlobalContext);
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="favourites">
      <Navbar />
      {!localStorage.getItem("token") ? (
        <p className="first-message">
          Please Login first to see your favourites
        </p>
      ) : (
        <>
          {favouritesList.length == 0 && (
            <p className="first-message">
              Currently your favorites list is empty. Explore delicious recipes
              and add your top picks to see them here!
            </p>
          )}
        </>
      )}

      {favouritesList &&
      favouritesList.length > 0 &&
      localStorage.getItem("token") ? (
        favouritesList.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <div className="img-cont">
              <img src={recipe.image_url} alt="" />
            </div>

            <p>{recipe.publisher}</p>
            <h3>{recipe.title}</h3>
            <Link className="to-details" to={`/recipe-item/${recipe.itemId}`}>
              Recipe Details
            </Link>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Favourites;
