import { useContext } from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import "./Home.css";
import Recipes from "../../Components/Recipes/Recipes";
import herobg from "../../assets/pexels-lum3n-44775-568370.jpg";
import PopularRecipes from "../../Components/PopularRecipes/PopularRecipes";
import SearchRecipe from "../../Components/SearchRecipe/SearchRecipe";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Blogs from "../../Components/Blogs/Blogs";
import EmailSubscription from "../../Components/EmailSubscription/EmailSubscription";
import Navbar from "../../Components/Navbar/Navbar";
import { LuClock4 } from "react-icons/lu";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <img className="hero-img" src={herobg} alt="" />
      <div className="intro-head">
        <h2>
          Discover delicious <br /> <span>Recipes</span>{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          blanditiis deserunt, odit harum dignissimos fuga obcaecati iure
          accusantium itaque amet.
        </p>
        <button id="see-all">View Recipes</button>
      </div>
      <Navbar />
      <PopularRecipes />
      <SearchRecipe />
      <Recipes />
      <Categories />
      <Testimonials />
      <Blogs />
      <EmailSubscription />
    </div>
  );
};

export default Home;
