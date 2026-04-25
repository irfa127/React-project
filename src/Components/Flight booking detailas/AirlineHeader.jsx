import React from "react";
import {airLine} from "../../data/data";

const AirlineHeader = ({id}) => {

  
   const data = airLine.find(i => i.id == id) || airLine[0];
    // console.log(data)
  return (
    <div>
      <div className={`${data.color} w-[100%] h-90`}>
        <div className="w-30 h-30 bg-white relative left-40 top-10 rounded-2xl">
          <div className={`w-20 h-20 ${data.color} relative left-5 top-4 rounded-2xl`}>
            <h1 className="text-3xl font-bold mx-5 relative top-5 text-white">
              {data.number}
            </h1>
          </div>
        </div>
        <div className="mx-80 relative bottom-10">
          <h1 className="text-4xl font-bold">{data.company}</h1>
          <p className=" font-mono pt-3">
            {data.content}
          </p>
          <div className="flex gap-20 pt-3 ">
            <p className="font-bold">On-time: {data.time}</p>
            <p className="font-bold text-blue-500">{data.since}</p>
            <p className="font-bold">Fleet: {data.aero}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineHeader;
