describe("Verify Total Duration of the Playlist in Seconds", () => {
  it("Total Duration in seconds test", () => {
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
    cy.get("h1").contains(/Total playlist tracks/i);

    let totalSeconds = 0;

    cy.get("#playlist")
      .find(".MuiGrid-grid-xs-2")
      .each(($el) => {
        const time = $el.text().trim();
        if (time.includes(":")) {
          const [min, sec] = time.split(":").map(Number);
          totalSeconds += min * 60 + sec;
        }
      })
      .then(() => {
        cy.get("#playlist-duration").should("contain", totalSeconds.toString());
      });
  });
});
