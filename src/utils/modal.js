export function modal(content) {
	const div = document.createElement("div");
	div.className = "modal";
	div.innerHTML = `
        <div class="modal-content opacity-0 scale-95 fade-up wrapper">
            <button class="close-modal flex-center" title="close-modal" aria-label="close-modal">
                <ion-icon name="close-outline"></ion-icon>
            </button>
            <div class="content-inner">
                ${content}
            </div>
        </div>
    `;

	document.body.appendChild(div);
	document.body.classList.add("overflow-hidden");

	div.addEventListener("click", (e) => {
		if (!e.target.closest(".content-inner")) {
			document.body.classList.remove("overflow-hidden");
			div.classList.remove("fade-up");
			div.classList.add("fade-out");
			div.addEventListener("animationend", () => {
				div.remove();
			});
		}
	});
}
