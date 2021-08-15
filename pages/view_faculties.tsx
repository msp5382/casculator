import { useEffect, useRef, useState } from "react";
import Image from "next/image"
// Component
import Nav from "../components/Nav";
import Search from "../components/Forms/Search";
import Modal from "../components/Modal";
import Button from "../components/Forms/Button";
// Data
import { getUniversityFromCache, getFaculityFromCache } from "../services/universities";
import { FacultiesType, univercitysType } from "../models/univercitys.model";
// Image
import ChulaLogo from "../public/chula_test.png"
import { url } from "inspector";


const viewFaculties = ({ uniss, facuss }: { uniss: univercitysType[], facuss: FacultiesType[] }) => {
  const [sort, setSort] = useState("default");
  const [isShowSortModal, setShowSortModal] = useState(false);
  const [unis, setUnis] = useState<univercitysType[]>(uniss);
  const [facus, setFacus] = useState<FacultiesType[]>(facuss);
  const originUni = useRef<univercitysType[]>([]);
  const [searchKey, setSearch] = useState("");
  const [viewUni, setViewUni] = useState("");
  const [loadPage, setLoadPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onFaculScroll = () => {
    const pos = scrollRef.current?.scrollTop ?? 64 * unis.length
    const prePage = Math.floor(pos / (960))
    const curentPagePos = pos - 960 * prePage;
    if (curentPagePos > 320) {
      if (loadPage > prePage + 2) {
        return
      }
      setLoadPage(prePage + 2);
    }
  }

  useEffect(() => {
    const uniAmount = 15 * loadPage;
    const originLen = originUni.current.length
    setUnis(originUni.current.slice(0, (uniAmount - 1) > originLen ? originLen : uniAmount))
  }, [loadPage]);


  let filter_facus = facus.filter(({ university_id }) => university_id == viewUni)

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
      originUni.current = sorted;
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
      return unis.map((item) => (
        <div key={item.university_id} style={{ userSelect: "none" }}>
          <div
            onClick={() => setViewUni(item.university_id)}
            className="flex bg-thin-white rounded p-3 mt-2"
          >
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={ChulaLogo}
            />
            <div className="flex flex-col justify-center w-full pl-4">
              <div className="text-sm">{item.university_name}</div>
            </div>
            <div className="flex flex-col justify-center pl-4">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
        </div>
      ));

    } else {
      return (filter_facus.map((value) => (<>
        <div key={value.faculty_id} className="flex bg-thin-white rounded p-3 mt-2" style={{ userSelect: "none" }}>
          <div className="flex flex-col justify-center w-full pl-4">
            <div className="text-sm">{value.faculty_name_th}</div>
            <div className="text-xs text-gray-400">
              {value.field_name_th} {value.major_name_th} {value.program_type_name_th}
            </div>
          </div>
        </div>
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
        <div
          className="flex flex-col bg-base rounded-lg p-4"
          // TODO:
          style={{ height: "80vh" }}
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

          <div onScroll={onFaculScroll} ref={scrollRef} className="overflow-scroll h-full mt-2 scrollbar-hide">{UniOrFacuList()}</div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const url1 = "https://tcas.sgp1.digitaloceanspaces.com/data/universities.json";
  const res1 = await fetch(url1)
  const uniss = await res1.json()

  let url2 = "https://tcas.sgp1.digitaloceanspaces.com/data/courses.json"
  const res2 = await fetch(url2)
  const facuss = await res2.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      uniss, facuss
    },
  }
}

export default viewFaculties;
