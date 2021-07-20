import { useEffect, useState } from "react";
import Nav from "../components/Nav";
export default () => {
  const [h, setHeight] = useState(24);
  useEffect(() => {
    setTimeout(() => {
      setHeight("calc( 100% - 32px ) ");
    }, 500);
  }, []);
  const unis = [
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกร",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
    {
      logo: "chula_test.png",
      name: "จุฬาลงกรณ์มหาวิทยาลัย",
    },
  ];
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <div className="mx-auto p-5 w-full h-full max-w-lg">
        <div
          className="bg-base rounded-lg p-3 overflow-scroll pb-2"
          style={{ height: "80vh" }}
        >
          <input
            type="text"
            className="w-full p-1 rounded text-sm"
            placeholder="Search..."
          />
          {unis.map(({ logo, name }) => (
            <>
              <div className="flex bg-thin-white rounded p-3 mt-2">
                <img className="h-8 w-8 rounded-full" src={logo} />
                <div className="flex flex-col justify-center w-full pl-4">
                  <div className="text-sm">{name}</div>
                </div>
                <div className="flex flex-col justify-center pl-4">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
