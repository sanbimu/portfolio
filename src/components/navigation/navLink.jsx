"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";

export function NavLink({ href, text }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={cn(isActive ? "drop-shadow-active" : "hover:text-rust")}
      href={href}
    >
      {text}
    </Link>
  );
}
