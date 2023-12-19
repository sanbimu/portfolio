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
        className="relative flex w-[40px] h-[15px] border-[0.5px] border-brown rounded-[50px] items-center cursor-pointer"
        onClick={toggleLanguage}
        href={pathname}
        locale={isFrench ? "en" : "fr"}
        shallow
      >
        <div
          className={cn(
            "absolute left-0 right-0 bg-brown w-[10px] h-[10px] rounded-full",
            // "transition-all duration-300",
            isFrench
              ? "transform translate-x-[0.35rem]"
              : "transform translate-x-6"
          )}
        />
      </Link>
      <p className={!isFrench ? "drop-shadow-active-brown font-bold" : ""}>
        english
      </p>
    </>
  );
}
