import { Old_Standard_TT, Average } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";

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

const average = Average({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-average",
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

export default async function RootLayout({ children, params: { lng } }) {
  const messages = (await import(`../../i18n/locales/${lng}.js`)).default;

  return (
    <html lang={lng}>
      <body
        className={`${myriad.variable} ${monkeg.variable} ${average.variable} ${old.variable} bg-background text-text`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
