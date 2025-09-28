import { zapfino } from "@/app/fonts";

export default function WelcomeSection(): JSX.Element {
  return (
    <div className="w-full h-[180px] bg-[#b8b67d] flex items-center justify-center">
      <p
        className={`mt-10 lg:mt-12 text-[#0e4726] text-center text-lg lg:text-2xl px-6 leading-loose mx-8 ${zapfino.className}`}
      >
        Welcome to a space to pause, reflect, and reconnect with clarity and
        calm…
      </p>
    </div>
  );
}
