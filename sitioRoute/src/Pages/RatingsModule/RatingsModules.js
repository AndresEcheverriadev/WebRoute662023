import React from "react";
import Marquee from "react-fast-marquee";
import ratings from "./ratings.js";
import { truncateText } from "../../Data/utils/truncateText.js";
import logoTripadvisor from "./logoTripadvisor.svg";
import logoGoogle from "./logoGoogle.svg";
import "./RatingsModules.css";

function RatingsModules() {
  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill ratingsPod__Header__Star"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  const halfStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-star-half"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
  );

  const mainStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-star-fill ratingsGeneral__starIcon"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  const mainHalfStarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      class="bi bi-star-half ratingsGeneral__halfStarIcon"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
  );
  return (
    <div className="ratings">
      <h2 className="ratings__Title">Nuestros clientes opinan</h2>
      <div className="ratingsGeneral">
        <div className="ratingsGeneral__stars">
          <h2 className="ratingsGeneral__starsTitle">4.5</h2>
          {Array.from({ length: 4 }, (_, i) => mainStarIcon)}
          {mainHalfStarIcon}
          <h2 className="ratingsGeneral__starsTitle">promedio</h2>
        </div>
        <div className="ratingsGeneral__logos">
          <div className="logos__logoContainer">
            <img className="logos__tripadvisor" src={logoTripadvisor} alt="" />
          </div>
          <div className="logos__logoContainer">
            <img className="logos__google" src={logoGoogle} alt="" />
          </div>
        </div>
      </div>
      <Marquee
        className="ratings__PodMarquee"
        speed="50"
        direction="right"
        gradient={false}
        pauseOnHover={true}
      >
        {ratings.map((rating) => {
          return (
            <a
              className="ratingsPod"
              key={rating.id}
              href={rating.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="ratingsPod__Header">
                <img
                  className="ratingsPod__Header__Img"
                  src={rating.img}
                  alt=""
                />
                <div className="ratingsPod__Header__Stars">
                  {Array.from(
                    { length: rating.valoracion },
                    (_, i) => starIcon
                  )}
                </div>
              </div>
              <p className="ratingsPod__Nombre">{rating.nombre}</p>
              <p className="ratingsPod__Comentario">
                {truncateText(rating.comentario, 300)}
              </p>
            </a>
          );
        })}
      </Marquee>
    </div>
  );
}

export default RatingsModules;
