import { cdn } from "./cdn";

type NavTileConfig = {
  name: string;
  label: string;
  href: string;
  image: URL;
};

const navTiles: NavTileConfig[] = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/nuffle.me",
    image: cdn("site/logo/bluesky.png"),
    label: "@nuffle.me on Bluesky",
  },
  {
    name: "Telegram",
    href: "https://t.me/dolphinspired",
    image: cdn("site/logo/telegram.png"),
    label: "@dolphinspired on Telegram",
  },
  {
    name: "Toyhouse",
    href: "https://toyhou.se/25234327.nuffle-emberdrake",
    image: cdn("site/logo/toyhouse.png"),
    label: "Nuffle on Toyhouse",
  },
  {
    name: "Furtrack",
    href: "https://www.furtrack.com/index/character:nuffle",
    image: cdn("site/logo/furtrack.png"),
    label: "Nuffle on Furtrack",
  },
  {
    name: "Github",
    href: "https://github.com/dolphinspired",
    image: cdn("site/logo/github.png"),
    label: "dolphinspired on Github",
  },
];

export const renderNavTiles = (): string => {
  return navTiles
    .map(
      (item) => `
<div class="page-item-wrap relative">
  <div class="page-item flex-both-center absolute"></div>
  <a target="_blank" class="page-item-each py-10 flex-both-center" href="${item.href}">
    <img class="link-each-image" src="${item.image}" alt="${item.name}"/>
    <span class="item-title text-center">${item.label}</span>
  </a>
</div>
`
    )
    .join("");
}
