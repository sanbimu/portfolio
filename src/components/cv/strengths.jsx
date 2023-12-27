import { useTranslations } from "next-intl";

export default function Strengths({ contents }) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2 border-l-[0.5px] border-brown ">
      {contents.map((content, i) => {
        const values = `cv.section.strengths.values.${i}`;
        return (
          <div
            key={i}
            className="font-myriad text-text text-opacity-60 text-lg pl-4"
          >
            <p>{"▸\u00A0\u00A0" + t(values)}</p>
          </div>
        );
      })}
    </div>
  );
}
