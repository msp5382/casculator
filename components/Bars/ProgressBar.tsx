import { useEffect, useRef, useState } from "react";

export default ({ ...props }) => {
  const [lineW, setLineW] = useState(30);
  const container = useRef<HTMLDivElement>(null);
  const data = [
    "สมัครสอบ GAT/PAT",
    "สมัครสอบ วิชาสามัญ",
    "สอบ GAT/PAT",
    "สอบ วิชาสามัญ",
    "ประกาศคะแนน",
    "เลือกมหาลัย",
    "ประกาศ TCAS รอบ 3",
  ];
  const amount = data.length;
  useEffect(() => {
    setLineW((container.current?.offsetWidth ?? 40 - 20 - 40 * amount) / (amount - 1));
  }, [container]);

  return (
    <>
      <div className="mt-8">
        <div className="hidden md:flex justify-center">
          <div
            className="w-full max-w-3xl flex justify-between pl-3 pr-3 "
            ref={container}
          >
            {data.map((t, i) => (
              <>
                <div key={i + amount} className="relative">
                  <div className="w-10 h-10 rounded-full bg-base"></div>
                  <div className="absolute top-0 text-xs text-center -ml-10 mt-12 w-32">
                    {t}
                  </div>
                </div>
                {i != amount - 1 ? (
                  <div
                    key={i + amount + 1}
                    className="flex flex-col justify-center"
                  >
                    <div
                      style={{ width: lineW }}
                      className="border-base border h-0"
                    ></div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="flex md:hidden ml-5 ">
          <div className="w-full text-sm text-right">
            {data.map((t, i) => (
              <>
                {i % 2 == 0 ? (
                  <div
                    key={i}
                    className="h-14 pr-3"
                    style={{ height: 120, paddingTop: 10 }}
                  >
                    {t}
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div className="w-10">
            {data.map((t, i) => (
              <>
                <div key={i} className="w-10 h-10 rounded-full bg-base"></div>
                {i != amount - 1 ? (
                  <div className="flex w-10 justify-center">
                    <div className="border border-base w-0 h-5"></div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div className="w-full text-sm text-left" style={{ marginTop: 60 }}>
            {data.map((t, i) => (
              <>
                {i % 2 != 0 ? (
                  <div
                    key={i}
                    className="h-14 pl-3"
                    style={{ height: 120, paddingTop: 10 }}
                  >
                    {t}
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
