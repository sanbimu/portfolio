"use client";

import useIsMobile from "@/utils/useIsMobile";
import CvSVG from "../svg/CvSVG";
import test from "../svg/bgcv.svg";
import Image from "next/image";

export default function BackgroundCV() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <div className="flex absolute z-10 h-dvh w-screen pt-[100px]">
          <div className="flex justify-end w-full h-full fixed">
            {/* <div className="flex absolute right-20 size-[724px] rounded-full border border-brown border-opacity-30"></div>
            <div className="flex justify-center items-center size-[624px] rounded-full border border-brown border-opacity-30">
              <p className="font-monkeg text-[40px] text-brown text-opacity-60">
                curriculum vitae
              </p>
            </div> */}
            {/* <Image alt="test" src={test} /> */}
            <CvSVG className="scale-[95%] h-[890px] w-[860px]" />
          </div>
        </div>
      )}
    </>
  );
}
