import { menu } from "../constants/menu";

const menuNavigation = document.querySelector(".menu");
const menuItemsContaienr = document.getElementById("menu-grid");

export function displayMenuItems(category) {
	menuItemsContaienr.innerHTML = "";
	const filteredItems = menu.filter((item) => item.category === category);

	filteredItems.forEach((item, index) => {
		const el = document.createElement("div");
		el.classList.add("menu-item-box", "fade-up");
		el.style.animationDelay = `${index * 100}ms`;
		el.innerHTML = `
			<div class="menu-item-box-bg"></div>
			<div class="menu-item-box-color"></div>
            <figure data-figure="true">
                <img src="${item.image}" alt="${item.name}" loading="lazy"/>
                <figcaption>
                    <p class="item-name">${item.name}</p>
				</figcaption>
			</figure>
			<ul class="item-info-list ${item.dobule ? "justify-between pt-6" : "justify-end pt-3"}">
					<li class="item-info">
						<span>${item.dobule ? "تک شات" : ""}</span>
						<span>${item.price} <small>تـومان</small></span>
					</li>
					${
						item.dobule
							? `<li class="item-info">
						<span>دبل شات</span>
						<span>${item.dobule} <small>تـومان</small></span>
					</li>`
							: ""
					}
			</ul>
        `;
		menuItemsContaienr.appendChild(el);
	});
}

menuNavigation?.addEventListener("click", (e) => {
	const validTarget = e.target.closest(".menu-button");

	if (validTarget) {
		if (menuNavigation.querySelector(".active")) {
			menuNavigation.querySelector(".active").classList.remove("active");
			menuNavigation.scrollIntoView();
		}

		validTarget.classList.add("active");

		const category = validTarget.dataset.value;

		displayMenuItems(category);
	}
});

window.addEventListener("DOMContentLoaded", () => {
	menuNavigation?.querySelectorAll(".menu-item .menu-button")[0].click();
});
