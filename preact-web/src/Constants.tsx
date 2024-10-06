import { TImageLink } from "types/TImageLink";
import { TypeLink } from "types/TypeLink";
import VkIcon from "assets/icons/vk.svg?react";
import TgIcon from "assets/icons/telegram.svg?react";

export const IS_MOBILE = window.innerWidth <= 1024;

export const header: TypeLink[] = [
  {
    title: "Вход",
    link: "/login",
  },
  {
    title: "Регистрация",
    link: "/signin",
  },
];

export const socials: TImageLink[] = [
  {
    icon: <TgIcon width={40} height={40} fill="#000" />,
    link: "https://web.telegram.org/",
  },
  {
    icon: <VkIcon width={40} height={40} fill="#000" />,
    link: "https://vk.com/",
  },
];
