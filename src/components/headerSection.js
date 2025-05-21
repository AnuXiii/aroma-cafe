export class HeaderSection extends HTMLElement {
	connectedCallback() {
		const title = this.dataset.title || "";
		const subTitle = this.dataset.subText || "";
		const bg = this.dataset.bg || "/images/gallery/aroma-cafe.png";
		this.innerHTML = `  
            <section class="flex justify-center items-center relative h-[70vh] z-1">
				<div class="absolute inset-0 bg-top bg-cover bg-no-repeat z-[-1]" style="background-image: url('${bg}')"></div>
				<div class="absolute inset-0 bg-top bg-cover bg-no-repeat z-[-1] bg-gradient-to-t from-black to-transparent"></div>
                <div class="wrapper gap">
					<header class="header-section-text flex-col-center text-center">
						<h1 class="font-dana-bold font-bold text-cream text-4xl md:text-5xl lg:text-6xl">${title}</h1>
						<p class="text-cream/70 text-sm md:text-base lg:text-lg">${subTitle}</p>	
					</header>
                </div>
            </section>
        `;
	}
}

customElements.define("c-header-section", HeaderSection);
