import pm1 from "/projects/P_1.webp";
import pm2 from "/projects/P_2.webp";
import pm3 from "/projects/P_3.webp";
import pm4 from "/projects/P_4.webp";

interface Project {
  id: string;
  order: number;
  title: string;
  version: string;
  desc: string;
  tech: string[];
  image: string | null;
  link: string;
  linkLabel: string;
  downloads: string | number | null;
  plays?: number | null;
  disabled?: boolean;
  status: "completed" | "development" | "planning";
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "tetris",
    order: 1,
    title: "Tetris",
    version: "v1.1",
    desc: "Probably everyone has heard of Tetris. So this is my version of Tetris with some interesting changes!",
    tech: ["Web Game", "Godot"],
    image: pm1,
    link: "https://themichalbr.github.io/mgames/Tetris.html",
    linkLabel: "PLAY ONLINE",
    downloads: null,
    plays: 739,
    status: "completed",
    featured: false,
  },
  {
    id: "snake",
    order: 3,
    title: "Snake",
    version: "v1.0.3",
    desc: "Classic Snake. Eat the food, grow the snake and try not to hit the walls or yourself!",
    tech: ["Game", "Python"],
    image: pm2,
    link: "https://github.com/TheMichalBr/snake_game",
    linkLabel: "DOWNLOAD GAME",
    downloads: null,
    status: "completed",
    featured: false,
  },
  {
    id: "rocketmod",
    order: 4,
    title: "NmS' Rocket Launcher Mod",
    version: "v1.0.3",
    desc: "This mod adds a rocket launcher to the game. You know what to do with it. Be nice to your friends!",
    tech: ["Game Mod", "Minecraft", "Java"],
    image: pm3,
    link: "https://modrinth.com/mod/nms-rocket-launcher-mod/",
    linkLabel: "DOWNLOAD MOD",
    downloads: "modrinth",
    status: "completed",
    featured: false,
  },
  {
    id: "websites",
    order: 5,
    title: "Custom Websites",
    version: "v1.0",
    desc: "I have created several custom websites of various types, ranging from simple ones to more advanced.",
    tech: ["Website", "HTML / CSS", "JS", "React"],
    image: pm4,
    link: "#footer",
    linkLabel: "CONTACT ME",
    downloads: null,
    disabled: false,
    status: "completed",
    featured: false,
  },
  {
    id: "aim_blueline",
    order: 6,
    title: "aim_blueline",
    version: "v0.21a",
    desc: "You just want to have a blast with your friends? Or have a thrilling duel to compare who is the better shooter?",
    tech: ["Game Map", "CS2", "Source 2 Editor"],
    image: null,
    link: "#",
    linkLabel: "DOWNLOAD MAP",
    downloads: null,
    disabled: true,
    status: "development",
    featured: false,
  },
  {
    id: "shooter",
    order: 7,
    title: "shooter game",
    version: "v0.02a",
    desc: "First person shooter game on unknown island. Game will be made in Unreal Engine!",
    tech: ["Game", "Unreal"],
    image: null,
    link: "#",
    linkLabel: "DOWNLOAD GAME",
    downloads: 100,
    disabled: true,
    status: "planning",
    featured: false,
  },
];