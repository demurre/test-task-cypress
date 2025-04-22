describe("Searching functionality tests", () => {
  it("Search input field test", () => {
    cy.visit("/");
    cy.get('[id=":r0:"]').should("exist").type("Summer");
    cy.get("#tracklist")
      .should("exist")
      .find("p")
      .contains(/Summer/i);
  });

  it("Search non-exist input field test", () => {
    cy.visit("/");
    cy.get('[id=":r0:"]').should("exist").type("abc");
    cy.get("#tracklist").should("exist").find("p").contains(/not/i);
  });
});
