export interface Review {
  title: string;
  image: string;
  tag: "film" | "game" | "series" | string;
  rating: string;
  info: ReviewInfo;
  review?: string;
}

export interface ReviewInfo {
  year: string;
  genre: string;
  platform?: string;
  additional?: string;
  [key: string]: string | undefined;
}

export const reviews: Review[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    image: "https://miro.medium.com/1*XdoGGruC9N0bKdWpAIFdjw.jpeg",
    tag: "film",
    rating: "9.0",
    info: {
      year: "2001",
      genre: "Fantasy",
    },
  },
  {
    title: "Blue Protocol: Star Resonance",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3681810/bab705e2414243cd247a14a07b2d5490dcd2cefd/header.jpg?t=1760243884",
    tag: "game",
    rating: "6.5",
    info: {
      year: "2025",
      genre: "MMORPG",
      platform: "PC (Steam)",
    },
  },
  {
    title: "The SpongeBob SquarePants Movie",
    image: "",
    tag: "film",
    rating: "7.5",
    info: {
      year: "2004",
      genre: "Animated",
    },
  },
  {
    title: "Cyberpunk 2077",
    image: "",
    tag: "game",
    rating: "10",
    info: {
      year: "2020",
      genre: "RPG",
      platform: "PC (Steam)",
      additional: "Including datadisk: Phantom Liberty",
    },
  },
  {
    title: "SpongeBob SquarePants",
    image: "",
    tag: "series",
    rating: "9.0",
    info: {
      year: "1999",
      genre: "Animated",
    },
  },
  {
    title: "Comeback",
    image: "",
    tag: "series",
    rating: "9.5",
    info: {
      year: "2008",
      genre: "Comedy",
    },
  },
  {
    title: "Doom Eternal",
    image: "",
    tag: "game",
    rating: "9.2",
    info: {
      year: "2020",
      genre: "FPS",
      platform: "PC (Steam)",
      additional: "Difficulty: Nightmare (100%)",
    },
    review: "https://steamcommunity.com/id/misakbr2/recommended/782330/",
  },
  {
    title: "The Simpsons Movie",
    image: "",
    tag: "film",
    rating: "9.0",
    info: {
      year: "2007",
      genre: "Animated",
    },
  },
  {
    title: "The Pink Panther 2",
    image: "",
    tag: "film",
    rating: "7.0",
    info: {
      year: "2009",
      genre: "Comedy",
    },
  },
  {
    title: "The Pink Panther",
    image: "",
    tag: "film",
    rating: "7.5",
    info: {
      year: "2006",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 7: Mission to Moscow",
    image: "",
    tag: "film",
    rating: "6.0",
    info: {
      year: "1994",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 6: City Under Siege",
    image: "",
    tag: "film",
    rating: "6.7",
    info: {
      year: "1989",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 5: Assignment: Miami Beach",
    image: "",
    tag: "film",
    rating: "6.9",
    info: {
      year: "1988",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 4: Citizens on Patrol",
    image: "",
    tag: "film",
    rating: "7.0",
    info: {
      year: "1987",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 3: Back in Training",
    image: "",
    tag: "film",
    rating: "7.2",
    info: {
      year: "1986",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy 2: Their First Assignment",
    image: "",
    tag: "film",
    rating: "7.4",
    info: {
      year: "1985",
      genre: "Comedy",
    },
  },
  {
    title: "Police Academy",
    image: "",
    tag: "film",
    rating: "7.5",
    info: {
      year: "1984",
      genre: "Comedy",
    },
  },
];