import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { testmonialList } from "./TestimonialsList";
import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import bgImage from "../../assets/users.jpg";
const Testimonials = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [tx, setTx] = useState(400);
  const slide = useRef();

  const handleMoveRight = () => {
    if (tx > -400) {
      setTx((prev) => prev - 200);
    }

    slide.current.style.transform = `translateX(${tx}%)`;
  };
  const handleMoveLeft = () => {
    if (tx < 400) {
      setTx((prev) => prev + 200);
    }
    slide.current.style.transform = `translateX(${tx}%)`;
  };
  //   useEffect(()=>{
  //     slide.current.style.transform = `translateX(${tx}%)`

  // },[tx])

  return (
    <div className="relati Testi">
      <img className="bg" src={bgImage} alt="" />

      <div className="testimonials">
        <div className="rel">
          <div className="head-left center">
            <h2>Testimonials</h2>
            <h1>Happy Users</h1>
            <p></p>
          </div>
        </div>

        <div className="contain">
          <FaAngleLeft id="right-mo" className="mover right-mo" onClick={handleMoveLeft} />
          {testmonialList.map((eachTestimonial, index) => {
            return (
              <div
                ref={slide}
                style={{
                  display: "flex",
                  transform: `translateX(${tx}%)`,
                  transition: "transform 0.3s",
                }}
                className="show-image"
              >
                <h1>{eachTestimonial.header}</h1>
                <p>{eachTestimonial.content}</p>
                <h2>{eachTestimonial.person}</h2>
              </div>
            );
          })}
          <FaAngleRight id="left-mo" className="mover left-mo" onClick={handleMoveRight} />
        </div>

        <div className="indicators">
          {testmonialList && testmonialList.length > 0 && (
            <div>
              {testmonialList.map((image, index) => (
                <button
                  key={index}
                  className={index === currentImage ? "glow-me" : "blur-me"}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
