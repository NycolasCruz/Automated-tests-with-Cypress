import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		defaultBrowser: "edge",
		baseUrl: "http://localhost:8000",
	},
});
