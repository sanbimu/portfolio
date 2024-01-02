import { cn } from "@/utils/cn";
import translations from "@/i18n/locales/en";
import Section from "@/components/cv/sections";
import BackgroundCV from "@/components/cv/backgroundCV";

export default function Curriculum() {
  return (
    <div className="flex relative h-dvh w-screen">
      <div
        className={cn(
          "flex absolute pt-[120px] z-50 w-[313px] mx-8 pb-12",
          "md:mx-32 md:pt-[160px] md:w-[470px]",
          "lg:mx-20 lg:pt-[190px] lg:w-[570px]"
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
      <BackgroundCV />
    </div>
  );
}
