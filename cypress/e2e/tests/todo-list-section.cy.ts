/// <reference types="cypress" />

describe("Todo List Section Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should add a todo and mark it as done", () => {
    // Add a new todo
    cy.get('[data-cy="todo-input"]').type("Buy milk{enter}");
    cy.get('[data-cy="todo-text-0"]').should("contain", "Buy milk");
    cy.get('[data-cy="todo-checkbox-0"]').should("not.be.checked");

    // Mark the todo as done
    cy.get('[data-cy="todo-checkbox-0"]').check();
    cy.get('[data-cy="todo-checkbox-0"]').should("be.checked");
    cy.get('[data-cy="todo-text-0"]').should("have.class", "done");
  });
});
