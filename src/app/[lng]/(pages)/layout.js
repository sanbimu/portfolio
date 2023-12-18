import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "@/components/navigation/navLink";
import { LanguageToggle } from "@/components/navigation/languageToggle";

export default function Layout({ children, params: { lng } }) {
  const t = useTranslations();

  return (
    <>
      <div className="flex bg-background w-screen h-[120px] items-center justify-between fixed top-0 z-[100]">
        <div className="flex px-20 font-monkeg text-5xl text-brown">N</div>
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
      </div>
      {children}
    </>
  );
}
