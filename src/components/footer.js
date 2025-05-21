import { links } from "../constants";
import { contactInformation, socials } from "../constants";

export class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <footer class="footer relative overflow-hidden">
                <div class="opacity-10 absolute inset-0 top-20 scale-125 blur-xs bg-[url('/images/backgrounds/coffee-mask.png')] bg-cover bg-no-repeat"></div>
                <div class="custom-mask absolute inset-0 bg-gradient-to-t from-black via-transparent lg:via-black/50 to-black"></div>
                <div class="wrapper gap pb-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                        <div class="flex flex-col gap-12 relative z-2 max-lg:mb-10">
                            <h2 class="text text-3xl font-semibold text-cream p-2">اطلاعات تماس</h2>  
                            <ul class="flex flex-col gap-8">
                                ${contactInformation
																	.map(
																		(item) =>
																			`
                                <li class="link flex gap-2 after:hidden">
                                    <span class="flex-none text-cream/90 font-semibold">${item.title}:</span>
                                    <span class="text-cream/70 ${item.textColor}">${item.desc}</span>
                                </li>
                                `
																	)
																	.join("")}
                            </ul>
                        </div>
                        <div class="flex flex-col gap-12 relative z-2 max-lg:mb-10">
                            <h2 class="text text-3xl font-semibold text-cream p-2">دسترسی سریع</h2>  
                            <ul class="flex flex-col gap-8">
                                ${links
																	.map(
																		(link) => `
                                    <li>
                                        <a href="${link.path}" role="link" title="${link.text}" arai-label="${link.text}" class="link text-cream/70 hover:text-yellow">${link.text}</a>
                                    </li>
                                    `
																	)
																	.join("")}
                            </ul>
                        </div>
                        <div class="flex flex-col gap-12 relative z-2 max-lg:mb-10">
                            <h2 class="text text-3xl font-semibold text-cream p-2">راه های ارتباطی</h2>  
                            <ul class="flex items-center gap-8">
                                ${socials
																	.map(
																		(social) =>
																			`
                                <li>
                                    <a href="${social.link}" target="_blank" title="${social.title}" class="text-cream text-3xl rounded-full border-2 border-solid border-transparent p-3 flex-center custom-border">
                                        <ion-icon name="${social.icon}" class="w-8 translate-x-0 opacity-100 duration-200 ease-in-out"></ion-icon>
                                        <ion-icon name="${social.icon}" class="w-0 -translate-x-full opacity-0 duration-200 ease-in-out"></ion-icon>
                                    </a>
                                </li>
                                `
																	)
																	.join("")}
                            </ul>
                            <figure data-figure="true">
                                <iframe title="map-iframe" src="https://neshan.org/maps/iframe/places/aea93c735f80f6dcfdab6b507af58bd7#c35.497-51.737-11z-0p/35.4968684/51.6603149" class="w-full h-[300px] rounded-lg" allowFullScreen loading="lazy"></iframe>
                            </figure>
                        </div>
                    </div>
                    
                    <div class="relative flex justify-between items-center gap-6 pt-20 max-lg:flex-wrap max-lg:justify-center max-lg:text-center">
                       <p class="text-cream/70 max-lg:order-4">تمامی حقوق این <a class="text-yellow font-semibold duration-200 hover:opacity-70" href="/">وبسایت</a> برای کافه آروما محفوظ می باشد ${new Date().getFullYear()} &copy</p>     
                        <div class="relative flex-col-center top-[30px] max-lg:w-full">
                            <h1 class="text-center text-xl md:text-4xl font-poppins font-bold">Cafe Aroma</h1>
                            <figure data-figure="true" class="absolute top-[-40px]">
                                <img src="/images/backgrounds/coffee-line.png" alt="coffee-line" loading="lazy" class="w-48"/>
                            </figure>
                        </div>
                        <p class="text-cream/70">طراحی و توسعه توسط <a class="text-yellow font-semibold duration-200 hover:opacity-70" target="_blank" href="https://instagram.com/mahdirs.696">مهدی رستمی</a></p>                                  
                    </div>
                </div>
            </footer>
        `;
	}
}

customElements.define("c-footer", Footer);
