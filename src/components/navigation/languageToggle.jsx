"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Link, usePathname } from "@/utils/navigation";

export function LanguageToggle({ currentLanguage }) {
  const pathname = usePathname();
  const [isFrench, setLanguage] = useState(currentLanguage === "fr");

  const toggleLanguage = () => {
    setLanguage(!isFrench);
  };

  return (
    <>
      <p className={isFrench ? "drop-shadow-active-brown font-bold" : ""}>
        français
      </p>
      <Link
        className={cn(
          "relative flex w-[50px] h-[20px] border-[0.5px] border-brown rounded-[50px] items-center cursor-pointer",
          "lg:w-[40px] lg:h-[15px]"
        )}
        onClick={toggleLanguage}
        href={pathname}
        locale={isFrench ? "en" : "fr"}
        shallow
      >
        <div
          className={cn(
            "absolute left-0 right-0 bg-brown w-[13px] h-[13px] rounded-full",
            "lg:w-[10px] lg:h-[10px]",
            // "transition-all duration-300",
            isFrench
              ? "transform translate-x-[0.35rem]"
              : "transform lg:translate-x-6 translate-x-[30px]"
          )}
        />
      </Link>
      <p className={!isFrench ? "drop-shadow-active-brown font-bold" : ""}>
        english
      </p>
    </>
  );
}
