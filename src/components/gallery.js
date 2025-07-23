import { spinLoader } from "./spinLoader";
import { lightBox } from "/src/utils/lightBox.js";
import { databases, getImageUrl, DB_ID } from "/src/appwriteClinet.js";
import { showError } from "./showError";
import { Query } from "appwrite";

const GALLERY_COLS = import.meta.env.VITE_APPWRITE_GALLERY_COLS_ID;

export class Gallery extends HTMLElement {
	async connectedCallback() {
		let files = [];
		try {
			const respone = await databases.listDocuments(DB_ID, GALLERY_COLS, [Query.limit(100)]);
			files = respone.documents;
		} catch (e) {
			this.innerHTML = showError("خطا هنگام بارگزاری اطلاعات، VPN خود را فعال کنید");
			return;
		}

		this.innerHTML = `
  			<div class="custom-grid-layout">
    ${files
			.map((file) => {
				return `
          		<figure data-figure="true" data-col="${file.col}">
            		<img src="${getImageUrl(file.$id)}" alt="aroma cafe" loading="lazy">
            		<img src="/images/backgrounds/gold-border.png" loading="lazy" class="gold-border"/>
          		</figure>
        	`;
			})
			.join("")}
  			</div>
			`;

		spinLoader();
		lightBox();
	}
}

customElements.define("c-gallery", Gallery);
