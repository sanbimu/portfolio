"use client";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import Experience from "./experience";
import Skills from "./skills";

export default function Section({ sectionKey, section, index }) {
  const t = useTranslations();
  const [openedSection, setOpenedSection] = useState(false);

  const toggleSection = () => {
    setOpenedSection((prevOpenedSection) => !prevOpenedSection);
  };

  const number = useMemo(() => {
    return String(index + 1).padStart(2, "0");
  }, [index]);

  const SectionContent = useMemo(() => {
    switch (sectionKey) {
      case "experience":
        return Experience;
      case "skills":
        return Skills;
    }
  }, [sectionKey]);

  return (
    <div
      className={cn("flex flex-col justify-center w-[313px]", "lg:w-[540px]")}
    >
      <div
        className={cn(
          "flex items-center justify-between font-nanum font-bold text-xl text-brown",
          "lg:text-lg"
        )}
      >
        <div className="flex justify-start">
          <p>{number + "/"}&nbsp;&nbsp;</p>
          <p>{t(`cv.section.${sectionKey}.title`)}</p>
        </div>
        <button
          className="flex justify-end"
          onClick={() => toggleSection(sectionKey)}
        >
          <svg
            width="14"
            height="14"
            className={!openedSection && "transform rotate-180"}
          >
            <polygon points="1,12.12 7,1 13,12.12" fill="#72695a" />
          </svg>
        </button>
      </div>
      <div
        className={cn(
          "flex w-[88%] ml-10 border-b-[0.5px] border-brown",
          "lg:w-[93%]"
        )}
      ></div>
      {openedSection && (
        <div className="w-[85%] py-2 md:py-4">
          <SectionContent contents={section.values} />
        </div>
      )}
    </div>
  );
}
