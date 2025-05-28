import { Header } from "./components/header";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { loadImages } from "./components/imgLoader";
import { loadAnimations } from "./utils/gsap";
import { HeaderSection } from "./components/headerSection";
import { menuNavigation } from "./components/menuNav";
import { displayMenuItems } from "./utils/menuController";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { CustomInput } from "./utils/inputGenerator";
import { Select } from "./components/customSelect";
import { formController } from "./utils/formControl";

document.addEventListener("DOMContentLoaded", () => {
	loadImages();
	loadAnimations();
});
