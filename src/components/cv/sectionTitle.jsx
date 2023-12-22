"use client";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cvSections } from "@/constants/cvSections";

export default function SectionTitle() {
  const t = useTranslations();
  const [openSection, setOpenSection] = useState(false);
  const toggleSection = (sectionKey) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sectionKey ? null : sectionKey
    );
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      {cvSections.map((section) => (
        <div
          className={cn(
            "flex flex-col justify-center w-[313px]",
            "lg:w-[540px]"
          )}
          key={section.key}
        >
          <div
            className={cn(
              "flex items-center justify-between font-nanum font-bold text-xl text-brown",
              "lg:text-lg"
            )}
          >
            <div className="flex justify-start">
              <p>{section.number + "/"}&nbsp;&nbsp;</p>
              <p>{t("cv." + section.title)}</p>
            </div>
            <button
              className="flex justify-end"
              onClick={() => toggleSection(section.key)}
            >
              <svg
                width="14"
                height="14"
                className={
                  openSection === section.key ? "" : "transform rotate-180"
                }
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
        </div>
      ))}
    </div>
  );
}
