import { site } from "@/lib/site";

type Variant = "light" | "dark" | "outline" | "ghost";

type BookButtonProps = {
  href?: string;
  label?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const variantClass: Record<Variant, string> = {
  light: "btn-book-light",
  dark: "btn-book-dark",
  outline: "btn-book-outline",
  ghost: "btn-book-ghost",
};

export function BookButton({
  href = site.whatsapp,
  label = "Agenda tu cita",
  variant = "dark",
  className = "",
  showArrow = true,
  external = true,
}: BookButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`btn-book ${variantClass[variant]} ${className}`}
    >
      <span>{label}</span>
      {showArrow ? <span className="btn-arrow" aria-hidden>→</span> : null}
    </a>
  );
}
