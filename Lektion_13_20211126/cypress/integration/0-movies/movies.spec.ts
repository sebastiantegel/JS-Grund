describe("Movie tests", () => {
  it("should get movies when searching", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("star");

    cy.get("button").click();

    cy.get(".movie").should("have.length", 10);
  });

  it("should get fake data, but still work", () => {
    cy.intercept("GET", "http://www.omdbapi.com/*", {
      fixture: "omdbresponse.json",
    }).as("getMovies");

    let searchText: string = "Star";

    cy.visit("http://localhost:1234");

    cy.get("input").type(searchText);

    cy.get("button").click();

    cy.wait("@getMovies")
      .its("request.url")
      .should("contain", "s=" + searchText);

    cy.get(".movie").should("have.length", 3);
    cy.get(".movie:first").should("contain", searchText);
  });
});
