class FizzBuzz{
    
    cicloFizz(numero)
      {
          if (numero %3 == 0 && numero %5 == 0)
          {
             return "FizzBuzz";
          }
  
          if (numero %3 == 0)
          {
            return "Fizz";
          }
  
          if (numero %5 == 0)
          {
            return "Buzz";
          }
          
          else
            return numero;
      }
  
      verificar(numero)
      {
          const array = [];
          for(let i = 1; i <= numero; i++)
          {
              array.push(this.cicloFizz(i));
          }
          return array;
      }
    
  }
  
  export default FizzBuzz;