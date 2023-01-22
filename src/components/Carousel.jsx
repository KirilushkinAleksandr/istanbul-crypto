import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import about3 from "../images/aero-1.jpg";
import prev from "../images/prev.png";
import next from "../images/next.png";

const CarouselItem = ({ imgSRC }) => {
  return (
    <div className="carousel-item">
      <img src={imgSRC} alt="" />
    </div>
  )
};

const imgArray = [about1, about2, about3];

function Carousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.now();
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 3000);
    updateIndex(activeIndex+1);

    return () => clearInterval(interval);
  }, [seconds]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = imgArray.length - 1;
    } else if (newIndex >= imgArray.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel">
      <div className="inner">
        <CarouselItem imgSRC={imgArray[activeIndex]} />
      </div>
      <div className="carousel__text">
        <div className="indicators">
          <div onClick={() => updateIndex(activeIndex - 1)}>
            <img src={prev} alt="" />
          </div>
          <div onClick={() => updateIndex(activeIndex + 1)}>
            <img src={next} alt="" />
          </div>
        </div>
        <div className="content__block flex flex-align-center content-transform">
          <div
            className="content__text text__center"
            dangerouslySetInnerHTML={{ __html: t("about-us.text-2") }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
