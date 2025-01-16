import "./Blogs.css";
import { popularAssets } from "../PopularRecipes/popular-assets";
import { articles } from "./BlogsList";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="pop-recipe articles-list">
      <div className="pop-head">
        <div className="rel">
          <div className="head-left">
            <h2>Blog Post</h2>
            <h1>Our Latest Articles</h1>
            <p></p>
          </div>
        </div>
      </div>
      <div className="pop-cont">
        {articles.map((article) => {
          return (
            <div id="article-cont" className="each-pop" key={article.id}>
              <img src={article.img_src} alt="" />
              <div>
                <h2>{article.title}</h2>
                <p>{article.time}</p>
                <button className="cont-reading">
                  {article.btn_cont} <FaArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button id="see-all">
        View All <FaArrowRight />
      </button>
    </div>
  );
};

export default Blogs;
