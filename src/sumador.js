class Frases{

    contarPalabras(frase) {
      
      if (frase === "") {
        return {}; // Devolver objeto vacío para frase vacía
      }
    
    // Convertir la frase a minúsculas y eliminar cualquier puntuación innecesaria
    frase = frase.toLowerCase().replace(/[^\w\s]/g, '');
  
    // Dividir la frase en palabras utilizando el espacio como separador
    const palabras = frase.split(' ');
  
    // Crear un objeto para almacenar el conteo de palabras
    const conteo = {};
  
    // Recorrer cada palabra y actualizar el conteo
    palabras.forEach(palabra => {
      // Verificar si la palabra ya existe en el conteo y actualizar su valor
      if (conteo.hasOwnProperty(palabra)) {
        conteo[palabra]++;
      } else {
        // Si la palabra no existe, agregarla al conteo con un valor inicial de 1
        conteo[palabra] = 1;
      }
    });
  
    return conteo;
  }
}


export default Frases;
