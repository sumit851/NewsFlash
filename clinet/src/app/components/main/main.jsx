import React from "react";
import Promotion from "./promotion/promotion";
import Render from "./render";

const Main = () => {
  const student = ["Ram", "Shyam", "Radhika", "Akshay", "Prashant", "Varun"];
  return (
    <div className="flex mt-16 flex-col custom-min-height">
      <Promotion />

      <Render />
    </div>
  );
};

export default Main;
