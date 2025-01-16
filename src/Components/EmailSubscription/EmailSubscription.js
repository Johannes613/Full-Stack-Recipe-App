import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "./EmailSubscription.css";
import bgImage from "../../assets/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");


  const handleEmailSub = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/subscription/add',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          token:localStorage.getItem('token')
        },
        body:JSON.stringify({email:email})
      });
      const data = await response.json();
      setEmail("")
    } catch (error) {
      console.log(error,'While sending email')      
    }
  }

  return (
    <div className="col-disp relati">
      <img className="bg-email bg" src={bgImage} alt="" />
      <div id="disp-col" className="testimonials">
        <div className="rel">
          <div className="head-left center">
            <h2>Subscribe</h2>
            <h1>Newsletter</h1>
            <p></p>
          </div>
        </div>

        <p className="sub-heading">
          Subscribe your Email & never miss a recipe update again.
        </p>
        <form className="email-sub-form" onSubmit={handleEmailSub}>
          <div className="cont-form">
            <input
              className="email-sub-input"
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscription;
