import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Heading } from "./heading";

export function ProductView({ children, title, href, className }) {
  return (
    <Section>
      {/* Heading */}
      <div className="flex items-center justify-between mb-2">
        {title && <Heading>{title}</Heading>}

        {href && (
          <Link
            href={href}
            className="capitalize text-primary font-bold underline decoration-wavy"
          >
            see all
          </Link>
        )}
      </div>
      <div
        className={cn(
          "w-full grid gap-3 mt-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          className
        )}
      >
        {children}
      </div>
    </Section>
  );
}
