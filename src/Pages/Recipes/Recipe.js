import SearchRecipe from "../../Components/SearchRecipe/SearchRecipe";
import Recipes from "../../Components/Recipes/Recipes";
const Recipe = () => {
    return ( 
        <div className="rec-container">
            <SearchRecipe />
            <Recipes/>

        </div>
     );
}
 
export default Recipe;