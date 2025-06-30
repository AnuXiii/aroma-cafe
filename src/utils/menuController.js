import { modal } from "./modal";
import { spinLoader } from "../components/spinLoader";
import { databases, getImageUrl, DB_ID } from "../appwriteClinet";

const ITEMS = import.meta.env.VITE_APPWRITE_ITEMS_ID;

const menuItemsContaienr = document.getElementById("menu-grid");

export async function displayMenuItems(category) {
	let menuItems = [];

	try {
		const items = await databases.listDocuments(DB_ID, ITEMS);
		menuItems = items.documents;
	} catch (err) {
		menuItemsContaienr.innerHTML = `<p class="text-rose-500">Failed to fetch data</p>`;
		return;
	}

	menuItemsContaienr.innerHTML = "";
	const filteredItems = menuItems.filter((item) => item.category === category);

	if (filteredItems.length) {
		filteredItems.forEach((item, index) => {
			const el = document.createElement("div");
			el.classList.add("menu-item-box", "fade-up");
			el.style.animationDelay = `${index * 100}ms`;
			el.innerHTML = `
				<div class="menu-item-box-bg"></div>
				<div class="menu-item-box-color"></div>
				<figure data-figure="true">
					<img src="${getImageUrl(item.$id)}" alt="${item.title}" loading="lazy"/>
					<figcaption>
						<p class="item-name">${item.title}</p>
					</figcaption>
				</figure>
				<ul class="item-info-list ${item["double-price"] ? "justify-between pt-6" : "justify-end pt-3"}">
						<li class="item-info">
							<span>${item["double-price"] != 0 ? "تک شات" : ""}</span>
							<span>${item.price} <small>تـومان</small></span>
						</li>
						${
							item["double-price"] != 0
								? `<li class="item-info">
							<span>دبل شات</span>
							<span>${item["double-price"]} <small>تـومان</small></span>
						</li>`
								: ""
						}
				</ul>
			`;
			menuItemsContaienr.appendChild(el);
			spinLoader();

			el.addEventListener("click", () => {
				const modalContect = `
					<div class="item-info-modal md:w-[480px]">
						<h2 class="line-title title mx-auto flex-between gap-6 min-w-[calc(320px-4rem)]">
							<span>توضیحات</span>
							<ion-icon name="information-circle-outline"></ion-icon>
						</h2>
						<p class="text-center text-cream/70 leading-10">${item.desc}</p>
					</div>
				`;
				modal(modalContect);
			});
		});

		return;
	}

	const emptyBox = document.createElement("div");
	emptyBox.classList.add("empty-box", "fade-up");
	emptyBox.innerHTML = `
		<figure data-figure="true">
			<img src="/images/icons/empty.png" alt="empty" loading="lazy"/>
		</figure>
		<h3>متاسفانه آیتمی یافت نشد</h3>
	`;
	menuItemsContaienr.appendChild(emptyBox);
}

window.addEventListener("DOMContentLoaded", () => {
	const isExsist = setInterval(() => {
		const menu = document.querySelector(".menu");

		if (menu) {
			clearInterval(isExsist);
			initMenuController(menu);
		}
	}, 100);
});

function initMenuController(menu) {
	menu.addEventListener("click", (e) => {
		const validTarget = e.target.closest(".menu-button");

		if (validTarget) {
			if (menu.querySelector(".active")) {
				menu.querySelector(".active").classList.remove("active");
				menu.scrollIntoView();
			}

			validTarget.classList.add("active");

			const category = validTarget.dataset.value;

			// set timeout for control limit respone time
			setTimeout(() => {
				displayMenuItems(category);
			}, 200);
		}
	});

	menu.querySelectorAll(".menu-item .menu-button")[0]?.click();
}
