import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'
// Components
import ProgressBar from "../components/Bars/TailProg";
import ProgressBarH from "../components/Bars/TailProgH";
import Nav from "../components/Nav";
import CountDown from "../components/animated/CountDown.animated"
import Link from "next/link";

const Index = () => {
  const donateRef = useRef<null | HTMLDivElement>(null);
  const mainRef = useRef<null | HTMLDivElement>(null);
  const proRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const { page } = router.query;
  useEffect(() => {
    setTimeout(() => {
      if (page == 'donate') {
        donateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 800)
  }, [page])

  return (
    <div ref={mainRef} className="w-screen h-auto p-0 m-0">
      <div className="w-full fixed top-0 z-20">
        <Nav />
      </div>
      <div className="w-full h-screen flex flex-col justify-between items-center">
        <div className="mt-24 hidden lg:flex">
          <ProgressBar />
        </div>
        <div className="mt-16 h-[40px] flex lg:hidden" />
        <div className="flex flex-col items-center flex-center">
          <CountDown />
        </div>
        <div className="flex flex-col items-center">
          <Link href="/view_faculties">
            <a>
              <div className="py-4 px-5 text-center text-2xl rounded-3xl text-thin-white bg-base">
                <h1>
                  ดูสถิติคณะ
                </h1>
              </div>
            </a>
          </Link>
          <div onClick={() => {
            if (mainRef.current != undefined) {
              if (mainRef.current.offsetWidth > 1024) {
                donateRef.current?.scrollIntoView({ behavior: "smooth" })
              } else {
                proRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            }
          }} className="my-5 animate-bounce">
            <ion-icon size="large" name="chevron-down-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div ref={proRef} className="w-full h-screen flex flex-col justify-around items-center lg:hidden">
        <ProgressBarH />
      </div>
      <div ref={donateRef} className="w-full h-screen flex flex-col justify-around items-center">
        รวมสนับสนุนพวกเราได้ที่
      </div>
    </div>
  );
};

export default Index;