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
    image: new URL("assets/images/bluesky.png", import.meta.url),
    label: "@nuffle.me on Bluesky",
  },
  {
    name: "Telegram",
    href: "https://t.me/dolphinspired",
    image: new URL("assets/images/telegram.png", import.meta.url),
    label: "@dolphinspired on Telegram",
  },
  {
    name: "Toyhouse",
    href: "https://toyhou.se/25234327.nuffle-emberdrake",
    image: new URL("assets/images/toyhouse.png", import.meta.url),
    label: "Nuffle on Toyhouse",
  },
  {
    name: "Furtrack",
    href: "https://www.furtrack.com/index/character:nuffle",
    image: new URL("assets/images/furtrack.png", import.meta.url),
    label: "Nuffle on Furtrack",
  },
  {
    name: "Github",
    href: "https://github.com/dolphinspired",
    image: new URL("assets/images/github.png", import.meta.url),
    label: "dolphinspired on Github",
  },
];

// This function returns the HTML string for the nav tiles
function renderNavTiles(config: NavTileConfig[]): string {
  return config
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

// Example usage: insert into a container
const container = document.getElementById("navTiles");
if (container) {
  container.innerHTML = renderNavTiles(navTiles);
}