import { spinLoader } from "./spinLoader";
import { lightBox } from "/src/utils/lightBox.js";
import { storage, databases, getImageUrl, BUCKET_ID, DB_ID } from "/src/appwriteClinet.js";

const GALLERY_COLS = import.meta.env.VITE_APPWRITE_GALLERY_COLS_ID;

export class Gallery extends HTMLElement {
	async connectedCallback() {
		let files = [];
		let colsData = [];
		try {
			const filesResponse = await storage.listFiles(BUCKET_ID);
			files = filesResponse.files.filter((file) => file.$id.startsWith("gallery-"));
			const colsResponse = await databases.listDocuments(DB_ID, GALLERY_COLS);
			colsData = colsResponse.documents;
		} catch (e) {
			this.innerHTML = `<div class="text-red-500 text-xl p-4">خطا در بارگذاری تصاویر گالری</div>`;
			return;
		}

		this.innerHTML = `
  <div class="custom-grid-layout">
    ${files
			.map((file) => {
				const matchingCol = colsData.find((col) => col.$id === file.$id);
				const colValue = matchingCol ? matchingCol.col : "3";
				//
				return `
          		<figure data-figure="true" data-col="${colValue}">
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
