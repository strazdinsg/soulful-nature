export type PageCardConfig = {
  id: number;
  translationKey: string;
  altName: string;
  imgSrc: string;
  url: string;
};

export const pages: PageCardConfig[] = [
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
