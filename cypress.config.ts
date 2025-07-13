import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "46bowk",
	e2e: {
		defaultBrowser: "edge",
		baseUrl: "http://localhost:8000",
	},
});
