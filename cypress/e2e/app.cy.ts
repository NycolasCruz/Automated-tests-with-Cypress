describe("manipulando itens", () => {
	beforeEach(() => {
		cy.visit("");
	});

	it("deve verificar se o botão de adicionar está inicialmente desabilitado", () => {
		cy.dataCy("add-pokemons-button").should("be.disabled");
	});

	it("deve adicionar Pokémons novos à lista, verificar se a mensagem de feedback aparece e está correta e verificar se o formulário foi limpo ao final", () => {
		cy.dataCy("new-pokemon-input").type("Pikachu");
		cy.dataCy("add-pokemons-button").click();

		cy.dataCy("status-message").should("have.text", "Pokémon adicionado com sucesso!");

		cy.dataCy("new-pokemon-input").should("have.value", "");
	});

	it("deve adicionar Pokémons aleatórios à lista e verificar se a mensagem de feedback aparece e está correta", () => {
		cy.dataCy("add-random-pokemons-button").click();
		cy.dataCy("status-message").should("have.text", "Pokémons adicionados com sucesso!");
	});
});
