describe("Add Track Using " + " Button", () => {
  it("Add track test", () => {
    cy.visit("/");
    cy.get("#tracklist")
      .should("exist")
      .find("button")
      .contains("+")
      .first()
      .click();
    cy.get("#playlist")
      .should("exist")
      .find("div")
      .should("have.class", "MuiGrid-container");
  });

  it("Add multiple track test", () => {
    cy.visit("/");
    cy.get("#tracklist")
      .should("exist")
      .find('input[type="checkbox"]')
      .check({ multiple: true });
    cy.get("button").contains(/Add/i).click();
    cy.get("#playlist")
      .should("exist")
      .find("div")
      .should("have.class", "MuiGrid-container");
  });

  it("Delete track test", () => {
    cy.visit("/");
    cy.get("#tracklist")
      .should("exist")
      .find("button")
      .contains("+")
      .first()
      .click();
    cy.get("#playlist")
      .should("exist")
      .find("div")
      .should("have.class", "MuiGrid-container");
    cy.get("#playlist").find("button").contains("-").first().click();
    cy.get("#playlist").should("not.be.visible");
  });
});
