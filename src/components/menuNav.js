import { spinLoader } from "./spinLoader";
import { databases, getImageUrl, DB_ID } from "../appwriteClinet";

const MENUS = import.meta.env.VITE_APPWRITE_MENU_ID;

export class menuItems extends HTMLElement {
	async connectedCallback() {
		let menus = [];

		try {
			const items = await databases.listDocuments(DB_ID, MENUS);
			menus = items.documents;
		} catch (err) {
			this.innerHTML = `
			<p class="text-rose-500">Failed to fetch data</p>
			`;
			return;
		}

		this.innerHTML = `
            <nav class="menu">
            ${menus
							.map(
								(item) =>
									`
            <li class="menu-item">
                <button class="menu-button" title="${item["menu-title"]}" aria-label="${
										item["menu-title"]
									}" tabindex="0" data-value="${item["menu-category-name"]}">
				<figure data-figure="true">
    				<img src="${getImageUrl(item.$id)}" alt="${item["menu-title"]}" loading="lazy" />
    				<figcaption>
        				${item["menu-title"]}
    				</figcaption>
				</figure>
                </button>
            </li>
            `
							)
							.join("")}
            </nav>
        `;
		spinLoader();
	}
}

customElements.define("c-menu", menuItems);
