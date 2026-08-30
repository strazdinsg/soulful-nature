import { SETMORE_URL } from "@/data/booking";

/**
 * Booking button linking to Setmore.
 *
 * It is a plain link so it always works: if Setmore's script loads, it upgrades
 * the button into an overlay; if the script is blocked or fails, the link still
 * opens the booking page. Only one button per page may carry Setmore's
 * `Anywhere_button_iframe` id, since ids must be unique.
 */
export default function BookingButton({
  label,
  setmoreIframeId = false,
  className = "",
}: Readonly<{
  label: string;
  setmoreIframeId?: boolean;
  className?: string;
}>): JSX.Element {
  return (
    <a
      id={setmoreIframeId ? "Anywhere_button_iframe" : undefined}
      className={`anywhere-book-now-button inline-block bg-[#0e4726] hover:bg-[#0a3620] text-white font-semibold px-6 py-3 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8b67d] ${className}`}
      href={SETMORE_URL}
      data-booking-url={SETMORE_URL}
      data-new-tab="false"
    >
      {label}
    </a>
  );
}
