import './imageArea.css'

export function ImageArea({ img, alt, description }) {
  return (
    <>
      <h1>Image Area</h1>
      <img src={img} alt={alt} />
      <p>{description}</p>
    </>
  );
}

