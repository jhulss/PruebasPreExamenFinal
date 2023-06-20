#### Para instalar las dependencias:

npm install

#### Comandos de uso:

Ejecutar web-sever local parcel:
npm start

Ejecutar pruebas de unidad de forma continua --watch:
npm test

Ejecutar pruebas de unidad solo una vez:
npm run test-once


ELEVATOR PITCH
Para Comunidad UCB y responsable de la cafetería de la universidad
Quién necesita mejorar la recepción de pedidos y registro de ventas
El Cato Break 
Es un aplicación responsiva
Que permite registrar y reservar los productos y servicios que la cafetería ofrece a los clientes
A diferencia de whatsApp y método tradicional del cuaderno
Nuestro proyecto ayuda a la comunidad a realizar sus pedidos y reservar algún servicio mientras que al encargado le permite registrar los pedidos y/o reservar y gestionar el stock

Crea una NOT LIST:
IN
Realizar reserva
Registrar pedido 
Reservar servicio (juegos)
Muestra productos disponibles y precios
Actualiza el inventario
Mostrar stock disponible 

OUT
Pagos vía Internet
Control y seguimiento de usuarios
Manejos de estadísticas 

UNRESOLVED
Historial de pedidos
Estadística de negocios
Cálculo de ingresos
Que sea multiplataforma 
Categoría de productos 

¿Qué nos mantiene despiertos?
Disponibilidad del cliente
Diferencia en los horarios de disponibilidad de los integrantes del grupo
No contar con uno o más de los miembros del equipo en alguna reunión de trabajo por diferencias de horario
Cambio de los requerimientos de la app en tiempo de entrega.


function calcularSumaCadenas(cadena) {
  // Verificar si la cadena está vacía
  if (cadena.length === 0) {
    return 0;
  }

  // Verificar si la cadena contiene el separador "-"
  if (cadena.includes("-")) {
    // Reemplazar el separador "-" por ","
    cadena = cadena.replace("-", ",");
  }

  // Dividir la cadena en números utilizando "," como separador
  const numeros = cadena.split(",");

  // Sumar los números y devolver el resultado
  const suma = numeros.reduce((total, numero) => {
    return total + Number(numero);
  }, 0);

  return suma;
}