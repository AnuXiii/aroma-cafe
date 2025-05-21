import { Header } from "./components/header";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { loadImages } from "./components/imgLoader";
import { loadAnimations } from "./utils/gsap";
import { HeaderSection } from "./components/headerSection";
import { menuNavigation } from "./components/menuNav";
import { displayMenuItems } from "./utils/menuController";

document.addEventListener("DOMContentLoaded", () => {
	loadImages();
	loadAnimations();
});
