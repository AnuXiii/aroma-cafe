export class CustomInput extends HTMLElement {
	connectedCallback() {
		const type = this.dataset.type || "text";
		const placeholder = this.dataset.placeholder || "";
		const id = this.dataset.id || "";
		const name = this.dataset.name || "";

		this.innerHTML = `
            ${
							type === "textarea"
								? `<textarea 
                    id="${id}"
                    name="${name}"
                    required
                    tabindex="0"
                    data-placeholder="${placeholder}"
                    class="input"
                ></textarea>`
								: `<input 
                    type="${type}" 
                    id="${id}" 
                    name="${name}" 
                    required
                    tabindex="0"
                    data-placeholder="${placeholder}"
                    class="input"
                />`
						}
        `;
	}
}

customElements.define("c-input", CustomInput);

// this code scope control label's animations on inputs element when user focus on it
const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
	const div = document.createElement("div");
	div.className = "label";
	div.textContent = input.dataset.placeholder;
	div.innerHTML = div.textContent
		.split("")
		.map((text, index) => `<span style="transition-delay:${index * 30}ms">${text}</span>`)
		.join("");

	input.parentNode.appendChild(div);

	input.addEventListener("focus", () => {
		input.nextElementSibling.classList.add("active");
	});

	input.addEventListener("blur", () => {
		if (input.value.trim() !== "") {
			input.nextElementSibling.classList.add("active");
		} else {
			input.nextElementSibling.classList.remove("active");
		}
	});
});
