import { useTranslations } from "next-intl";

export default function Skills({ contents }) {
  const t = useTranslations();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.skills.values.${i}`;
        return (
          <div key={i} className="flex flex-col font-myriad">
            <p>{t(values)}</p>
          </div>
        );
      })}
    </>
  );
}
