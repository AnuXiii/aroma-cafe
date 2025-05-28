// import modal component
import { modal } from "./modal";

// create lightbox function for control gallery images lightbox
export function lightBox() {
	const galleryContainer = document.querySelector(".custom-grid-layout");
	galleryContainer?.addEventListener("click", (e) => {
		const validTarget = e.target.closest("figure");

		if (validTarget) {
			const img = validTarget.querySelector('[loading="lazy"]');
			modal(`<img src="${img.src}" alt="aroma cafe"/>`);
		}
	});
}
