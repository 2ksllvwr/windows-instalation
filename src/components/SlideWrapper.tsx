import React from "react";

interface SlideWrapperProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: "next" | "prev" | null;
}

export default function SlideWrapper({ children, isActive, direction }: SlideWrapperProps) {
  const base =
    "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out";

  let cls = base;
  if (isActive) {
    cls += " opacity-100 translate-x-0 z-10";
  } else if (direction === "next") {
    cls += " opacity-0 -translate-x-full z-0";
  } else {
    cls += " opacity-0 translate-x-full z-0";
  }

  return <div className={cls}>{children}</div>;
}
