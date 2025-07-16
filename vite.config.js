import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: "46787.txt",
					dest: "", // کپی در ریشه dist/
				},
			],
		}),
	],

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
