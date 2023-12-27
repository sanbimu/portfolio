import useIsMobile from "@/utils/useIsMobile";
import { useTranslations } from "next-intl";

export default function Languages({ contents }) {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.languages.values.${i}`;
        return (
          <div
            key={i}
            className="flex flex-col gap-2 border-l-[0.5px] border-brown font-myriad pl-4"
          >
            <div className="flex flex-col text-lg">
              <p className="font-semibold text-headers">
                {t(`${values}.language`)}
              </p>
              <p className=" text-brown pt-2">
                {"▸\u00A0\u00A0" + t(`${values}.level`)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
