import { useState } from "react";
// Components
import Nav from "../components/Nav";
import Button from "../components/Forms/Button";
import CustomTextField from '../components/Forms/CustomTextField'
export default () => {
  const gatpat = [
    ["GAT", "PAT1", "PAT2"],
    ["PAT3", "PAT4", "PAT5"],
    ["PAT6", "PAT7", ""],
  ];
  const saman = [
    ["คณิต", "ฟิสิกส์", "เคมี"],
    ["ชีวะ", "ไทย", "สังคม"],
    ["อังกฤษ", "", ""],
  ];
  const korsorporthor = [["กสพท.", "", ""]];
  const [showPointForm, setShowPointForm] = useState(false);
  const [showImportForm, setShowImportForm] = useState(false);

  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <div className="mx-auto p-5 w-full h-full max-w-lg">
        {!showPointForm && !showImportForm ? (
          <div className="flex flex-col h-full">
            <div className="my-auto">
              <div
                onClick={() => setShowPointForm(true)}
                className="p-3 rounded-lg bg-base text-white text-center"
              >
                กรอกคะแนน
              </div>

              <div className="text-center mt-1 mb-1">หรือ</div>
              <div
                onClick={() => setShowImportForm(true)}
                className="p-3 rounded-lg bg-base text-white text-center"
              >
                Import คะแนน จาก ทปอ.
              </div>
              <div className="text-xs text-center pl-5 pr-5 pt-3">
                ระบบจะบันทึกเฉพาะคะแนนของคุณ
                และเลขบัตรประชาชนจะไม่ถูกนำไปใช้ในเรื่องอื่นนอกเหนือจากการ
                Import ข้อมูล
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {showPointForm ? (
          <>
            <div className="text-center font-bold text-xl">คะแนนของฉัน</div>
            <div className="">GAT PAT</div>
            <form>
              {gatpat.map((s, i) => {
                return (
                  <div className="flex mt-4" key={i}>
                    {s.map((sub, i) => {
                      if (sub != "") {
                        return (
                          <CustomTextField label={sub} />
                        );
                      } else {
                        return (
                          <div
                            className={`${i == 1 ? "ml-2 mr-2" : ""
                              } rounded-2xl w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                          />
                        );
                      }
                    })}
                  </div>
                );
              })}
            </form>
            <div className="mt-5">วิชาสามัญ</div>
            {saman.map((s, i) => {
              return (
                <div className="flex mt-4" key={i}>
                  {s.map((sub, i) => {
                    if (sub != "") {
                      return (
                        <input
                          className={`${i == 1 ? "ml-2 mr-2" : ""
                            } rounded-2xl border border-base cursor-pointer w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                          placeholder={sub}
                        />
                      );
                    } else {
                      return (
                        <div
                          className={`${i == 1 ? "ml-2 mr-2" : ""
                            } rounded-2xl w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                        />
                      );
                    }
                  })}
                </div>
              );
            })}
            <div className="mt-5">กสพท.</div>
            {korsorporthor.map((s, i) => {
              return (
                <div className="flex mt-4" key={i}>
                  {s.map((sub, i) => {
                    if (sub != "") {
                      return (
                        <input
                          className={`${i == 1 ? "ml-2 mr-2" : ""
                            } rounded-2xl border border-base cursor-pointer w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                          placeholder={sub}
                        />
                      );
                    } else {
                      return (
                        <div
                          className={`${i == 1 ? "ml-2 mr-2" : ""
                            } rounded-2xl w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                        />
                      );
                    }
                  })}
                </div>
              );
            })}
            <div className="flex justify-end mt-5">
              <div className="bg-base text-white cursor-pointer rounded-lg pt-2 pb-2 w-24 text-center">
                <Button text="บันทึก"></Button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {showImportForm ? (
          <>
            <div>เลขบัตรประจำตัวประชาชน</div>
            <input
              className={`pl-3 rounded-xl w-full border border-base pt-3 pb-2 text-black focus:border-0 placeholder-gray-500::placeholder`}
              placeholder="เลขบัตรประจำตัวประชาชน"
            />
            <div className="flex justify-end">
              <Button text="ค้นหา"></Button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
