import { useState } from "react";
import Nav from "../components/Nav";
import Button from "../components/Forms/Button";
import TextBox from "../components/Forms/TextBox";
export default () => {
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <div className="mx-auto p-5 w-full h-full max-w-sm">
        <div className="flex flex-col text-xl font-bold">เข้าสู่ระบบ</div>
        <div className="text-xs mt-2">E-Mail</div>
        <TextBox></TextBox>
        <div className="text-xs mt-2">Password</div>
        <TextBox></TextBox>
        <div className="flex justify-end">
          <Button text="เข้าสู่ระบบ"></Button>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center w-full">
            <div className="border-t border-base h-0 w-full"></div>
          </div>
          <div className="pl-1 pr-1 text-base">หรือ</div>
          <div className="flex flex-col justify-center w-full">
            <div className="border-t border-base h-0 w-full"></div>
          </div>
        </div>

        <div className="shadow text-sm w-full rounded-lg p-3 bg-white flex mt-2">
          <img className="h-5" src="./google-logo.png" />
          <div className="ml-3">เข้าสู่ระบบด้วย Google </div>
        </div>
        <div className="shadow text-sm w-full rounded-lg p-3 bg-white flex mt-2">
          <img className="h-5" src="./fb-logo.png" />
          <div className="ml-3">เข้าสู่ระบบด้วย Facebook </div>
        </div>
        <div className="text-center mt-2 underline text-base text-sm cursor-pointer">
          ยังไม่มีบัญชี ? สมัครสมาชิก
        </div>
      </div>
    </div>
  );
};
