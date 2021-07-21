import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Forms/Search";
import Modal from "../components/Modal";
import Button from "../components/Forms/Button";
import axios from "axios";

import { getUniversityFromCache } from "../services/universities";
export default () => {
  const [h, setHeight] = useState(24);
  useEffect(() => {
    setTimeout(() => {
      setHeight("calc( 100% - 32px ) ");
    }, 500);
  }, []);
  const [sort, setSort] = useState("default");
  const [isShowSortModal, setShowSortModal] = useState(false);
  const [unis, setUnis] = useState([]);
  const originUni = useRef([]);
  const [searchKey, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      const _unis = await (await getUniversityFromCache()).json();
      let sorted = [];
      if (sort == "default") {
        sorted = _unis.sort((a, b) => {
          if (parseInt(a.university_id) > parseInt(b.university_id)) return 1;
          if (parseInt(a.university_id) < parseInt(b.university_id)) return -1;
          return 0;
        });
      } else if (sort == "asc") {
        sorted = _unis.sort((a, b) => {
          if (a.university_name > b.university_name) return 1;
          if (a.university_name < b.university_name) return -1;
          return 0;
        });
      } else if (sort == "desc") {
        sorted = _unis.sort((a, b) => {
          if (a.university_name > b.university_name) return -1;
          if (a.university_name < b.university_name) return 1;
          return 0;
        });
      }
      if (originUni.current.length == 0) {
        originUni.current = sorted;
      }
      setUnis(sorted);
    })();
  }, [sort]);

  useEffect(() => {
    setUnis(
      originUni.current.filter(({ university_name }) => {
        if (
          university_name
            .replace(/ /g, "")
            .includes(searchKey.replace(/ /g, ""))
        ) {
          return true;
        }
      })
    );
  }, [searchKey]);
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <Modal
        w="max-w-xs"
        isShow={isShowSortModal}
        onClose={() => setShowSortModal(false)}
      >
        <div className="flex justify-between">
          <div className="mt-1">เรียงลำดับ</div>
          <select
            value={sort}
            className="border"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">ตามการค้นหายอดนิยม</option>
            <option value="asc">ตามลำดับ ก-ฮ</option>
            <option value="desc">ตามลำดับ ฮ-ก</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={() => setShowSortModal(false)}
            text="เรียงลำดับ"
          ></Button>
        </div>
      </Modal>
      <div className="mx-auto p-5 w-full h-full max-w-lg">
        <div
          className="flex flex-col bg-base rounded-lg p-4"
          style={{ height: "80vh" }}
        >
          <div className="flex">
            <Search
              onChange={(e) => setSearch(e.target.value)}
              value={searchKey}
            />

            <div className="flex justify-end">
              <div
                onClick={() => setShowSortModal(true)}
                className="cursor-pointer text-xl flex-col flex text-white justify-center"
              >
                <ion-icon name="funnel-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="overflow-scroll h-full mt-2">
            {unis.map(({ logo, university_name }) => (
              <>
                <div className="flex bg-thin-white rounded p-3 mt-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={logo ?? "chula_test.png"}
                  />
                  <div className="flex flex-col justify-center w-full pl-4">
                    <div className="text-sm">{university_name}</div>
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
    </div>
  );
};
