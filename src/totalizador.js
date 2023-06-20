class Totalizador{

    calcularTotal(cantidad, precio)
    {
        return cantidad * precio;
    }
    
    verificarCodigo(stateCode)
    { 
      const taxes = {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
      };
  
      return taxes[stateCode];
    }
    
    calcularDescuento ()
    {
      const amount = this.calcularTotal(this.cantidad, this.precio);
      const discounts = [
        { total: 1000, rate: 3 },
        { total: 3000, rate: 5 },
        { total: 7000, rate: 7 },
        { total: 10000, rate: 1 },
        { total: 30000, rate: 15 }
      ];
  
      let applicableRate = 0;
      for (let discount of discounts) 
      {
        if (amount == discount.total) {
          applicableRate = discount.rate;
        } 
        else {
          return 0;
        }
      }
      return applicableRate;
  
    }
  
    totalizador()
    {
      const total = this.calcularTotal(this.cantidad, this.precio);
      const impuestos = this.verificarCodigo(this.stateCode);
      const descuento = this.calcularDescuento();
  
      const resp1 = total * impuestos / 100;
      
      return total + resp1 + descuento;
  
    }
   
  
  }
  
  export default Totalizador;
  