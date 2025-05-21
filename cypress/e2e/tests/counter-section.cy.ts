/// <reference types="cypress" />

describe("Counter Section Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should increment the counter when the button is clicked", () => {
    // Button should initially show 0
    cy.get('[data-cy="counter-increment"]').should(
      "contain",
      "Clicked 0 times"
    );

    // Click the button once
    cy.get('[data-cy="counter-increment"]').click();
    cy.get('[data-cy="counter-increment"]').should(
      "contain",
      "Clicked 1 times"
    );

    // Click the button two more times
    cy.get('[data-cy="counter-increment"]').click().click();
    cy.get('[data-cy="counter-increment"]').should(
      "contain",
      "Clicked 3 times"
    );
  });
});
