import React from "react";
import "./carousel.css";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// we use the porps data
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [flipped, setFlipped] = useState(Array(data.length).fill(false));
  //the initial states is an array of false values with same length and false means all imgs are not flipped
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
    //reset flip and make sure new image is not flipped setting to false
    setFlipped(Array(data.length).fill(false));
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
    setFlipped(Array(data.length).fill(false));
  };
  //callback function that gets called when img is clicked
  const handleImageClick = (index) => {
    //prevFlipped is a parameter of a function, representing the previous state of the flipped variable
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped]; // Make a copy of the previous state
      newFlipped[index] = !newFlipped[index]; // Toggle the value at the clicked index
      return newFlipped; // Return the updated state
    });
  };
  useEffect(() => {
    // Reset flip state when moving to a new image
    setFlipped(Array(data.length).fill(false));
  }, [slide, data]);

  //we map trough the data and at each index I take the item at that index
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`image-container ${flipped[idx] ? "flipped" : ""}`}
            onClick={() => handleImageClick(idx)}
          >
            <img
              src={item.src}
              alt={item.alt}
              //   key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
              // className={`image ${flipped[idx] ? "slide slide-hidden" : slide === idx ? "front slide" : "back slide"}`}
            />
            {flipped[idx] && <p className="description">{item.description}</p>}
          </div>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {/* within the span w emap the data and for each element, not using the item only the index, returning for each index a button with a key index */}
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              //   function calls setSlide to the ind of the button which has been clicked
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
        
      </span>
    </div>
  );
};

export default Carousel;
