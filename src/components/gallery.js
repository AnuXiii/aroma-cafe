import { galleryImages } from "../constants";
import { lightBox } from "../utils/lightBox";

// control gallery
export class Gallery extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div class="custom-grid-layout">
                ${galleryImages
									.map(
										(item) => `
                    <figure data-figure="true" data-col="${item.col}">
                        <img src="${item.imgSrc}" alt="aroma cafe" loading="lazy">     
                        <img src="/images/backgrounds/gold-border.png" class="gold-border"/>                       
                    </figure>
                    `
									)
									.join("")}         
            </div>
        `;
	}
}

customElements.define("c-gallery", Gallery);

// init lightbox
lightBox();
