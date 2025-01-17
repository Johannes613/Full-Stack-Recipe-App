import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import "./SearchRecipe.css";

const SearchRecipe = () => {
  const { searchValue, setSearchValue, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="search-recipe">
      <div className="pop-head for-search">
        <div className="rel">
          <div className="head-left">
            <h2>Browse Recipes By</h2>
            <h1>Searching</h1>
            <p></p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={searchValue}
            id="search-r"
            placeholder="Enter Items . . ."
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSubmit(e);
            }}
          />
        </form>
        <button id="searc-sea" className="see-all">See All</button>
      </div>
    </div>
  );
};

export default SearchRecipe;
