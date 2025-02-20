describe("página inicial", () => {
	it("deve renderizar o texto correto", () => {
		cy.visit("http://localhost:8000/");
		cy.dataCy("new-item-label").contains("Adicione um novo item à lista");
	});
});
