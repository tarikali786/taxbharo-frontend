import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import { BusinessData } from "../../data/data";

export const Business = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-14">
      {BusinessData?.map((item, index) => (
        <div key={index} className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-500 flex justify-center md:justify-normal">
            {item?.value && (
              <AnimatedNumbers
                includeComma
                animateToNumber={item?.value}
                configs={(value) => ({
                  mass: 1, // The mass can stay default
                  tension: 80, // Lower tension slows down the animation
                  friction: 60, // Adjust friction to balance speed
                })}
                animationDuration={10000} // Specify the duration in milliseconds (3 seconds)
              />
            )}
            %
          </h1>
          <h3 className="text-xl font-semibold text-black-500 my-2">
            {item?.title}
          </h3>
          <p className="text-black-300">{item?.description}</p>
        </div>
      ))}
    </div>
  );
};
