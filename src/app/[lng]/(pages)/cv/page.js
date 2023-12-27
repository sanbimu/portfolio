import Section from "@/components/cv/sections";
import translations from "@/i18n/locales/en";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

export default function Curriculum({ params: { lng } }) {
  const t = useTranslations();
  return (
    <div className={cn("flex mt-[120px] lg:mt-[190px] pb-12 mx-8", "lg:mx-20")}>
      <div className={cn("flex flex-col justify-center gap-4", "lg:gap-6")}>
        {Object.entries(translations.cv.section).map(
          ([key, section], index) => {
            return (
              <Section
                key={key}
                sectionKey={key}
                section={section}
                index={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
