import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  className?: string;
  variant?: "default" | "horizontal" | "featured";
}

// Kartica kao list kataloga: ravni rubovi, tanka linija, bez sjena.
export default function Card({
  title,
  description,
  image,
  href,
  className = "",
  variant = "default",
}: CardProps) {
  const content = (
    <>
      {image && (
        <div
          className={`relative overflow-hidden ${
            variant === "horizontal" ? "w-1/3 flex-shrink-0" : "aspect-video"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div
        className={`p-6 ${variant === "horizontal" ? "flex-1" : ""} ${
          variant === "featured" ? "p-8" : ""
        }`}
      >
        <h3
          className={`font-bold tracking-tight text-ink group-hover:text-red transition-colors ${
            variant === "featured" ? "text-xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={`mt-2 text-neutral-600 line-clamp-3 ${
              variant === "featured" ? "text-base" : "text-sm"
            }`}
          >
            {description}
          </p>
        )}
        {href && (
          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400 group-hover:text-ink transition-colors">
            <span>Saznaj više</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  );

  const baseStyles =
    "group bg-white border border-hairline overflow-hidden transition-colors hover:border-neutral-400";

  const variantStyles = {
    default: "flex flex-col",
    horizontal: "flex flex-row",
    featured: "flex flex-col",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {content}
    </div>
  );
}
