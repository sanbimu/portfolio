"use client";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";
import Languages from "./languages";
import Strengths from "./strengths";
import Interests from "./interests";

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
      case "education":
        return Education;
      case "skills":
        return Skills;
      case "languages":
        return Languages;
      case "strengths":
        return Strengths;
      case "interests":
        return Interests;
    }
  }, [sectionKey]);

  return (
    <div
      className={cn(
        "flex flex-col justify-center w-[313px]",
        "md:w-[470px]",
        "lg:w-[570px]"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between font-average text-xl text-brown",
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
            className={cn(
              "opacity-80",
              !openedSection && "transform rotate-180"
            )}
          >
            <polygon points="1,12.12 7,1 13,12.12" fill="#72695a" />
          </svg>
        </button>
      </div>
      <div
        className={cn(
          "flex w-full border-b-[0.5px] border-brown",
          "lg:w-[95%] lg:ml-8"
        )}
      ></div>
      {openedSection && (
        <div
          className={cn("flex flex-col gap-6 w-[full] pt-8 pb-4", "lg:ml-8")}
        >
          <SectionContent contents={section.values} />
        </div>
      )}
    </div>
  );
}
