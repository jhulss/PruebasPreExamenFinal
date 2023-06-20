class CalcuCadenas{

    calcularSumaCadenas(cadena) {
      let delimitador = ",";
      let numeros;
    
      if (cadena.startsWith("//")) {
        const delimitadorInicio = cadena.indexOf("//") + 2;
        const delimitadorFin = cadena.indexOf("\n");
        delimitador = cadena.substring(delimitadorInicio, delimitadorFin);
        numeros = cadena.substring(delimitadorFin + 1);
      } else {
        numeros = cadena;
      }
    
      const numerosSeparados = numeros.split(new RegExp(`[${delimitador}-]`));
      let suma = 0;
    
      for (let numero of numerosSeparados) {
        numero = parseInt(numero);
    
        if (!isNaN(numero) && numero <= 1000) {
          suma += numero;
        }
      }
    
      return suma;
    }
  
  }
  
  
  
  export default CalcuCadenas;
  