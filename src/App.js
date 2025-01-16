import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Details from "./Pages/Details/Details";
import Favourites from "./Pages/Favourites/Favourites";
import Home from "./Pages/Home/Home";
import Recipe from "./Pages/Recipes/Recipe";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";


function App() {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar showLogin = {showLogin} setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipe />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/recipe-item/:id" element={<Details />}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
