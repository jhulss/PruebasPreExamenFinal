import Frases from "./sumador";

describe("Contar Frases", () => {
 
  it("Debería devolver un objeto vacío para una frase vacía", () => {
    const frase = "";
    const resp = new Frases();
    const resultado = resp.contarPalabras(frase);
    expect(resultado).toEqual({});
  });

  it("Debería contar una frase", () => {
    const frase = "Hola";
    const resp = new Frases();
    const resultado = resp.contarPalabras(frase);
    expect(resultado).toEqual({hola: 1});
  });

  it("Debería contar las palabras en una frase correctamente", () => {
    const frase = "Hola, esto es una prueba.";
    const resp = new Frases();
    const resultado = resp.contarPalabras(frase);
    expect(resultado).toEqual({ hola: 1, esto: 1, es: 1, una: 1, prueba: 1 });
  });

  it("Debería manejar correctamente las diferencias de mayúsculas y minúsculas", () => {
    const frase = "Hola hola hOla HoLA";
    const resp = new Frases();
    const resultado = resp.contarPalabras(frase);
    expect(resultado).toEqual({ hola: 4 });
  });

  it("Debería manejar correctamente la puntuación en la frase", () => {
    const frase = "Hola, ¿esto es una prueba?";
    const resp = new Frases();
    const resultado = resp.contarPalabras(frase);
    expect(resultado).toEqual({ hola: 1, esto: 1, es: 1, una: 1, prueba: 1 });
  });



  


});
