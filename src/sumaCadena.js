class CalcuCadenas {
    calcularSumaCadenas(cadena) {
      if (cadena.length === 0) {
        return 0;
      }
  
      if (cadena.includes("-")) {
        cadena = cadena.replace("-", ",");
      }
  
      const numeros = cadena.split(",");
      const suma = numeros.reduce((total, numero) => {
        return total + Number(numero);
      }, 0);
  
      return suma;
    }
  }
  
  describe("CalcuCadenas", () => {
    it("Debería retornar la suma de los números separados por coma y guion", () => {
      const calcular = new CalcuCadenas();
      const cadena = "1-2,3";
      const resultado = calcular.calcularSumaCadenas(cadena);
      expect(resultado).toEqual(6);
    });
  
    it("Debería retornar 0 para una cadena vacía", () => {
      const calcular = new CalcuCadenas();
      const cadena = "";
      const resultado = calcular.calcularSumaCadenas(cadena);
      expect(resultado).toEqual(0);
    });
  
    it("Debería retornar el número mismo para una cadena que contiene un solo número", () => {
      const calcular = new CalcuCadenas();
      const cadena = "5";
      const resultado = calcular.calcularSumaCadenas(cadena);
      expect(resultado).toEqual(5);
    });
  
    // Agrega más pruebas según sea necesario
  });



  class CalcuCadenas {
    calcularRepeticiones(cadena) {
      const numeros = this.obtenerNumeros(cadena);
      const repeticiones = {};
  
      numeros.forEach(numero => {
        if (repeticiones.hasOwnProperty(numero)) {
          repeticiones[numero]++;
        } else {
          repeticiones[numero] = 1;
        }
      });
  
      return repeticiones;
    }
  
    obtenerNumeros(cadena) {
      const numeros = cadena.split(/[,-]/);
      return numeros.filter(numero => numero !== "").map(numero => parseInt(numero));
    }
  }