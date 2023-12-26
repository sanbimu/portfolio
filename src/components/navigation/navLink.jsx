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
        isActive
          ? "drop-shadow-active text-rust lg:text-text"
          : "hover:text-rust"
      )}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
