import React from "react";
import First from "./first";
import Second from "./second";

const Promotion = () => {
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="h-[60px] mx-8 mb-8 w-[1000px] flex items-center justify-between  bg-red-500">
          <div className="mr-2 p-5">
            <h1 className="text-center font-light sm:text-sm md:text-base lg:text-sm  text-white">
              For the best experience use{" "}
              <a
                className="text-white appearance-none font-semibold"
                href="https://inshorts.com/news"
              >
                inshorts {"  "}
              </a>
              app on your smartphone
            </h1>
          </div>
          <div className="flex p-5">
            <First />
            <Second />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
