/// <reference types="Cypress" />

const getQueryName = function(xhr) {
  const regexp = /\w+Query/gm;
  const match = xhr.requestBody.query.match(regexp);
  return match[0];
};

context("Wait issue", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/next-js-with-relay-modern-example",
      // optional route config added only for debugging
      onRequest: xhr => console.log("onRequest:", getQueryName(xhr)),
      onResponse: xhr => console.log("onResponse:", getQueryName(xhr)),
      onAbort: args => console.log("onAbort:", args)
    }).as("query");
  });

  it("does not timeout 01", () => {
    // first we vist url which triggers
    // waterfall calls to graphql endpoint
    cy.visit("/");

    // now we wait for requests to resolve
    // NOTE: .then(...) added only for debugging
    cy.wait("@query").then(xhr => cy.log("query1:", getQueryName(xhr)));
    cy.wait("@query").then(xhr => cy.log("query2:", getQueryName(xhr)));
    cy.wait("@query").then(xhr => cy.log("query3:", getQueryName(xhr)));
    cy.wait("@query").then(xhr => cy.log("query4:", getQueryName(xhr)));
    cy.wait("@query").then(xhr => cy.log("query5:", getQueryName(xhr)));
  });
});
