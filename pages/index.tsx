import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'
// Components
import ProgressBar from "../components/Bars/TailProg";
import ProgressBarH from "../components/Bars/TailProgH";
import Nav from "../components/Nav";
import CountDown from "../components/animated/CountDown.animated"
import router from "next/router";

const Index = () => {
  const donateRef = useRef<null | HTMLDivElement>(null);
  const mainRef = useRef<null | HTMLDivElement>(null);
  const proRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const { page } = router.query;
  // const startCountDown = 365;
  // const target = 10;
  // const [showCalcButton, setShowCalcButton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (page == 'donate') {
        donateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 800)
  }, [page])

  return (
    <div
      ref={mainRef}
      className="w-screen h-screen overflow-scroll flex flex-col"
    >
      <Nav />
      <div
        className="h-screen flex flex-col"
      >
        <div className="hidden sm:flex justify-center mt-16">
          <ProgressBar></ProgressBar>
        </div>

        <div className="h-screen flex flex-col items-center">
          <div className="my-auto pb-8">
            <CountDown />
          </div>
          <div className="flex justify-center">
            <div
              onClick={() => router.push('/view_faculties')}
              className="cursor-pointer mb-5 lg:mb-12 rounded-full text-white text-xl p-5 bg-base"
            >
              ดูสถิติคณะต่างๆ
            </div>
          </div>

          <div
            onClick={() => {
              if (mainRef.current) {
                if (mainRef.current.offsetWidth > 768) {
                  donateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                } else {
                  proRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }
            }
            className="pb-5 mb-8 flex justify-center"
          >
            <div className="animate-bounce">
              <ion-icon
                className="fill-current text-base"
                size="large"
                name="chevron-down-outline"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-screen md:hidden flex items-center pr-3 pl-3 justify-around"
        style={{ marginTop: -40, paddingTop: 40 }} ref={proRef}>
        <ProgressBarH></ProgressBarH>
      </div>
      <div
        className="h-screen flex flex-col"
        style={{ marginTop: -40, paddingTop: 40 }}
      >
        <div className="h-screen flex flex-col items-center">
          <div ref={donateRef} className="my-auto text-lg">
            ร่วมสนับสนุนพวกเราได้ที่
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;