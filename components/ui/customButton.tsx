"use client";

import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

interface CustomButtonProps {
  className?: string;
  children: React.ReactNode;
  variant: "dark" | "light";
  icon: React.ReactNode;
  href?: string;
}

export default function CustomButton({
  className,
  variant,
  children,
  icon,
  href,
}: CustomButtonProps) {
  const lenis = useLenis();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      lenis?.scrollTo(href);
    } else {
      window.location.href = href;
    }
  };
  return (
    <Link
      onClick={(e) => handleClick(e, href || "/")}
      href={href || "/"}
      target="_blank"
    >
      <Button
        className={cn(
          "group flex h-auto w-auto gap-[20px] rounded-full py-[6px] pl-[26px] pr-[6px] text-[14px] transition-all xl:text-[16px]",
          className,
          {
            "bg-white text-primary": variant === "light",
            "bg-primary text-white hover:bg-primary/90": variant === "dark",
          },
        )}
      >
        <span className="font-medium">{children}</span>
        <div
          className={cn(
            "flex h-[32px] w-[32px] items-center justify-center rounded-full p-[8px] transition-all group-hover:scale-105 lg:h-[36px] lg:w-[36px]",
            {
              "bg-accent text-white": variant === "light",
              "bg-white text-accent": variant === "dark",
            },
          )}
        >
          {icon}
        </div>
      </Button>
    </Link>
  );
}
