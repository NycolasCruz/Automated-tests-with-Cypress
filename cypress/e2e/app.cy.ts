describe("manipulando itens", () => {
	beforeEach(() => {
		cy.visit("");
	});

	it("deve clicar adicionar Pokémons novos à lista e verificar se a mensagem de feedback aparece", () => {
		cy.dataCy("add-random-pokémons-button").click();
		cy.dataCy("status-message").should("have.text", "Pokémons adicionados com sucesso!");
	});
});
