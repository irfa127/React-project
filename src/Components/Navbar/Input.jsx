import React from "react";
import Input from "../UI/Input";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import Date from "../UI/Date";

const Form = () => {
  return (
    <div>
      <div className="bg-white w-270 h-70 ml-65 rounded-[20px]">
        <div className="flex justify-around">
          <Input type="From" />
          <IoSwapHorizontalSharp className="mt-12 size-10" />
          <Input type="To" />
        </div>
        <Date />
        <div className="flex gap-20 my-20 mx-20">
          <h1 className="text-3xl text-white font-bold">500+ airlines</h1>
          <h1 className="text-3xl text-white font-bold">10M+ Happy family</h1>
          <h1 className="text-3xl text-white font-bold">200+ Destinations</h1>
        </div>
      </div>
    </div>
  );
};

export default Form;
