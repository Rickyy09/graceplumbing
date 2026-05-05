import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTAs() {
  return (
    <>
      {/* WhatsApp floating */}
      <a
        href="https://wa.me/27817074661?text=Hi%20Grace%20Plumbing%2C%20I%20need%20a%20quote"
        target="_blank"
        rel="noopener"
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition hover:scale-105 md:bottom-6 md:right-6"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Sticky Call button (mobile) */}
      <a
        href="tel:0817074661"
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-gradient-emergency py-3.5 text-base font-bold text-emergency-foreground shadow-elegant md:hidden"
      >
        <Phone className="h-5 w-5 animate-pulse" /> Call Now · 081 707 4661
      </a>
    </>
  );
}
