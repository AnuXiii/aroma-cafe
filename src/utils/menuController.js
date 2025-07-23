import { modal } from "./modal";
import { showError } from "../components/showError";
import { spinLoader } from "../components/spinLoader";
import { databases, getImageUrl, DB_ID } from "../appwriteClinet";
import { Query } from "appwrite";

const ITEMS = import.meta.env.VITE_APPWRITE_ITEMS_ID;

const menuItemsContaienr = document.getElementById("menu-grid");

export async function displayMenuItems(category) {
	let menuItems = [];
	//
	try {
		const items = await databases.listDocuments(DB_ID, ITEMS, [Query.equal("category", category), Query.limit(100)]);
		menuItems = items.documents;
	} catch (err) {
		menuItemsContaienr.innerHTML = showError("خطا هنگام بارگزاری اطلاعات، VPN خود را فعال کنید");
		return;
	}
	//
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
				<ul class="item-info-list px-2 ${item["double-price"] != 0 ? "justify-between pt-6" : "justify-end pt-3"}">
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

			// show product information modal with current description
			el.addEventListener("click", () => showInfoModal(item.desc));
		});

		return;
	}
	menuItemsContaienr.innerHTML = showError("متاسفانه آیتمی در این بخش موجود نیست");
}

// check if a element .menu class exsist in document
window.addEventListener("DOMContentLoaded", () => {
	const isExsist = setInterval(() => {
		const menu = document.querySelector(".menu");

		// if exsist remove checker interval
		if (menu) {
			clearInterval(isExsist);
			// init the menu controller function and click first child on menu container
			initMenuController(menu);
		}
	}, 100);
});

function initMenuController(menu) {
	menu.addEventListener("click", (e) => {
		const validTarget = e.target.closest(".menu-button");

		if (!validTarget) return;

		if (menu.querySelector(".active")) {
			menu.querySelector(".active").classList.remove("active");
			menu.scrollIntoView();
		}

		validTarget.classList.add("active");

		const category = validTarget.dataset.value;

		// set timeout for control debouncing respone time
		setTimeout(() => {
			// show menu items equal to clicked target data-value
			displayMenuItems(category);
		}, 200);
	});

	menu.querySelectorAll(".menu-item .menu-button")[0]?.click();
}

// show product information modal catched => item.desc
function showInfoModal(desc) {
	const modalContect = `
	<div class="item-info-modal md:w-[480px]">
		<h2 class="line-title title mx-auto flex-between gap-6 min-w-[calc(320px-4rem)]">
			<span>توضیحات</span>
			<ion-icon name="information-circle-outline"></ion-icon>
		</h2>
		<p class="text-center text-cream/70 leading-10">${desc}</p>
	</div>
	`;
	// run modal function to show modal with fade-up animation
	modal(modalContect);
}
