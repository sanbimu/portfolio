import Section from "@/components/cv/sections";
import translations from "@/i18n/locales/en";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

export default function Curriculum({ params: { lng } }) {
  const t = useTranslations();
  return (
    <div
      className={cn(
        "flex w-[313px] mt-[120px] pb-12 mx-8",
        "md:mx-32 md:mt-[160px] md:w-[470px]",
        "lg:mx-20 lg:mt-[190px] lg:w-[570px]"
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center gap-4",
          "md:gap-8",
          "lg:gap-6"
        )}
      >
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
