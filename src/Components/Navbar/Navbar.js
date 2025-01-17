import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import './Navbar.css'
import { GlobalContext } from "../GlobalContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import logo from '../../assets/tasty-logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";







const Navbar = ({showLogin, setShowLogin}) => {

    const {searchValue,setSearchValue,handleSubmit,accState,setAccState,token,setToken} = useContext(GlobalContext)
    const [showNav,setShovNav] = useState(false);
    const navUl = useRef(null)
    
    

    const handleLogOut = ()=>{
        setToken('')
        console.log(token)
        localStorage.removeItem('token')
      } 

    const handleNav = ()=>{
        if(showNav){
            setShovNav(false)
            navUl.current.classList.remove('show-me')
        }
        else{
            setShovNav(true)
            navUl.current.classList.add('show-me')
        }
    }
    return (  
        <div className="nav-cont">
            <nav className="navbar">
            
                <div className="nav-head">
                    <div id="social-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaPinterestP /> 
                    </div>
                    <Link to = '/' className="logo"><img className="logo-tasty" src={logo} alt="" /></Link>

                    <div className="login-btn">
                        <Link onClick = {()=>setAccState('Sign-up')} className={token?"blur-me":"sign-up"} to = '/Login'>Sign Up</Link>   
                        <Link onClick = {()=>setAccState('Sign-in')} className={token?"blur-me":"login"} to = '/Login'>Login</Link>
                        <p onClick={handleLogOut} className={!token?"blur-me":"login"}>Logout</p>
                    </div>
                    
                </div>

                {showNav? <MdCancel onClick={handleNav} className = "ham-menu" /> : <GiHamburgerMenu onClick={handleNav} className = "ham-menu"/>}
                <ul ref = {navUl}>
                    <li>
                        <Link className="links" to = '/' >Home</Link>
                    </li>
                    <li>
                        <Link  className="links" to = '/recipes' >Recipes</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/recipe-item/:id' >Details</Link>
                    
                    </li>
                    <li>
                        <Link  className="links" to = '/favourites' >Favourites</Link>
                    </li>


                </ul>

            </nav>
            

        </div>
        
    );
}
 
export default Navbar;