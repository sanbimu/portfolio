import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

export default function Experience({ contents }) {
  const t = useTranslations();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.experience.values.${i}`;
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
                <p>▸&nbsp;&nbsp;</p>
                <p>{t(`${values}.startDate`)}</p>
                <p>&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                <p>{t(`${values}.endDate`)}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 pl-[12px] font-myriad text-text list-disc">
              {content.tasks.map((_, i) => {
                const tasks = `${values}.tasks.${i}`;
                return (
                  <li key={i} className="pl-1">
                    {t(tasks)}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
