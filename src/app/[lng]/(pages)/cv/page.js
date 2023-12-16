import { useTranslation } from "../../../../i18n";

export default async function Curriculum({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return <div className="bg-background w-screen h-screen "> hello</div>;
}
