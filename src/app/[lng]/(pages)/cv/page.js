import Section from "@/components/cv/sections";
import translations from "@/i18n/locales/en";
import { useTranslations } from "next-intl";

export default function Curriculum({ params: { lng } }) {
  const t = useTranslations();
  return (
    <div className="flex mt-[120px] lg:mt-[190px] pb-12 mx-8">
      <div className="flex flex-col justify-center gap-4">
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
