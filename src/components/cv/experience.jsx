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
            className="flex flex-col border-l-[0.5px] border-brown font-myriad"
          >
            <p className="text-lg font-semibold text-headers">
              {t(`${values}.title`)}
            </p>
            <p>{t(`${values}.startDate`)}</p>
            <p>{t(`${values}.endDate`)}</p>
            <p>{t(`${values}.place`)}</p>
            {content.tasks.map((_, i) => {
              const tasks = `${values}.tasks.${i}`;
              return <p key={i}>{t(tasks)}</p>;
            })}
          </div>
        );
      })}
    </>
  );
}
