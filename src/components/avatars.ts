import { cdn } from "./cdn";

const avatars: URL[] = [
  cdn("site/avatar/avatar1.png"),
  cdn("site/avatar/avatar2.png"),
  cdn("site/avatar/avatar3.png"),
  cdn("site/avatar/avatar4.png"),
  cdn("site/avatar/avatar5.png"),
  cdn("site/avatar/avatar6.png"),
  cdn("site/avatar/avatar7.png"),
  cdn("site/avatar/avatar8.png"),
  cdn("site/avatar/avatar9.png"),
];

export const getRandomAvatar = (): URL => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};

export const getNextAvatar = (currentAvatar: URL): URL => {
  const currentIndex = avatars.indexOf(currentAvatar);
  const nextIndex = (currentIndex + 1) % avatars.length;
  return avatars[nextIndex];
};
