"use client";

export default function BackgroundCV() {
  return (
    <>
      <div className="flex absolute z-10 h-full w-full pt-[100px] md:pt-[180px] lg:pt-[100px]">
        <div className="flex justify-end w-full h-full fixed lg:pr-[30px]">
          <svg
            height="824"
            width="824"
            className="opacity-20 lg:opacity-30 mt-[70px] md:mt-[30px] lg:mr-[30px] origin-top-right xl:scale-110 2xl:scale-150 "
          >
            <circle
              r="412"
              cx="412"
              cy="412"
              stroke="#72695A"
              stroke-width="1"
              fill="none"
            />
          </svg>
        </div>
        <div className="flex justify-end w-full h-full fixed md:pr-[30px]">
          <svg
            height="755"
            width="755"
            className="opacity-20 lg:opacity-30 origin-top-right xl:scale-110 2xl:scale-150"
          >
            <circle
              r="377.5"
              cx="377.5"
              cy="377.5"
              stroke="#72695A"
              stroke-width="1"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
