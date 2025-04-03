import github from "@/public/assets/images/icon-github.svg";
import frontendmentor from "@/public/assets/images/icon-frontend-mentor.svg";
import twitter from "@/public/assets/images/icon-twitter.svg";
import linkedin from "@/public/assets/images/icon-linkedin.svg";
import youtube from "@/public/assets/images/icon-youtube.svg";
import facebook from "@/public/assets/images/icon-facebook.svg";
import twitch from "@/public/assets/images/icon-twitch.svg";
import devto from "@/public/assets/images/icon-devto.svg";
import codewars from "@/public/assets/images/icon-codewars.svg";
import freecodecamp from "@/public/assets/images/icon-freecodecamp.svg";
import gitlab from "@/public/assets/images/icon-gitlab.svg";
import hashnode from "@/public/assets/images/icon-hashnode.svg";
import stackoverflow from "@/public/assets/images/icon-stack-overflow.svg";

import { StaticImageData } from "next/image";

export type Social = {
  id: number;
  name: string;
  icon: StaticImageData;
  bgColor: string;
  textColor: string;
};

export const SOCIALS: Social[] = [
  {
    id: 1,
    name: "GitHub",
    icon: github,
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: frontendmentor,
    bgColor: "#FFFFFF",
    textColor: "#333333",
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
    bgColor: "#43B7E9",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: linkedin,
    bgColor: "#2D68FF",
    textColor: "#FFFFFF",
  },
  {
    id: 5,
    name: "YouTube",
    icon: youtube,
    bgColor: "#EE3939",
    textColor: "#FFFFFF",
  },
  {
    id: 6,
    name: "Facebook",
    icon: facebook,
    bgColor: "#2442AC",
    textColor: "#FFFFFF",
  },
  {
    id: 7,
    name: "Twitch",
    icon: twitch,
    bgColor: "#EE3FC8",
    textColor: "#FFFFFF",
  },
  {
    id: 8,
    name: "Dev.to",
    icon: devto,
    bgColor: "#333333",
    textColor: "#FFFFFF",
  },
  {
    id: 9,
    name: "Codewars",
    icon: codewars,
    bgColor: "#8A1A50",
    textColor: "#FFFFFF",
  },
  {
    id: 10,
    name: "FreeCodeCamp",
    icon: freecodecamp,
    bgColor: "#302267",
    textColor: "#FFFFFF",
  },
  {
    id: 11,
    name: "GitLab",
    icon: gitlab,
    bgColor: "#EB4925",
    textColor: "#FFFFFF",
  },
  {
    id: 12,
    name: "Hashnode",
    icon: hashnode,
    bgColor: "#0330D1",
    textColor: "#000000",
  },
  {
    id: 13,
    name: "Stack Overflow",
    icon: stackoverflow,
    bgColor: "#EC7100",
    textColor: "#FFFFFF",
  },
];
