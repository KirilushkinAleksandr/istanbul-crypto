import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import office1 from "../images/office/office01.jpg";
import office2 from "../images/office/office02.jpg";
import office3 from "../images/office/office03.jpg";
// import office4 from "../images/office/wrong-office04.jpg";
import office5 from "../images/office/office05.jpg";
import office6 from "../images/office/office06.jpg";
import office7 from "../images/office/office07.jpg";
import office8 from "../images/office/office08.jpg";
import office9 from "../images/office/office09.jpg";
import office10 from "../images/office/office10.jpg";
import office11 from "../images/office/office11.jpg";
import prev from "../images/prev.png";
import next from "../images/next.png";

const CarouselItem = ({ imgSRC }) => {
  return (
    <div className="carousel-item">
      <img src={imgSRC} alt="" />
    </div>
  )
};

const imgArray = [
  office1,
  office2,
  office3,
  office5,
  office6,
  office7,
  office8,
  office9,
  office10,
  office11,
];

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
