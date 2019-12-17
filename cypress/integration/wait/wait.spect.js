/// <reference types="Cypress" />
context("Wait issue", () => {
  beforeEach(() => {
    cy.server();
    cy.route({ method: "POST", url: "**/next-js-with-relay-modern-example" }).as("query");
  });

  it("does not timeout 01", () => {
    cy.visit("/");
    cy.wait("@query");
    cy.wait("@query");
    cy.wait("@query");
    cy.wait("@query");
    cy.wait("@query");
  });
});
