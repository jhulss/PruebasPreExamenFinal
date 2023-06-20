describe("Sumador", () => {
  it("Debería mostrar el conteo de palabras en el resultado", () => {
    const frase = "Hola esto es una prueba";
    cy.visit("/");
    cy.get("#frase").type(frase);
    cy.get("#contar-form").submit().wait(1000);
    cy.get("#resultado-div").should("be.visible");
    cy.get("#resultado-div").should("contain", "Hola: 1");
    cy.get("#resultado-div").should("contain", "esto: 1");
    cy.get("#resultado-div").should("contain", "es: 1");
    cy.get("#resultado-div").should("contain", "una: 1");
    cy.get("#resultado-div").should("contain", "prueba: 1");
  });

  it("Debería mostrar un mensaje si la frase está vacía", () => {
    cy.visit("/");
    cy.get("#frase").clear();
    cy.get("#contar-form").submit();
    cy.get("#resultado-div").should("contain", "No hay palabras para contar");
  });

  it("Debería manejar correctamente la puntuación en la frase", () => {
    const frase = "Hola, esto es una prueba?";
    cy.visit("/");
    cy.get("#frase").type(frase);
    cy.get("#contar-form").submit();
    cy.get("#resultado-div").should("contain", "Hola: 1");
    cy.get("#resultado-div").should("contain", "esto: 1");
    cy.get("#resultado-div").should("contain", "es: 1");
    cy.get("#resultado-div").should("contain", "una: 1");
    cy.get("#resultado-div").should("contain", "prueba?: 1");
  });
});
