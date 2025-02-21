describe("página inicial", () => {
	before(() => {
		cy.visit("http://localhost:8000/");
	});

	it("deve renderizar o texto correto", () => {
		cy.dataCy("new-item-label").contains("Adicione um novo item à lista");
	});
});
