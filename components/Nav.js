import Hamburger from "hamburger-react";
import { useState } from "react";
export default () => {
  const [isOpen, setOpen] = useState(false);
  const data = ["หน้าหลัก", "คะแนนของฉัน", "ข้อมูลคณะต่างๆ", "ระบบจัดอันดับ"];
  return (
    <>
      <div className="bg-base flex justify-between">
        <div className="p-2 mt-1 font-bold text-lg text-white w-20">
          Casculator
        </div>
        <div className="p-2 pt-3 hidden md:flex">
          {data.map((t) => (
            <div className="ml-3 text-sm text-white">{t}</div>
          ))}
        </div>

        <div className="p-2 pt-3 hidden md:flex text-sm  w-20">USER V</div>
        <div className="flex md:hidden">
          <Hamburger
            toggled={isOpen}
            color="white"
            size={18}
            toggle={setOpen}
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-base text-sm text-white">
          {data.map((t) => (
            <div className="cursor-pointer border-t border-base-light p-3">
              {t}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
