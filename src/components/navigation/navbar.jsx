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
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 px-12 font-nanum text-2xl text-brown"
          >
            <span>menu</span>
            <div className="mt-[4px]">
              <svg
                width="14"
                height="14"
                className={!isMenuOpen && "transform rotate-180"}
              >
                <polygon points="1,12.12 7,1 13,12.12" fill="#72695a" />
              </svg>
            </div>
          </button>
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
                "lg:text-lg",
                isMobile && "flex-col gap-12 mt-[120px] mx-8 text-2xl "
              )}
            >
              <div
                className={cn(
                  "flex lg:gap-16",
                  isMobile &&
                    "flex-col gap-6 p-8 border-[0.5px] border-brown rounded-bl-[50px]"
                )}
              >
                {navLinks.map((link, index) => {
                  return (
                    <NavLink
                      href={link.path}
                      key={index}
                      text={t("nav." + link.key)}
                      onClick={toggleMenu}
                    />
                  );
                })}
              </div>
              <div
                className={cn(
                  "flex gap-4 font-old text-brown items-center",
                  "lg:pr-20 lg:pl-[270px] lg:text-lg lg:justify-center lg:pt-[1.2px]",
                  isMobile &&
                    "text-2xl py-10 px-8 border-[0.5px] border-brown rounded-tr-[50px]"
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
