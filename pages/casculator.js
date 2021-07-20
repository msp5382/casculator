import Nav from "../components/Nav";
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
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <div className="mx-auto p-5 w-full max-w-lg">
        <div className="text-center font-bold text-xl">คะแนนของฉัน</div>
        <div className="">GAT PAT</div>
        {gatpat.map((s, i) => {
          return (
            <div className="flex mt-4">
              {s.map((sub, i) => {
                return (
                  <input
                    className={`${i == 1 ? "ml-2 mr-2" : ""} rounded-2xl ${
                      sub != "" ? "border border-base cursor-pointer" : ""
                    } w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                    placeholder={sub}
                  />
                );
              })}
            </div>
          );
        })}
        <div className="mt-5">วิชาสามัญ</div>
        {saman.map((s, i) => {
          return (
            <div className="flex mt-4">
              {s.map((sub, i) => {
                return (
                  <input
                    className={`${i == 1 ? "ml-2 mr-2" : ""} rounded-2xl ${
                      sub != "" ? "border border-base cursor-pointer" : ""
                    } w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                    placeholder={sub}
                  />
                );
              })}
            </div>
          );
        })}
        <div className="mt-5">กสพท.</div>
        {korsorporthor.map((s, i) => {
          return (
            <div className="flex mt-4">
              {s.map((sub, i) => {
                if (sub != "") {
                  return (
                    <input
                      className={`${
                        i == 1 ? "ml-2 mr-2" : ""
                      } rounded-2xl border border-base cursor-pointer w-full text-center pt-2 pb-1 text-black focus:border-0 placeholder-gray-500::placeholder`}
                      placeholder={sub}
                    />
                  );
                } else {
                  return (
                    <div
                      className={`${
                        i == 1 ? "ml-2 mr-2" : ""
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
            บันทึก
          </div>
        </div>
      </div>
    </div>
  );
};
