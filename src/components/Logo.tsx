import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className="font-display text-3xl font-extrabold tracking-tight">
        <span className="text-primary">S</span>
        <span className={inverted ? "text-navy-foreground" : "text-navy"}>A</span>
        <span className="text-primary">U</span>
      </span>
      <span
        className={`font-display text-sm font-semibold tracking-[0.18em] ${
          inverted ? "text-navy-foreground" : "text-navy"
        }`}
      >
        INGENIERÍA
      </span>
      <span className="mt-1 text-[9px] font-medium tracking-wide text-gold">
        innovación, sostenibilidad y economía
      </span>
    </Link>
  );
}