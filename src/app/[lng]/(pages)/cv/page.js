import { useTranslations } from "next-intl";

export default function Curriculum({ params: { lng } }) {
  const t = useTranslations();
  return (
    <div className="flex h-full w-full mt-[80px] lg:mt-[120px] mx-20">
      {/* <p className="font-monkeg">Hello this is my website.</p> */}
    </div>
  );
}
