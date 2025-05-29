import { callAlert } from "../components/alerts";
import emailjs from "@emailjs/browser";

// import emailjs keys & id's from .env file
const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
const customerTemplateId = import.meta.env.VITE_APP_COMMENT_TEMPLATE_ID;
const contactUsTemplateId = import.meta.env.VITE_APP_CONTACT_US_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

// initialize emailjs public Key
emailjs.init(publicKey);

// select main form on contact-us page & testimonials page
const form = document.getElementById("main-form");
let formType;

// Check if form exists before running formController
if (form) {
	formType = form.dataset.type;
	formController();
}

// form controller function for control sending inputs data - validate inputs
export function formController() {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	const inputs = form.querySelectorAll(".input");
	const button = form.querySelector("button");

	button.addEventListener("click", () => {
		// input validator state
		let validator = true;

		inputs.forEach((input) => {
			if (input.value.trim() === "") {
				validator = false;
			}
		});

		if (!validator) {
			callAlert("لطفا تمامی ورودی ها را پر کنید", "bg-rose-500");
			return;
		}

		// check user passed captcha
		const recaptchaResponse = grecaptcha.getResponse();
		if (recaptchaResponse.length === 0) {
			callAlert("لطفا تایید کنید که ربات نیستید", "bg-rose-500");
			return;
		}

		button.classList.add("sending");

		emailjs.sendForm(serviceId, formType === "comment" ? customerTemplateId : contactUsTemplateId, form).then(() => {
			button.classList.remove("sending");
			inputs.forEach((input) => {
				input.value = "";
				if (input.nextElementSibling) {
					input.nextElementSibling.classList.remove("active");
				}

				// reset google captcha
				grecaptcha.reset();
			});

			if (formType === "comment") {
				callAlert("نظر شما با موفقیت ثبت شد", "bg-green-600");
			} else {
				callAlert("فرم با موفقیت ارسال شد", "bg-green-600");
			}
		});
	});
}
