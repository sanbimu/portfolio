import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./utils/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(en|fr)/:path*"],
};
