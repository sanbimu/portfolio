"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Link } from "@/utils/navigation";

export function NavLink({ href, text }) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href);
  return (
    <Link
      className={cn(isActive ? "drop-shadow-active" : "hover:text-rust")}
      href={href}
    >
      {text}
    </Link>
  );
}
