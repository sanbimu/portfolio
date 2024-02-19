import PageCV from "@/components/cv/pageCV";
import Navbar from "@/components/navigation/navbar";
import { useTranslations } from "next-intl";

export default function Home({ params: { lng } }) {
  const t = useTranslations();
  return (
    <>
      <Navbar />
      <PageCV />
    </>
  );
}
