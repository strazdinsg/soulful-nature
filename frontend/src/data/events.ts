export type EventSource = "cacao" | "sound";

export type Event = {
  date: string;
  time: string;
  signUpUrl: string;
  /**
   * Cacao vs sound — used on the home page merged event list so we can:
   * pick the right “date not yet set” translation when `signUpUrl` is empty, and
   * build stable unique React `key`s (`source` + date + time).
   */
  source?: EventSource;
};

export const cacaoCircleEvents = [
  {
    date: "2025-02-11",
    time: "18:00",
    signUpUrl: "https://forms.gle/KixC64Ny9M8ey2kXA",
  },
  {
    date: "2025-03-04",
    time: "18:00",
    signUpUrl: "https://forms.gle/Pxx1ndHtSPgoQHYWA",
  },
  {
    date: "2025-04-08",
    time: "18:00",
    signUpUrl: "https://forms.gle/yQEjYiBEZMHF1gfw7",
  },
  {
    date: "2025-05-06",
    time: "18:00",
    signUpUrl: "https://forms.gle/GekVRvKnVjAzzvxF8",
  },
  {
    date: "2025-06-03",
    time: "18:00",
    signUpUrl: "https://forms.gle/VKxYGC4GvFsdQjzX9",
  },
  {
    date: "2025-07-01",
    time: "18:00",
    signUpUrl: "https://forms.gle/MKahR3RQg4jbG2J66",
  },
  {
    date: "2025-08-05",
    time: "18:00",
    signUpUrl: "https://forms.gle/uNioYkECDT3jym5m9",
  },
  {
    date: "2025-09-09",
    time: "18:00",
    signUpUrl: "https://forms.gle/41mierSGTupT7wDQ6",
  },
  {
    date: "2025-10-14",
    time: "18:00",
    signUpUrl: "https://forms.gle/mthRm3z6SJFTtb696",
  },
  {
    date: "2025-11-11",
    time: "18:00",
    signUpUrl: "https://forms.gle/VUtLny5fnyQCjMSq7",
  },
  {
    date: "2025-12-02",
    time: "18:00",
    signUpUrl: "https://forms.gle/F2dwQ1x7qh62LPjH7",
  },
  {
    date: "2026-01-13",
    time: "18:00",
    signUpUrl: "https://forms.gle/ipNNwLpoScJxC6PW8",
  },
  {
    date: "2026-02-11",
    time: "18:00",
    signUpUrl: "https://forms.gle/jpBrHCUJ34tDzY6r9",
  },
  {
    date: "2026-03-11",
    time: "18:00",
    signUpUrl: "https://forms.gle/fp4utosGaF8gYV4A7",
  },
  {
    date: "2026-04-15",
    time: "18:00",
    signUpUrl: "https://forms.gle/hrgE2bnHSjTzvkzF6",
  },
];

/** Relax WithIn / sound bath sessions (add real dates and sign-up URLs when ready). */
export const soundBathEvents: Event[] = [
  {
    date: "2026-05-20",
    time: "18:00",
    signUpUrl: "https://forms.gle/AzgyLnfysxnMBXgZA",
  },
  {
    date: "2026-06-17",
    time: "18:00",
    signUpUrl: "https://forms.gle/FA3S4Y6ppR7GwxQSA",
  },
];

/** Cacao + Relax WithIn events, sorted by date (and time) for the landing page sidebar. */
export const mergedCacaoAndSoundEvents: Event[] = [
  ...cacaoCircleEvents.map((e) => ({ ...e, source: "cacao" as const })),
  ...soundBathEvents.map((e) => ({ ...e, source: "sound" as const })),
].sort((a, b) => {
  const byDate = a.date.localeCompare(b.date);
  return byDate !== 0 ? byDate : a.time.localeCompare(b.time);
});
