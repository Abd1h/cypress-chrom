/// <reference types="cypress" />

describe("Color Picker Section Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should update the label and style when a new color is picked", () => {
    // The default color should be #ff0000
    cy.get('[data-cy="color-picker"]').should("have.value", "#ff0000");
    cy.get('[data-cy="color-label"]').should(
      "contain",
      "Selected Color: #ff0000"
    );
    cy.get('[data-cy="color-label"]')
      .should("have.attr", "style")
      .and("contain", "color: rgb(255, 0, 0)");

    // Change the color to #00ff00
    cy.get('[data-cy="color-picker"]')
      .invoke("val", "#00ff00")
      .trigger("input");
    cy.get('[data-cy="color-label"]').should(
      "contain",
      "Selected Color: #00ff00"
    );
    cy.get('[data-cy="color-label"]')
      .should("have.attr", "style")
      .and("contain", "color: rgb(0, 255, 0)");
  });
});
