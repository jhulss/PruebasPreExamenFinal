it("Debería calcular correctamente el total con impuestos y descuentos", () => {
    const totalizador = new Totalizador();

    // Mock de los valores necesarios
    totalizador.cantidad = 5;
    totalizador.precio = 10;
    totalizador.stateCode = "UT";

    // Llamada a la función que se está probando
    const resultado = totalizador.totalizador();

    // Comprobación del resultado esperado
    expect(resultado).toEqual(54.6625);
  });

  it("Debería retornar 0 si no hay descuento aplicable", () => {
    const totalizador = new Totalizador();

    // Mock de los valores necesarios
    totalizador.cantidad = 2;
    totalizador.precio = 5000;
    totalizador.stateCode = "NV";

    // Llamada a la función que se está probando
    const resultado = totalizador.totalizador();

    // Comprobación del resultado esperado
    expect(resultado).toEqual(40316);
  });

  it("Debería manejar correctamente el caso sin impuestos ni descuentos", () => {
    const totalizador = new Totalizador();

    // Mock de los valores necesarios
    totalizador.cantidad = 1;
    totalizador.precio = 100;
    totalizador.stateCode = "TX";

    // Llamada a la función que se está probando
    const resultado = totalizador.totalizador();

    // Comprobación del resultado esperado
    expect(resultado).toEqual(100);
  });
