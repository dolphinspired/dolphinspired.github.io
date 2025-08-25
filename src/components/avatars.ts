import { avatars } from "./images";

export const getRandomAvatar = (): URL => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};

export const getNextAvatar = (currentAvatar: URL): URL => {
  const currentIndex = avatars.indexOf(currentAvatar);
  const nextIndex = (currentIndex + 1) % avatars.length;
  return avatars[nextIndex];
};
