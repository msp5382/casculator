import { useEffect, useRef, useState } from "react";
import { useSpring, useChain, useSpringRef, config, animated, useTransition } from "react-spring";
// Component
import Nav from "../components/Nav";
import Search from "../components/Forms/Search";
import Modal from "../components/Modal";
import Button from "../components/Forms/Button";

import {
  getUniversityFromCache,
  getFaculityFromCache,
} from "../services/universities";
import { FacultiesType, univercitysType } from "../models/univercitys.model";
import { Property } from "csstype";
const viewFaculties = () => {
  const [sort, setSort] = useState("default");
  const [isShowSortModal, setShowSortModal] = useState(false);
  const [unis, setUnis] = useState<univercitysType[]>([]);
  const [facus, setFacus] = useState<FacultiesType[]>([]);
  const originUni = useRef<univercitysType[]>([]);
  const [searchKey, setSearch] = useState("");
  const [viewUni, setViewUni] = useState("");

  // for animated
  const springApi = useSpringRef();
  const { y, opacity } = useSpring({
    from: {
      y: '50px',
      opacity: 0.0,
    },
    y: '0px',
    opacity: 1.0,
    delay: 250,
    config: config.molasses,
    ref: springApi,
  })
  const transApi = useSpringRef()
  let filter_facus = facus.filter(({ university_id }) => university_id == viewUni)
  const transitionUnis = useTransition(unis, {
    ref: transApi,
    trail: facus ? 2000 / filter_facus.length : 2000 / unis.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    // leave: { opacity: 0, scale: 0.5, x: 10 },
  })
  const transitionFaculs = useTransition(filter_facus, {
    ref: transApi,
    trail: facus ? 2000 / filter_facus.length : 2000 / unis.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    // leave: { opacity: 0, scale: 0.5, x: 10 },
  })

  useChain([springApi, transApi])

  useEffect(() => {
    (async () => {
      const _unis: univercitysType[] = await (await getUniversityFromCache())?.json()
      const _facus = await (await getFaculityFromCache())?.json()

      let sorted: univercitysType[] = [];
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
      console.log(_facus);
      setFacus(_facus);
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

  // type Props = {
  //   logo: string,
  //   university_name: string,
  //   university_id: string
  // }
  // logo not exist
  const UniOrFacuList = () => {
    if (viewUni == "") {
      return transitionUnis((style, item) => (
        <animated.div key={item.university_id} style={{ ...style }}>
          <div
            onClick={() => setViewUni(item.university_id)}
            className="flex bg-thin-white rounded p-3 mt-2"
          >
            <img
              className="h-8 w-8 rounded-full"
              src={"chula_test.png"}
            />
            <div className="flex flex-col justify-center w-full pl-4">
              <div className="text-sm">{item.university_name}</div>
            </div>
            <div className="flex flex-col justify-center pl-4">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </animated.div>
      ));

    } else {
      return (transitionFaculs((style, item) => (<>
        <animated.div key={item.faculty_id} className="flex bg-thin-white rounded p-3 mt-2" style={{ ...style }}>
          <div className="flex flex-col justify-center w-full pl-4">
            <div className="text-sm">{item.faculty_name_th}</div>
            <div className="text-xs text-gray-400">
              {item.field_name_th} {item.major_name_th} {item.program_type_name_th}
            </div>
          </div>
        </animated.div>
      </>))
      );
    }
  };
  return (
    <div className="w-screen h-screen overflow-scroll flex flex-col">
      <Nav />
      <Modal
        w={"max-w-xs"}
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
            text={"เรียงลำดับ"}
          ></Button>
        </div>
      </Modal>
      <div className="mx-auto p-5 w-full h-full max-w-lg">
        <animated.div
          className="flex flex-col bg-base rounded-lg p-4"
          // TODO:
          style={{ height: "80vh", y, opacity }}
        >
          <div className="flex">
            {viewUni == "" ? (
              <>
                <Search
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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
              </>
            ) : (
              <>
                <div
                  className="flex text-white w-min cursor-pointer"
                  onClick={() => setViewUni("")}
                >
                  <div className="flex flex-col justify-center">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </div>
                  <div className="text-white text-sm">กลับ</div>
                </div>
              </>
            )}
          </div>

          <div className="overflow-scroll h-full mt-2">{UniOrFacuList()}</div>
        </animated.div>
      </div>
    </div>
  );
};

export default viewFaculties;


