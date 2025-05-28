import { testimonials } from "../constants";
import { initializeGlowEffect } from "../utils/glowEffect";

function renderStars(score) {
	let starElm = "";

	for (let i = 0; i < 5; i++) {
		if (i < score) {
			starElm += `<ion-icon name="star"></ion-icon>`;
		} else {
			starElm += `<ion-icon name="star-outline"></ion-icon>`;
		}
	}

	return `<div class="flex flex-row-reverse text-yellow text-2xl">${starElm}</div>`;
}

export class Testimonials extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <div class="testimonial-grid">
                ${testimonials
									.map(
										(card) => `
                  <div class="testimonial-card">
                    <div class="absolute inset-0 bg-[url('/images/backgrounds/black-dots.svg')] bg-cover rounded-lg z-[-1]"></div>                
                    <div class="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent rounded-lg z-[-1]"></div>   
                    <figure class="card-figure flex-center">
                        <i class="flex-center">
                            <ion-icon name="happy-outline"></ion-icon>
                        </i>
                    </figure>
                    <header class="card-header flex-between">
                            ${renderStars(card.score)}
                            <p>${card.customerHistory} سال - مشتری</p>
                    </header>
                    <p class="card-comment">
                        ${card.comment}
                    </p>
                    <h2 class="card-author">
                        ${card.author}                
                    </h2>
                  </div>  
                    `
									)
									.join("")}
            </div>
        `;

		// init glow effect
		initializeGlowEffect();
	}
}

customElements.define("c-testimonial", Testimonials);
