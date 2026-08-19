import { WhatsappGlyph } from "./SiteHeader";
import { whatsappLink } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappGlyph className="h-7 w-7" />
    </a>
  );
}