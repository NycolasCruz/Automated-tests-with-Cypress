describe("manipulando itens", () => {
	beforeEach(() => {
		cy.visit("");
	});

	it("deve verificar se o botão de adicionar está inicialmente desabilitado, adicionar Pokémons novos à lista, verificar se a mensagem de feedback aparece e está correta e verificar se o formulário foi limpo ao final", () => {
		cy.dataCy("add-pokémons-button").should("be.disabled");

		cy.dataCy("new-pokémons-input").type("Pikachu");
		cy.dataCy("add-pokémons-button").click();

		cy.dataCy("status-message").should("have.text", "Pokémon adicionado com sucesso!");

		cy.dataCy("new-pokémons-input").should("have.value", "");
	});

	it("deve adicionar Pokémons aleatórios à lista e verificar se a mensagem de feedback aparece e está correta", () => {
		cy.dataCy("add-random-pokémons-button").click();
		cy.dataCy("status-message").should("have.text", "Pokémons adicionados com sucesso!");
	});
});
