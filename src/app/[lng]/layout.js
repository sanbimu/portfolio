import { Nanum_Myeongjo, Old_Standard_TT } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const myriad = localFont({
  src: [
    {
      path: "../../fonts/MyriadPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/MyriadPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/MyriadPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/MyriadPro-SemiboldIt.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-myriad",
});

const monkeg = localFont({
  src: "../../fonts/Monkeg-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-monkeg",
});

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-nanum",
});

const old = Old_Standard_TT({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-old",
});

export const metadata = {
  title: "Sanbimu",
  description: "Sanbimu's homepage",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`${myriad.variable} ${monkeg.variable} ${nanum.variable} ${old.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
