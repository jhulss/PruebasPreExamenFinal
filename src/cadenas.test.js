import CalcuCadenas from "./sumador";

describe("Calcular", () => {
    it("Debería retornar la suma de los números separados por coma", () => {
    const calcular = new CalcuCadenas();
    const cadena = "1,2,4,8";
    const resultado = calcular.calcularSumaCadenas(cadena);
    expect(resultado).toEqual(15);
  });

  it("Debería retornar la suma de los números separados por coma y guion", () => {
    const calcular = new CalcuCadenas();
    const cadena = "1-2,3";
    const resultado = calcular.calcularSumaCadenas(cadena);
    expect(resultado).toEqual(6);
  });

  it("Debería ignorar los números mayores a 1000", () => {
    const calcular = new CalcuCadenas();
    const cadena = "2,1001";
    const resultado = calcular.calcularSumaCadenas(cadena);
    expect(resultado).toEqual(2);
  });
});