"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle({ currentLanguage }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isFrench, setLanguage] = useState(pathname.startsWith("/fr"));

  const toggleLanguage = () => {
    setLanguage(!isFrench);
  };

  useEffect(() => {
    const newLanguagePath = isFrench ? "fr" : "en";
    const newPathname = pathname.replace(
      `/${currentLanguage}/`,
      `/${newLanguagePath}/`
    );
    router.push(newPathname);
  }, [isFrench]);

  return (
    <>
      <p
        className={
          pathname.startsWith("/fr") ? "drop-shadow-active-brown font-bold" : ""
        }
      >
        français
      </p>

      <div
        className="relative flex w-[40px] h-[15px] border-[0.5px] border-brown rounded-[50px] items-center cursor-pointer"
        onClick={toggleLanguage}
      >
        <div
          className={`absolute left-0 right-0 bg-brown w-[10px] h-[10px] rounded-full transition-all duration-300 ${
            isFrench
              ? "transform translate-x-[0.35rem]"
              : "transform translate-x-6"
          }`}
        ></div>
      </div>
      <p
        className={
          pathname.startsWith("/en") ? "drop-shadow-active-brown font-bold" : ""
        }
      >
        english
      </p>
    </>
  );
}
