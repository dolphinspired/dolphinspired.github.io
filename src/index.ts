import { getNextAvatar, getRandomAvatar } from "./components/avatars";
import { renderNavTiles } from "./components/nav";

const container = document.getElementById("navTiles");
if (container) {
  container.innerHTML = renderNavTiles();
}

let currentImage = getRandomAvatar();
const profileImage = document.getElementById("profile-image") as HTMLImageElement;
const sqek = document.getElementById("sqek") as HTMLAudioElement;
if (profileImage) {
  profileImage.src = currentImage.href;
  profileImage.onclick = () => {
    const nextImage = getNextAvatar(currentImage);
    currentImage = nextImage;
    profileImage.src = nextImage.href;
    if (sqek) {
      sqek.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };
}
