/// <reference types="cypress" />

describe("Timer Section Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should start, stop, and reset the timer", () => {
    // Timer should start at 0
    cy.get('[data-cy="timer-value"]').should("contain", "Timer: 0s");

    // Start the timer
    cy.get('[data-cy="timer-start"]').click();
    cy.wait(1100); // Wait a bit over 1 second
    cy.get('[data-cy="timer-value"]').should("contain", "Timer: 1s");

    // Stop the timer
    cy.get('[data-cy="timer-stop"]').click();
    cy.wait(1100);
    cy.get('[data-cy="timer-value"]').should("contain", "Timer: 1s");

    // Reset the timer
    cy.get('[data-cy="timer-reset"]').click();
    cy.get('[data-cy="timer-value"]').should("contain", "Timer: 0s");
  });
});
