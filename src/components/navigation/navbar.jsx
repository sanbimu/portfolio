"use client";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "./navLink";
import { LanguageToggle } from "./languageToggle";
import useIsMobile from "@/utils/useIsMobile";

export default function Navbar() {
  const t = useTranslations();
  const { lng } = useParams();
  const isMobile = useIsMobile();

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
            <button>
              menu<span className="text-sm pl-2">▼</span>
            </button>
          </div>
        )}
        {!isMobile && (
          <>
            <div className="flex px-20 font-nanum text-lg gap-16 justify-center">
              {navLinks.map((link, index) => {
                return (
                  <NavLink
                    href={`/${lng}/${link.path}`}
                    key={index}
                    text={t("nav." + link.key)}
                  />
                );
              })}
            </div>
            <div className="flex px-20 font-old text-brown text-lg gap-4 items-center justify-center">
              <LanguageToggle currentLanguage={lng} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
