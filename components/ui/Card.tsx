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
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div
        className={`p-6 ${variant === "horizontal" ? "flex-1" : ""} ${
          variant === "featured" ? "p-8" : ""
        }`}
      >
        <h3
          className={`font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors ${
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
          <div className="mt-4 flex items-center gap-2 text-brand-500 font-medium text-sm">
            <span>Saznaj više</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  );

  const baseStyles =
    "group bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden transition-shadow hover:shadow-md";

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
