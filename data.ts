import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>React.js</b>   and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: " A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning user interface designer using libraries and framework like <b>TailwindCss</b>  and  <b>Bootstrap</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Swagger",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "vsCode",
    level: "85",
  },

];

export const projects: IProject[] = [
  {
    name: "Weather Application",
    image_path: "/images/Weather-App.png",
    deployed_url: "https://weather-six-lovat.vercel.app/",
    github_url: "https://github.com/ShubhamV-30/weather",
    category: ["react", "node"],
    description:
      "Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.",
    key_techs: ["React", "Bootstrap", "OpenWeather-api"],
  },

  {
    name: "Blog App",
    image_path: "/images/Blog.png",
    deployed_url: "https://blog-zeta-amber-39.vercel.app/",
    github_url: "https://github.com/ShubhamV-30/Blog",
    category: ["react"],
    description:
      "Its a blog app which shows personal information and showcase skills.",
    key_techs: [
      "Next.js",

    ],
  },
  {
    name: "Netflix-Clone",
    image_path: "/images/Netflix-Next.js.png",
    deployed_url: "https://netflix-clone-one-liard.vercel.app/auth",
    github_url: "https://github.com/ShubhamV-30/Netflix-Clone",
    category: ["react", "mongo"],
    description:
      "a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, etc.",
    key_techs: [
      "Next.js",

    ],
  },
  {
    name: "Weather Application",
    image_path: "/images/Weather-App.png",
    deployed_url: "https://weather-six-lovat.vercel.app/",
    github_url: "https://github.com/ShubhamV-30/weather",
    category: ["react"],
    description:
      "Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.",
    key_techs: ["React", "Bootstrap", "OpenWeather-api"],
  },

  {
    name: "Blog App",
    image_path: "/images/Blog.png",
    deployed_url: "https://blog-zeta-amber-39.vercel.app/",
    github_url: "https://github.com/ShubhamV-30/Blog",
    category: ["react"],
    description:
      "Its a blog app which shows personal information and showcase skills.",
    key_techs: [
      "Next.js",

    ],
  },
  {
    name: "Netflix-Clone",
    image_path: "/images/Netflix-Next.js.png",
    deployed_url: "https://netflix-clone-one-liard.vercel.app/auth",
    github_url: "https://github.com/ShubhamV-30/Netflix-Clone",
    category: ["react", "mongo"],
    description:
      "a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, etc.",
    key_techs: [
      "Next.js",
      "mobgoDb",
      "Tailwind css"

    ],
  },

];
