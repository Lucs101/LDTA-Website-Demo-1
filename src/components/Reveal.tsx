import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, isVisible } = useReveal();
  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Comp>
  );
}
