import { renderNavTiles } from "./components/nav";

const container = document.getElementById("navTiles");
if (container) {
  container.innerHTML = renderNavTiles();
}