import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people from '../assets/people.png';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

const AutoPlay = () => {
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768){
        setSlidesToShow(1);
      }
      else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 10,
    cssEase: "linear"
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <Slider {...settings} className="flex flex-row gap-10">
        <div className="rounded-2xl h-[350px] p-3 mx-2">
          <div className="rounded-2xl border-2 p-3 h-[300px]">
            <h1 className="text-lg">"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."</h1>
            <img src={people} alt="people" className="mt-10" />
          </div>
        </div>

        <div className="rounded-2xl h-[350px] p-3 mx-2">
          <div className="rounded-2xl border-2 p-3 h-[300px]">
            <h1 className="text-lg">"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."</h1>
            <img src={people1} alt="people" className="mt-10" />
          </div>
        </div>

        <div className="rounded-2xl h-[350px] p-3 mx-2">
          <div className="rounded-2xl border-2 p-3 h-[300px]">
            <h1 className="text-lg">"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."</h1>
            <img src={people2} alt="people" className="mt-10" />
          </div>
        </div>

        <div className="rounded-2xl h-[350px] p-3 mx-2">
          <div className="rounded-2xl border-2 p-3 h-[300px]">
            <h1 className="text-lg">"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."</h1>
            <img src={people3} alt="people" className="mt-10" />
          </div>
        </div>

        <div className="rounded-2xl h-[350px] p-3 mx-2">
          <div className="rounded-2xl border-2 p-3 h-[300px]">
            <h1 className="text-lg">"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."</h1>
            <img src={people} alt="people" className="mt-10" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlay;
