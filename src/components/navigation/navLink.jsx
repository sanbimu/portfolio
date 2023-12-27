"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Link } from "@/utils/navigation";

export function NavLink({ href, text, onClick }) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href);
  return (
    <Link
      className={cn(
        "font-average text-text",
        "lg:text-lg",
        isActive
          ? "drop-shadow-active-rust text-rust lg:text-text lg:drop-shadow-active"
          : "hover:text-rust"
      )}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
