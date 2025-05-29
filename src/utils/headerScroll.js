// header scroll controller
export function headerScrollController() {
	const header = document.querySelector(".header");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY && currentScrollY > 112) {
			header.classList.add("-translate-y-full");
		} else {
			header.classList.remove("-translate-y-full");
		}

		lastScrollY = currentScrollY;
	});
}
