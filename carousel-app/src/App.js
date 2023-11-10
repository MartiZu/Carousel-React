import Carousel from "./components/Carousel/carousel";
import "./App.css";
import { Header } from "./components/Header/header";

import slides from "./Data/carouselData.json";

function App() {
  console.log(slides);
  return (
    <div className="App">
      <Header />
      {/* prop data and passing variable */}
      <Carousel data={slides.slides} />
    </div>
  );
}

export default App;
