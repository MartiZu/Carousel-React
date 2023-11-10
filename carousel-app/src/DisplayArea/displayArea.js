import "./displayArea.css";
import { ImageArea } from "../ImageArea/imageArea";

export function DisplayArea({ display, nextSlide }) {
  console.log(display);
  // if (!Array.isArray(display)) {
  //   // Handle the case where display is not an array
  //   return <div>Invalid display data</div>;
  // }
  return (
    <div className="display-container">
      {display.map((avatar) => (
        <ImageArea
          key={avatar.id}
          img={avatar.src}
          alt={avatar.alt}
          description={avatar.description}
        />
      ))}
      
      <button id="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
}


