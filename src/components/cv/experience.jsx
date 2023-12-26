import useIsMobile from "@/utils/useIsMobile";
import { useTranslations } from "next-intl";

export default function Experience({ contents }) {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.experience.values.${i}`;
        return (
          <div
            key={i}
            className="flex flex-col gap-2 border-l-[0.5px] border-brown font-myriad pl-4"
          >
            {isMobile ? (
              <div className="flex flex-col text-lg">
                <p className="font-semibold text-headers">
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
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold text-headers">
                    {t(`${values}.title`)}
                  </p>
                  <div className="text-text">
                    <p>{t(`${values}.startDate`)}</p>
                    <p>-</p>
                    <p>{t(`${values}.endDate`)}</p>
                  </div>
                </div>
                <p>{t(`${values}.place`)}</p>
              </div>
            )}

            <ul className="flex flex-col gap-2 pl-[12px] font-myriad text-text list-disc">
              {content.tasks.map((_, i) => {
                const tasks = `${values}.tasks.${i}`;
                return <li key={i}>&nbsp;{t(tasks)}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
