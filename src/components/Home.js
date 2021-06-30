import { Title, Description } from "../styles";
import { useState } from "react";

const Home = () => {
  const [slider, setSlider] = useState();

  return (
    <div>
      <Title>Foody</Title>
      <Description>
        I just want someone to look at me the way I look at food.
      </Description>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        onChange={(event) => setSlider(event.target.value)}
        value={slider}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://itopfives.com/wp-content/uploads/2020/07/Top-5-Foods-for-the-Heart.jpg"
              class="d-block w-100"
              alt="food"
            />
            <div class="carousel-caption d-none d-md-block">
              <p>Food are the answer. No matter the question</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.albawaba.com/sites/default/files/2020-08/%D8%A3%D8%B7%D8%B9%D9%85%D8%A9.jpg"
              class="d-block w-100"
              alt="food"
            />
            <div class="carousel-caption d-none d-md-block">
              <p> Home is wherever I’m with food</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1587026,resizemode-1,msid-67344360/markets/commodities/news/india-looks-to-maintain-lead-in-spices-this-year.jpg"
              class="d-block w-100"
              alt="food"
            />
            <div class="carousel-caption d-none d-md-block">
              <p>Let food be thy medicine and medicine be thy food</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Home;
