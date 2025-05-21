import { menuItems } from "../constants/index";

export class menuNavigation extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <nav class="menu">
            ${menuItems
							.map(
								(item) =>
									`
            <li class="menu-item">
                <button class="menu-button" title="${item.value}" aria-label="${item.value}" tabindex="0" data-value="${item.category}">
                    <figure>
                        <img src="${item.icon}" alt="${item.value}"/>
                        <figcaption>
                            ${item.value}
                        </figcaption>
                    </figure>
                </button>
            </li>
            `
							)
							.join("")}
            </nav>
        `;
	}
}

customElements.define("c-menu", menuNavigation);
