import { useTranslation } from "../../../i18n";
import { navLinks } from "@/constants/navLinks";
import { NavLink } from "@/components/navigation/navLink";

export default async function Layout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="flex bg-background w-screen h-[120px] items-center justify-center fixed top-0 z-[100]">
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
      </div>
      {children}
    </>
  );
}
