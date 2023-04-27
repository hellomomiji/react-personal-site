import { useState } from "react";
import "../static/css/Carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={prevSlide} aria-label="previous slide"><i className="gg-arrow-left"></i></button>
        {
          slides.map((slide, id) => {
            return (
                <div key={id} className="slide">
                {id === current && (
                    <div className="slide-block">
                      <h3>{slide.title}</h3>
                      <a href={slide.link}>
                        <img src={slide.img} alt={slide.imgalt} className="slide-img"/>
                      </a>
                    </div>
                )}
                </div>
            )
          })
        }
      <button className="right-arrow" onClick={nextSlide} aria-label="next slide"><i className="gg-arrow-right"></i></button>
    </div>
  )
}

export default Carousel