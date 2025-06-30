export function spinLoader() {
	const imgLoader = document.querySelectorAll("[data-figure] [loading=lazy]");

	if (imgLoader.length) {
		imgLoader.forEach((img) => {
			const spinLoader = document.createElement("div");
			spinLoader.className = "spin-loader";
			spinLoader.innerHTML = `<div class="animate-spin"></div>`;

			const parent = img.closest("[data-figure]");
			if (!parent) return;

			parent.appendChild(spinLoader);

			function removeSpinner() {
				spinLoader.remove();
			}

			if (img.complete) {
				removeSpinner();
			} else {
				img.addEventListener("load", removeSpinner);
			}
		});
	}
}
