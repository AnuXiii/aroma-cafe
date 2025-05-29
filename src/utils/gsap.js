import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function loadAnimations() {
	// home page - cafe cards
	const cafeProperties = document.querySelectorAll("[data-cafe-properties]");
	if (cafeProperties.length) {
		gsap.utils.toArray(cafeProperties).forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.4,
					delay: index * 0.2,
					ease: "power1.out",
					scrollTrigger: {
						trigger: card,
						start: "top 90%",
						toggleActions: "play reverse play reverse",
					},
				}
			);
		});
	}

	// home page - about section
	const aboutFig = document.querySelector(".about-fig");
	const aboutText = document.querySelector(".about-text");
	const aboutCafe = aboutText?.querySelector("figure");

	if (aboutFig) {
		gsap.fromTo(
			aboutFig,
			{
				opacity: 0,
				x: 20,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.6,
				ease: "power1.out",
				scrollTrigger: {
					trigger: aboutFig,
					start: "top 80%",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}

	if (aboutText) {
		gsap.fromTo(
			aboutText,
			{
				opacity: 0,
				x: -20,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.6,
				ease: "power1.out",
				scrollTrigger: {
					trigger: aboutText,
					start: "top 80%",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}

	if (aboutCafe) {
		gsap.fromTo(
			aboutCafe,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.3,
				ease: "power1.out",
				scrollTrigger: {
					trigger: aboutCafe,
					start: "top 80%",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}

	// menu page - header section animation
	const headerSectionChilds = document.querySelectorAll(".header-section-text *");
	if (headerSectionChilds.length) {
		gsap.utils.toArray(headerSectionChilds).forEach((item, index) => {
			gsap.fromTo(
				item,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: index * 0.2,
					ease: "circ.out",
					scrollTrigger: {
						trigger: item,
						start: "top 80%",
						toggleActions: "play reverse play reverse",
					},
				}
			);
		});
	}
}
