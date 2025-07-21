// Custom Header Web Component
import { logo, links, contactInformation } from "../constants/index";
import { headerScrollController } from "../utils/headerScroll";
import { modal } from "../utils/modal";

export class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <header class="header">
            <div class="wrapper max-md:py-0">
                <div class="flex-between">
                    <button class="humburger-button relative z-11 lg:hidden" aria-controls="primary-navigation" aria-expanded="false">
                        <svg stroke="var(--humburger-color)" fill="none" class="humburger" viewBox="-10 -10 120 120" width="50">
                            <path class="line" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                            </path>
                        </svg>
                    </button>

                    <div class="flex justify-center items-center max-md:hidden">
                        <button class="location-btn btn gap-2 font-bold" title="contact information" aria-lable="contact information">
                            <span>اطلاعات تماس</span>
                            <i class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </i>         
                        </button>
                    </div>

                    <nav class="navigation flex items-center gap-16">
                        <div class="navigation-bg duration-500 ease-linear delay-200 absolute inset-0 bg-[url('/images/backgrounds/coffee-dots.png')] bg-cover bg-no-repeat opacity-0 lg:hidden"></div>
                        <div class="absolute inset-0 bg-black/90 lg:hidden"></div>
                            ${links
															.map(
																(link) => `
                                <li>
                                    <a href="${link.path}" role="link" title="${link.text}" arai-label="${link.text}" class="link header-link flex-center">${link.text}</a>
                                </li>
                                `,
															)
															.join("")}
                    </nav>

                    <div class="logo flex-center">
                        <a href="/" title="صفحه اصلی">
                            <img src="${logo}" alt="logo" class="w-24 h-24"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="h-[95px] md:h-[128px]"></div>
        `;

		this.initHeader();
	}

	initHeader() {
		// Highlight the active navigation link based on the current page
		const headerLinks = this.querySelectorAll(".header-link");

		headerLinks.forEach((link) => {
			if (window.location.pathname === link.pathname) {
				link.classList.add("active");
				link.addEventListener("click", (e) => e.preventDefault());
			}
		});

		// Toggle navigation menu on hamburger button click (for mobile)
		const humburgerButton = this.querySelector(".humburger-button");
		const navigation = this.querySelector(".navigation");

		humburgerButton.addEventListener("click", () => {
			const isOpen = navigation.classList.toggle("on");
			document.body.classList.toggle("overflow-hidden");

			if (isOpen) {
				humburgerButton.setAttribute("aria-expanded", "true");
			} else {
				humburgerButton.setAttribute("aria-expanded", "false");
			}
		});

		// init header scroll controller from => header scroll
		headerScrollController();

		// when user click location button show modal with map content and contact information from index.js
		this.querySelector(".location-btn").addEventListener("click", () => {
			modal(`
                <div class="w-screen wrapper flex justify-center items-center">
                    <div class="flex flex-col col-span-4 max-lg:hidden">
                        <h2 class="font-bold text-4xl pb-4 mb-4 border-b border-solid border-yellow">اطلاعات تماس</h2>
                        <ul class="flex flex-col gap-4">
                            ${contactInformation
															.map(
																(item) =>
																	`
                                        <li class="link flex items-center gap-2 after:hidden">
                                            <span class="ml-2 shadow-lg shadow-yellow inline-block rounded-full w-4 h-4 bg-yellow"></span>
                                            <span class="flex-none text-cream">${item.title}:</span>
                                            <span class="text-cream/70 ${item.textColor}">${item.desc}</span>
                                        </li>
                                        `,
															)
															.join("")}
                        </ul>
                    </div>
                </div>    
                    
                    `);
		});
	}
}

customElements.define("c-header", Header);

// this custom element return reuseable header component
