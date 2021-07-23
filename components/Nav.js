import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
export default () => {
  const hRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const data = ["หน้าหลัก", "คะแนนของฉัน", "ข้อมูลคณะต่างๆ", "ระบบจัดอันดับ"];
  const path = ["/", "/score", "/view_faculties", "/ranking"];
  return (
    <>
      <div className="fixed w-full z-50" ref={hRef}>
        <div className="bg-base flex justify-between">
          <div
            onClick={() => (window.location = "/")}
            className="cursor-pointer p-2 mt-1 font-bold text-lg text-white w-20"
          >
            Casculator
          </div>
          <div className="p-2 pt-4 hidden md:flex">
            {data.map((t, i) => (
              <div
                onClick={() => (window.location = path[i])}
                key={i}
                className="ml-3 text-sm text-white cursor-pointer"
              >
                {t}
              </div>
            ))}
          </div>

          <div
            onClick={() => (window.location = "/login")}
            className="p-2 pt-2 hidden md:flex text-sm "
          >
            <div className="rounded p-2 bg-base-light text-white cursor-pointer hover:bg-white hover:text-black">
              เข้าสู่ระบบ
            </div>
          </div>
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
            {data.map((t, i) => (
              <div
                onClick={() => (window.location = path[i])}
                key={i}
                className="cursor-pointer border-t border-base-light p-3"
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="mb-5"
        style={{ height: hRef.current?.offsetHeight ?? 48 }}
      >
        .
      </div>
    </>
  );
};
