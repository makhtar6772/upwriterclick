import React, { useEffect, useState } from "react";
import gif1 from "./images/1.gif";
import gif2 from "./images/2.gif";
import gif3 from "./images/3.gif";
import gif4 from "./images/4.gif";
import DownloadOptions from "./DownloadOption";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === 2) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-[90%] bg-gray-200 h-64 relative overflow-hidden rounded-[10px] mr-2">
        <div className="flex h-full absolute top-0 left-0">
          {currentSlide === 0 && (
            <img src={gif1} alt="Slide 1" className="rounded-[10px]" />
          )}
          {currentSlide === 1 && (
            <img src={gif2} alt="Slide 2" className="rounded-[10px]" />
          )}
          {currentSlide === 2 && (
            <img src={gif3} alt="Slide 3" className="rounded-[10px]" />
          )}
        </div>
      </div>
    </div>
  );
}
