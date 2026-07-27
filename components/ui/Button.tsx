import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

// Gumbi u jeziku tehničkog lista: ravni rubovi, bez sjena.
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-red text-white hover:opacity-90 active:opacity-80",
  secondary: "bg-ink text-white hover:bg-anthracite active:bg-anthracite",
  outline: "border border-ink text-ink hover:bg-neutral-100 active:bg-neutral-200",
  ghost: "text-ink hover:bg-neutral-100 active:bg-neutral-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, className = "", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-red disabled:opacity-50 disabled:cursor-not-allowed";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
