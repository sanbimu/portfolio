import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

export default function Education({ contents }) {
  const t = useTranslations();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.education.values.${i}`;
        return (
          <div
            key={i}
            className="flex flex-col gap-2 border-l-[0.5px] border-brown font-myriad pl-4"
          >
            <div className={cn("flex flex-col text-lg", "lg:text-base")}>
              <p className={cn("font-semibold text-headers", "lg:text-[17px]")}>
                {t(`${values}.title`)}
              </p>
              <p className="font-semibold italic text-text text-opacity-60">
                {t(`${values}.place`)}
              </p>
              <div className="flex text-brown pt-2">
                <p>
                  {"▸\u00A0\u00A0" +
                    t(`cv.section.education.graduated`) +
                    " " +
                    t(`${values}.endDate`)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
