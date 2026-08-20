import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo-sau.png.asset.json";
import { COMPANY } from "@/lib/site";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${COMPANY.brand} — inicio`} className="inline-flex shrink-0">
      <img
        src={logo.url}
        alt={`${COMPANY.brand} — ${COMPANY.slogan}`}
        width={637}
        height={362}
        className={`${className} w-auto`}
      />
    </Link>
  );
}

export function LogoInverted({ className = "h-14" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt={`${COMPANY.brand} — ${COMPANY.slogan}`}
      width={637}
      height={362}
      loading="lazy"
      className={`${className} w-auto rounded-md bg-background p-2`}
    />
  );
}
