// base backend URL
export const backendURL = import.meta.env.VITE_APP_BACKEND_URL;

// logo src
export const logo = "/logo.png";

// primary links for header & footer
export const links = [
	{
		path: "/",
		text: "صفحه اصلی",
	},
	{
		path: "/src/pages/menu.html",
		text: "منو کافه",
	},
	{
		path: "/src/pages/gallery.html",
		text: "گالری",
	},
	{
		path: "/src/pages/testimonials.html",
		text: "نظرات",
	},
	{
		path: "/src/pages/contact.html",
		text: "تماس باما",
	},
];

export const contactInformation = [
	{
		title: "شماره تماس",
		desc: ["09369500321"].reverse(),
	},
	{
		title: "آدرس",
		desc: "پاکدشت خاتون آباد میدان بسیج",
	},
	{
		title: "ساعات کاری",
		desc: "Open: 07:00 - Close: 23:00",
		textColor: "text-yellow",
	},
];

export const socials = [
	{
		title: "instagram",
		link: "https://www.instagram.com/aroma_cafe_72/",
		icon: "logo-instagram",
	},
	{
		title: "whatsapp",
		link: "https://wa.me/+989369500321?text=سلام وقت بخیر",
		icon: "logo-whatsapp",
	},
	{
		title: "location",
		link: "https://neshan.org/maps/places/ae_bQOLgyxaR0Z#c35.689-51.389-11z-0p",
		icon: "location-outline",
	},
];

export const testimonials = [
	{
		author: "مهدی",
		comment: "فضای دنج و آروم کافه آروما همیشه برام جذابه. قهوه‌هاشون هم عالیه!",
		customerHistory: 4,
		score: 4,
	},
	{
		author: "سارا",
		comment: "هر بار که به آروما میام، حس خوبی می‌گیرم. برخورد پرسنل واقعاً حرفه‌ایه.",
		customerHistory: 2,
		score: 5,
	},
	{
		author: "علی",
		comment: "کیک‌های خانگی و قهوه‌های خاص آروما رو هیچ‌جا پیدا نکردم. همیشه راضی‌ام.",
		customerHistory: 3,
		score: 5,
	},
	{
		author: "رضا",
		comment: "منوی متنوع و کیفیت بالای خدمات آروما واقعاً مثال‌زدنیه. همیشه پیشنهادش می‌کنم.",
		customerHistory: 1,
		score: 5,
	},
];
