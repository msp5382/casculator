import Nav from "../components/Nav";
import ProgressBar from "../components/Bars/ProgressBar";
import { useState } from "react";
export default () => {
  const [day, setDay] = useState(2);
  return (
    <div className="w-screen h-screen">
      <Nav />
      <ProgressBar></ProgressBar>
      <div className="flex justify-center mt-16">
        <div className="">
          <div className="font-bold" style={{ fontSize: 120 }}>
            {day} day{day > 1 ? "s" : ""}
          </div>

          <div className="font-bold text-center" style={{ fontSize: 30 }}>
            {day} day{day > 1 ? "s" : ""} {day} month left
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24 pb-12">
        <div className="rounded-full text-white bottom-0 text-xl p-5 bg-base">
          คำนวนคะแนน
        </div>
      </div>
    </div>
  );
};
