import useIsMobile from "@/utils/useIsMobile";
import { useTranslations } from "next-intl";

export default function Education({ contents }) {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <>
      {contents.map((content, i) => {
        const values = `cv.section.education.values.${i}`;
        return (
          <div
            key={i}
            className="flex flex-col gap-2 border-l-[0.5px] border-brown font-myriad pl-4"
          >
            <div className="flex flex-col text-lg">
              <p className="font-semibold text-headers">
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
