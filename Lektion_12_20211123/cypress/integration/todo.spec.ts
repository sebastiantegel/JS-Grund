describe("todo list test", () => {
  it("it should add item to the list", () => {
    // 1. Arrange
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna");

    // 2. Act
    cy.get("button").click();

    // 3. Assert
    cy.get("ul li").should("have.length", 1);
  });

  it("should allow for several items to be added", () => {
    // 1. Arrange
    cy.visit("http://localhost:1234");
    cy.get("input").type("Handla");
    cy.get("button").click();
    cy.get("ul li").should("have.length", 1);
    cy.get("input").type("Laga mat");

    // 2. Act
    cy.get("button#save").click();

    // 3. Assert
    cy.get("ul li").should("have.length", 2);
  });

  it("should empty the input after click", () => {
    // 1. Arrange
    cy.visit("http://localhost:1234");

    cy.get("input").type("Handla");

    // 2. Act
    cy.get("button").click();

    // 3. Assert
    cy.get("input").should("have.value", "");
  });

  it("should mark item as done", () => {
    cy.visit("http://localhost:1234");
    cy.get("input").type("Springa");
    cy.get("button").click();

    cy.get("ul li:first > button:first").click();

    cy.get("ul li:first > span").should("have.class", "done");
  });

  it("should remove items from the list", () => {
    // 1. Arrange
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna");

    // 2. Act
    cy.get("button").click();

    // 3. Assert
    cy.get("ul li").should("have.length", 1);

    cy.get("ul li:first > .remove").click();

    cy.get("ul li").should("have.length", 0);
  });

  it("should maintain the list on refresh", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("Träna");

    // 2. Act
    cy.get("button").click();

    // 3. Assert
    cy.get("ul li").should("have.length", 1);

    cy.reload();

    cy.get("ul li").should("have.length", 1);
  });
});
