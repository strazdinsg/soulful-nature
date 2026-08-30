export type PageCardConfig = {
  id: number;
  translationKey: string;
  altName: string;
  imgSrc: string;
  url: string;
  /** Show a "book session" button on the card, alongside the "learn more" link. */
  bookable?: boolean;
};

export const pages: PageCardConfig[] = [
  {
    id: 4,
    translationKey: "nadaAcupuncture",
    altName: "NADA ear acupuncture",
    imgSrc: "nada.jpg",
    url: "/nada",
    bookable: true,
  },
  {
    id: 1,
    translationKey: "relaxWithIn",
    altName: "",
    imgSrc: "sound.jpg",
    url: "/sound",
  },
  {
    id: 2,
    translationKey: "cacaoMindfulness",
    altName: "Cacao Mindfulness Practice",
    imgSrc: "cacao-circle.jpg",
    url: "/cacao",
  },
  {
    id: 3,
    translationKey: "cacaoAndMe",
    altName: "",
    imgSrc: "cacao-and-me.jpg",
    url: "/about",
  },
];
