// descrever melhor o que o teste faz, em inglês

describe("página inicial", () => {
	before(() => {
		cy.visit("http://localhost:8000/");
	});

	it("deve clicar adicionar Pokémons novos à lista e verificar se a mensagem de feedback aparece", () => {
		cy.dataCy("add-pokémons-button").click();
		cy.dataCy("status-message")
			.should("exist")
			.and("have.text", "Pokémons adicionados com sucesso!");
		// cy.dataCy("status-message").should("have.text", "Pokémons adicionados com sucesso!");
		// Assertions
	});
});
