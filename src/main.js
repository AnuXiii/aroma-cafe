import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/button";
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

// const res = await fetch("http://localhost:1337/api/menu-items?populate=*");
// const data = await res.json();
// const menu = data.data[0];

// console.log(menu);
