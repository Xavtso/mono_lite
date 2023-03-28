import React from "react";

const Slide = ({ slide, currentSlide }) => {
  return (
    <div
      className={
        currentSlide === slide.id - 1 ? "slider__slide active" : "slider__slide"
      }
    >
      <img src={slide.photo} alt={slide.name} className="slider__img" />
      <h4 className="slider__name">{slide.name}</h4>
      <p className="slider__location">{slide.location}</p>
      <h3 className="slider__header">{slide.header}</h3>
      <p className="slider__text">{slide.text}</p>
    </div>
  );
};

export default Slide;
