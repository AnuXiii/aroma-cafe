export function modal(content) {
	const div = document.createElement("div");
	div.className = "modal";
	div.innerHTML = `
        <div class="modal-content wrapper">
            <button class="close-modal flex-center" title="close-modal" aria-label="close-modal">
                <ion-icon name="close-outline"></ion-icon>
            </button>
            <div class="content-inner opacity-0 translate-y-full">
                ${content}
            </div>
        </div>
    `;

	document.body.appendChild(div);
	document.body.classList.add("overflow-hidden");
	div.querySelector(".content-inner").classList.add("fade-up");

	div.addEventListener("click", (e) => {
		if (!e.target.closest(".content-inner")) {
			document.body.classList.remove("overflow-hidden");
			div.querySelector(".content-inner").classList.remove("fade-up");
			div.remove();
		}
	});
}
