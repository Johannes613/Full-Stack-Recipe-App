import "./Categories.css";
import { cat_list } from "./CategoriesList";
const Categories = () => {
  return (
    <div className="categories">
      <hr />
      <div className="pop-head">
        <div className="rel">
          <div className="head-left">
            <h2>Browse Recipes by</h2>
            <h1>Categories</h1>
            <p></p>
          </div>
        </div>

        <button className="see-all">See All</button>
      </div>
      <div className="cat-container">
        {cat_list.map((cat) => {
          return (
            <div className="each-cat" key={cat.id}>
              <img id="cat-img" src={cat.img_src} alt="" />
              <h2 id="cat-title">{cat.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
