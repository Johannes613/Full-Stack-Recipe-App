import './Footer.css';
import footerLogo from '../../assets/footer-logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Footer = () => {
    return ( 
        <div className="footer">
            <Link to = '/' className="logo"><img src={footerLogo} alt="" /></Link>   

            
            <div className="footer-links">
                    <li>
                        <Link className="links" to = '/' >Home</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/recipes' >Recipes</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/recipe-item/:id' >Details</Link>
                    
                    </li>
                    <li>
                        <Link className="links" to = '/favourites' >Favourites</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/favourites' >Blogs</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/favourites' >Testimonials</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/favourites' >Gallary</Link>
                    </li>
                    <li>
                        <Link className="links" to = '/favourites' >Contact Us</Link>
                    </li>
            </div>

            <div className="footer-lin">
                        <FaFacebook className='each-link' />
                        <FaInstagram className='each-link' />
                        <FaTwitter className='each-link' />
                        <FaLinkedin className='each-link' />
                        <FaPinterestP  className='each-link'/>
            </div>
            <p>Copyright &copy; 2024. Tasty Recipe by Yohannis Adamu</p>


        </div>
     );
}
 
export default Footer;