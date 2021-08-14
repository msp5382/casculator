import { useRef, useState } from "react";
import Link from "next/link";

import Hamburger from "hamburger-react";
const Nav = () => {
  const hRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const data = [
    { name: "หน้าหลัก", path: "/" },
    { name: "คะแนนของฉัน", path: "/save_points" },
    { name: "ข้อมูลคณะต่างๆ", path: "/view_faculties" },
    { name: "ระบบจัดอันดับ", path: "" },
    { name: "วิธีการจัดอันดับ", path: "" },
  ];
  return (
    <>
      <div className="w-full" ref={hRef}>
        <div className="bg-base flex justify-between">
          <Link href={"/#"}>
            <div
              className="cursor-pointer p-2 mt-1 font-bold text-lg text-white w-20"
            >
              Casculator
            </div>
          </Link>
          <div className="p-2 pt-4 hidden md:flex">
            {data.map((t, i) => (
              <Link href={t.path}>
                <a>
                  <div
                    key={i}
                    className="ml-9 text-sm text-white cursor-pointer"
                  >
                    {t.name}
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <Link href={"/sign_up"}>
            <a>
              <div
                className="p-2 pt-2 hidden md:flex text-sm "
              >
                <div className="rounded p-2 bg-base-light text-white cursor-pointer hover:bg-white hover:text-black">
                  เข้าสู่ระบบ
                </div>
              </div>
            </a>
          </Link>
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
              <Link href={t.path}>
                <a>
                  <div
                    key={i}
                    className="cursor-pointer border-t border-base-light p-3"
                  >
                    {t.name}
                  </div>
                </a>
              </Link>
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

export default Nav;