import github from "@/public/assets/images/icon-github.png";
import frontendmentor from "@/public/assets/images/icon-frontend-mentor.png";
import twitter from "@/public/assets/images/icon-twitter.png";
import linkedin from "@/public/assets/images/icon-linkedin.png";
import youtube from "@/public/assets/images/icon-youtube.png";
import facebook from "@/public/assets/images/icon-facebook.png";
import twitch from "@/public/assets/images/icon-twitch.png";
import devto from "@/public/assets/images/icon-devto.png";
import codewars from "@/public/assets/images/icon-codewars.png";
import freecodecamp from "@/public/assets/images/icon-freecodecamp.png";
import gitlab from "@/public/assets/images/icon-gitlab.png";
import hashnode from "@/public/assets/images/icon-hashnode.png";
import stackoverflow from "@/public/assets/images/icon-stack-overflow.png";

import githubSVG from "@/public/assets/images/icon-github.svg";
import frontendmentorSVG from "@/public/assets/images/icon-frontend-mentor.svg";
import twitterSVG from "@/public/assets/images/icon-twitter.svg";
import linkedinSVG from "@/public/assets/images/icon-linkedin.svg";
import youtubeSVG from "@/public/assets/images/icon-youtube.svg";
import facebookSVG from "@/public/assets/images/icon-facebook.svg";
import twitchSVG from "@/public/assets/images/icon-twitch.svg";
import devtoSVG from "@/public/assets/images/icon-devto.svg";
import codewarsSVG from "@/public/assets/images/icon-codewars.svg";
import freecodecampSVG from "@/public/assets/images/icon-freecodecamp.svg";
import gitlabSVG from "@/public/assets/images/icon-gitlab.svg";
import hashnodeSVG from "@/public/assets/images/icon-hashnode.svg";
import stackoverflowSVG from "@/public/assets/images/icon-stack-overflow.svg";

import { StaticImageData } from "next/image";

export type Social = {
  id: number;
  name: string;
  icon: StaticImageData;
  iconSVG: StaticImageData;
  bgColor: string;
  textColor: string;
};

export const SOCIALS: Social[] = [
  {
    id: 1,
    name: "GitHub",
    icon: github,
    iconSVG: githubSVG,
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: frontendmentor,
    iconSVG: frontendmentorSVG,
    bgColor: "#FFFFFF",
    textColor: "#333333",
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
    iconSVG: twitterSVG,
    bgColor: "#43B7E9",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: linkedin,
    iconSVG: linkedinSVG,
    bgColor: "#2D68FF",
    textColor: "#FFFFFF",
  },
  {
    id: 5,
    name: "YouTube",
    icon: youtube,
    iconSVG: youtubeSVG,
    bgColor: "#EE3939",
    textColor: "#FFFFFF",
  },
  {
    id: 6,
    name: "Facebook",
    icon: facebook,
    iconSVG: facebookSVG,
    bgColor: "#2442AC",
    textColor: "#FFFFFF",
  },
  {
    id: 7,
    name: "Twitch",
    icon: twitch,
    iconSVG: twitchSVG,
    bgColor: "#EE3FC8",
    textColor: "#FFFFFF",
  },
  {
    id: 8,
    name: "Dev.to",
    icon: devto,
    iconSVG: devtoSVG,
    bgColor: "#333333",
    textColor: "#FFFFFF",
  },
  {
    id: 9,
    name: "Codewars",
    icon: codewars,
    iconSVG: codewarsSVG,
    bgColor: "#8A1A50",
    textColor: "#FFFFFF",
  },
  {
    id: 10,
    name: "FreeCodeCamp",
    icon: freecodecamp,
    iconSVG: freecodecampSVG,
    bgColor: "#302267",
    textColor: "#FFFFFF",
  },
  {
    id: 11,
    name: "GitLab",
    icon: gitlab,
    iconSVG: gitlabSVG,
    bgColor: "#EB4925",
    textColor: "#FFFFFF",
  },
  {
    id: 12,
    name: "Hashnode",
    icon: hashnode,
    iconSVG: hashnodeSVG,
    bgColor: "#0330D1",
    textColor: "#000000",
  },
  {
    id: 13,
    name: "Stack Overflow",
    icon: stackoverflow,
    iconSVG: stackoverflowSVG,
    bgColor: "#EC7100",
    textColor: "#FFFFFF",
  },
];
