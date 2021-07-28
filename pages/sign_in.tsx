import { useState } from "react";
import Nav from "../components/Nav";
import Button from "../components/Forms/Button";
import CustomTextField from "../components/Forms/CustomTextField";
import router from "next/router";
const loginPage = () => {
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col justify-between">
      <Nav />

      <div className="mx-auto p-5 w-full max-w-sm">
        <div className="flex flex-col text-xl font-bold">เข้าสู่ระบบ</div>
        <div className='flex flex-col justify-items-center'>
          <form>
            <CustomTextField type='password' width='w-99/100 mt-4' label='Username' />
            <CustomTextField type='email' width='w-99/100 mt-4' label='Password' />
          </form>
        </div>
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
        <div onClick={() => router.push('/sign_up')} className="text-center mt-4 underline text-base text-sm cursor-pointer">
          ยังไม่มีบัญชี ? สมัครสมาชิก
        </div>
      </div>
      <div style={{ height: 52 }} />
    </div>
  );
};

export default loginPage;