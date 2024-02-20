import { cn } from "@/utils/cn";
import translations from "@/i18n/locales/en";
import Section from "@/components/cv/sections";
import Image from "next/image";
import BackgroundCV from "./backgroundCV";

export default function PageCV() {
  return (
    <div className="flex relative h-dvh w-screen">
      <div
        className={cn(
          "flex flex-col pt-[120px] z-50 mx-auto",
          "lg:flex-row lg:mx-0"
        )}
      >
        <div
          className={cn(
            "flex justify-center pb-10",
            "lg:order-1 lg:pt-[100px]"
          )}
        >
          <div className="flex flex-col gap-6 lg:gap-10 lg:pl-24 xl:pl-48 lg:pt-[62px]">
            <p className="font-monkeg text-3xl text-headers text-opacity-60 lg:text-[40px]">
              &nbsp;curriculum vitae&nbsp;
            </p>
            <div className="flex items-start gap-3 lg:gap-6">
              <Image
                src="/icons/Ornament.svg"
                alt="ornament"
                height={48}
                width={48}
                className="pt-16"
              />
              <Image
                src="/photos/meCV.jpg"
                alt="me"
                height={2048}
                width={1365}
                className={cn(
                  "rounded-[50px] border border-rust p-1 h-[250px] w-[163px]",
                  " lg:rounded-[80px] lg:h-[344px] lg:w-[225px]"
                )}
              />
              <Image
                src="/icons/Ornament.svg"
                alt="ornament"
                height={48}
                width={48}
                className="pt-16"
              />
            </div>
          </div>
        </div>
        <div className={cn("flex pb-12", "md:mx-32", "lg:mx-20 lg:w-[570px]")}>
          <div
            className={cn(
              "flex flex-col justify-center gap-4",
              "md:gap-8",
              "lg:gap-6 lg:justify-start lg:pt-[100px]"
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
      </div>
      <BackgroundCV />
    </div>
  );
}
