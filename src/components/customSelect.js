export class Select extends HTMLElement {
	connectedCallback() {
		const options = JSON.parse(this.dataset.options || "[]");
		const title = this.dataset.title || "انتخاب کنید";
		const name = this.dataset.name || "";

		this.innerHTML = `
            <div class="select-container">
                <header class="select-header flex-between">
                    <span class="select-title">${title}</span>
                    <i class="select-arrow flex-center"><ion-icon name="arrow-up-outline"></ion-icon></i>
                </header>
                <div class="select-options" style="height: 0">
                    ${options
											.map(
												(option) => `
                        <div class="select-option flex-between" data-value="${option.value}">
                            <span class="text-semibold">${option.label}</span>
                            <i class="checkmark flex-center"><ion-icon name="checkmark-outline"></ion-icon></i>
                        </div>
                        `
											)
											.join("")}
                </div>
                <input class="input select-input hidden" type="text" id="${name}" name="${name}" required/>
            </div>
        `;

		this.initSelect();
	}

	initSelect() {
		const container = this.querySelector(".select-container");
		const selectHeader = this.querySelector(".select-header");
		const selectTitle = this.querySelector(".select-title");
		const selectArrow = this.querySelector(".select-arrow");
		const selectOptions = this.querySelector(".select-options");
		const selectInput = this.querySelector(".select-input");

		let selectHeight = selectOptions.scrollHeight;
		//
		selectHeader.addEventListener("click", () => {
			const isActive = selectArrow.classList.toggle("active");
			if (isActive) {
				selectOptions.style.height = selectHeight + "px";
			} else {
				selectOptions.style.height = 0;
			}
		});
		//
		this.querySelectorAll(".select-option").forEach((option) => {
			option.addEventListener("click", () => {
				const parent = option.parentNode;
				if (parent.querySelector(".active")) {
					parent.querySelector(".active").classList.remove("active");
				}
				//
				const value = option.dataset.value;
				const label = option.textContent.trim();
				const checkmark = option.querySelector(".checkmark");
				//
				selectInput.value = value;
				selectTitle.textContent = label;
				selectHeader.classList.add("active");
				checkmark.classList.add("active");
				//
				const isActive = selectArrow.classList.toggle("active");
				if (isActive) {
					selectOptions.style.height = selectHeight + "px";
				} else {
					selectOptions.style.height = 0;
				}
			});
		});
		//
		document.addEventListener("click", (e) => {
			if (!container.contains(e.target)) {
				selectOptions.style.height = 0;
				selectArrow.classList.remove("active");
			}
		});
	}
}

customElements.define("c-select", Select);
