declare namespace Cypress {
	interface Chainable {
		dataCy(selector: string): Chainable<JQuery<HTMLElement>>;
	}
}
