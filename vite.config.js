import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	plugins: [tailwindcss()],

	base: "/",

	build: {
		rollupOptions: {
			input: {
				home: "/index.html",
				menu: "/src/pages/menu.html",
				gallery: "/src/pages/gallery.html",
				testimonials: "/src/pages/testimonials.html",
				contact: "/src/pages/contact.html",
			},
		},
	},
});
