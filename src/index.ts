import { getNextAvatar, getRandomAvatar } from "./components/avatars";
import { renderNavTiles } from "./components/nav";
import { clearQueryParam, getQueryParam, storeQueryParams } from "./components/qstr";

const onload = () => {
  storeQueryParams();
  const metrics = (window as any).umami;

  const navTilesContainer = document.getElementById("navTiles");
  if (navTilesContainer) {
    navTilesContainer.innerHTML = renderNavTiles();
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

      if (metrics) {
        metrics.track("avatar-squeaked");
      }
    };
  }

  const queryParamFrom = getQueryParam("from");
  if (metrics && queryParamFrom) {
    metrics.track(`from.${queryParamFrom}`);
    clearQueryParam("from");
  }
}

if (document) {
  document.addEventListener("DOMContentLoaded", onload);
}