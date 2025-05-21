export class Button extends HTMLElement {
	connectedCallback() {
		const buttonHref = this.dataset.href || "javascript:void()";
		const buttonText = this.dataset.text || "تست";
		const buttonType = this.dataset.type || "button";

		buttonType === "button"
			? (this.innerHTML = `<button class="btn btn-primary">${buttonText}</button>`)
			: (this.innerHTML = `<a href="${buttonHref}" title="${buttonText}" class="btn btn-primary">${buttonText}</a>`);
	}
}

customElements.define("c-button", Button);
