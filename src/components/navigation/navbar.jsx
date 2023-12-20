"use client";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "./navLink";
import { LanguageToggle } from "./languageToggle";
import useIsMobile from "@/utils/useIsMobile";

export default function Navbar() {
  const t = useTranslations();
  const { lng } = useParams();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobileMenuOpen = isMobile && isMenuOpen;
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  return (
    <>
      <div
        className={cn(
          "flex bg-background w-screen h-[80px] items-center justify-between fixed top-0 z-[100] pt-4",
          "lg:h-[120px]"
        )}
      >
        <div
          className={cn(
            "flex px-12 font-monkeg text-4xl text-brown",
            "lg:px-20 lg:text-5xl"
          )}
        >
          N
        </div>
        {isMobile && (
          <div className="px-12 font-nanum text-lg text-brown">
            <button onClick={toggleMenu}>
              menu<span className="text-sm pl-2">▼</span>
            </button>
          </div>
        )}

        {(!isMobile || isMobileMenuOpen) && (
          <div
            className={cn(
              isMobileMenuOpen &&
                "absolute w-full h-screen inset-0 backdrop-filter backdrop-blur-sm mt-[80px]"
            )}
          >
            <div
              className={cn(
                "flex font-nanum",
                "lg:text-lg lg:gap-16 lg:justify-center",
                isMobile && "flex-col mt-[120px] ml-20 text-2xl gap-6"
              )}
            >
              {navLinks.map((link, index) => {
                return (
                  <NavLink
                    href={link.path}
                    key={index}
                    text={t("nav." + link.key)}
                  />
                );
              })}
              <div
                className={cn(
                  "flex gap-4 font-old text-brown items-center",
                  "lg:pr-20 lg:pl-48 lg:text-lg lg:justify-center",
                  isMobile && "text-2xl pt-10"
                )}
              >
                <LanguageToggle currentLanguage={lng} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
