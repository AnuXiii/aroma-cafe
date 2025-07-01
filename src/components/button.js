export class Button extends HTMLElement {
	connectedCallback() {
		const buttonHref = this.dataset.href || "javascript:void()";
		const buttonText = this.dataset.text || "تست";
		const buttonType = this.dataset.type || "button";
		const buttonClass = this.dataset.class || "";

		buttonType === "button"
			? (this.innerHTML = `<button  class="btn btn-primary ${buttonClass}">${buttonText}</button>`)
			: (this.innerHTML = `<a href="${buttonHref}" title="${buttonText}" class="btn btn-primary">${buttonText}</a>`);
	}
}

customElements.define("c-button", Button);

// this web component returned a button tag or link tag element with different types - href - classes and more...
