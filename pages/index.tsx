import { useEffect, useState, useRef } from "react";
// Components
import ProgressBar from "../components/Bars/ProgressBar";
import Nav from "../components/Nav";
const Index = () => {
  const startCountDown = 365;
  const target = 10;
  const [day, setDay] = useState(startCountDown);
  const [showCalcButton, setShowCalcButton] = useState(true);
  useEffect(() => {
    const id = setInterval(
      () =>
        setDay((prev) => {
          if (prev - 1 > target) {
            return prev - 1;
          } else {
            clearInterval(id);
            return target;
          }
        }),
      5
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-scroll flex flex-col"
    >
      <Nav />
      <div
        className="h-screen flex flex-col"
        style={{ marginTop: -40, paddingTop: 40 }}
      >
        <div className="hidden md:block lg:block">
          <ProgressBar></ProgressBar>
        </div>

        <div className="h-screen flex flex-col">
          <div className="my-auto">
            <div className="md:mt-12 font-bold text-center text-6xl lg:text-9xl">
              {day} day{day > 1 ? "s" : ""}
            </div>

            <div className="font-bold text-center text-lg  lg:text-2xl">
              {day} day{day > 1 ? "s" : ""} {day} month left
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="cursor-pointer mb-5 lg:mb-12 rounded-full text-white text-xl p-5 bg-base"
            >
              ดูสถิติคณะต่างๆ
            </div>
          </div>
          <div
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }
            }
            className="pb-5 md:hidden mb-8 flex justify-center"
          >
            <ion-icon
              className="fill-current text-base"
              size="large"
              name="chevron-down-outline"
            ></ion-icon>
          </div>
        </div>
      </div>
      <div
        className="min-h-screen md:hidden flex flex-col justify-around"
        style={{ marginTop: -40, paddingTop: 40 }}>
        <div className='h-4' />
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
};

export default Index;
