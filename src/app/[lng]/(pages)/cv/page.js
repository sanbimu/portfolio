import SectionTitle from "@/components/cv/sectionTitle";
import { useTranslations } from "next-intl";

export default function Curriculum({ params: { lng } }) {
  const t = useTranslations();
  return (
    <div className="flex mt-[120px] lg:mt-[190px] mx-8">
      <SectionTitle />
    </div>
  );
}
