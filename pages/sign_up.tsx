import { useState } from "react";
import Nav from "../components/Nav";
import Button from "../components/Forms/Button";
import CustomTextField from "../components/Forms/CustomTextField";
const loginPage = () => {
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col justify-between">
      <Nav />

      <div className="mx-auto p-5 w-full max-w-sm">
        <div className="flex flex-col text-xl font-bold">ลงทะเบียน</div>
        <div className='flex flex-col justify-items-center'>
          <form>
            <div className='flex flex-row'>
              <CustomTextField type='text' width='w-99/100 mt-4' label='ชื่อ' />
              <CustomTextField type='text' width='w-99/100 mt-4' label='นามสกุล' />
            </div>
            <div className='flex flex-row'>
              <CustomTextField type='number' width='w-99/100 mt-4' label='วัน' />
              <div className='flex mt-4 items-center justify-items-center'>/</div>
              <CustomTextField type='number' width='w-99/100 mt-4' label='เดือน' />
              <div className='flex mt-4 items-center justify-items-center'>/</div>
              <CustomTextField type='number' width='w-99/100 mt-4' label='ปี' />
              <div className='flex mt-4 items-center justify-items-center'>เกิด</div>
            </div>
            <div className="flex flex-col justify-center ml-4 h-8" style={{ fontSize: 10 }}>รหัสบัตรประชาชนสำหรับการขอคะแนนจากระบบ</div>
            <CustomTextField maxLenght={13} type='text' width='w-99/100' label='รหัสบัตรประชาชน' />
            <CustomTextField type='email' width='w-99/100 mt-4' label='อีเมล' />
            <CustomTextField type='text' width='w-99/100 mt-4' label='ชื่อผู้ใช้งาน' />
            <CustomTextField type='password' width='w-99/100 mt-4' label='รหัสผ่าน' />
          </form>
        </div>
        <div className="flex justify-end">
          <Button text="ลงทะเบียน"></Button>
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
          <div className="ml-3">ลงทะเบียนด้วย Google </div>
        </div>
        <div className="shadow text-sm w-full rounded-lg p-3 bg-white flex mt-2">
          <img className="h-5" src="./fb-logo.png" />
          <div className="ml-3">ลงทะเบียนด้วย Facebook </div>
        </div>
      </div>
      <div style={{ height: 52 }} />
    </div>
  );
};

export default loginPage;