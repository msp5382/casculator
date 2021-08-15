import React, { MouseEventHandler } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[],
  w: string,
  isShow: boolean,
  header?: string,
  onClose: MouseEventHandler<HTMLDivElement>,
}

export default function Modal({ children, w, isShow, header, onClose }: Props) {
  if (isShow) {
    return (
      <>
        <div className="absolute w-screen h-screen flex z-50">
          <div className={`mx-auto my-auto ${w ?? "max-w-lg"} w-full p-3`}>
            <div className="bg-white rounded">
              <div className="flex justify-between pl-3  pt-2 pr-3 border-b border-gray-200">
                <div className="text-sm">{header ?? ""}</div>
                <div onClick={onClose} className="text-lg cursor-pointer">
                  <ion-icon name="close-outline"></ion-icon>
                </div>
              </div>
              <div className="p-3">{children}</div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen fixed bg-black opacity-0 z-40"></div>
      </>
    );
  } else {
    return <></>;
  }
};
