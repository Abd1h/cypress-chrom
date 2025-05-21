/// <reference types="cypress" />

describe("Random Joke Section Component", () => {
  beforeEach(() => {
    // Change the URL below to the actual route where your Random Joke Section is rendered
    cy.visit("http://localhost:5173/");
  });

  it("should display a random joke when the button is clicked", () => {
    // The joke should not be visible initially
    cy.get('[data-cy="joke-text"]').should("not.exist");

    // Click the button to get a joke
    cy.get('[data-cy="joke-randomize"]').click();

    // The joke should now be visible and match one of the possible jokes
    const jokes = [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "What do you call fake spaghetti? An impasta!",
      "Why did the math book look sad? Because it had too many problems.",
    ];
    cy.get('[data-cy="joke-text"]')
      .should("exist")
      .invoke("text")
      .then((text) => {
        expect(jokes).to.include(text);
      });
  });
});
