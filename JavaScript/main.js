/*Declaracion de las variables de las divisas. Se va a tomar el peso colombiano como base para todas las otras divisas
*/
const usd = 3922 // dolares
const eur = 4280 // euros
const ars = 4.63 // pesos argentinos
const cop = 1 // pesos colombianos
const usdEur = 1.09 // Dolar respecto al Euro

/*Declaracion de las funciones de conversión de divisas
*/

// funcion para convertir de pesos colombianos a dolares o viceversa
const pesosColombianosToDolares = (pesosColombianos, conversion) => 
  {if (conversion === 1) {
    return pesosColombianos / usd
  }
  else {
    return pesosColombianos * usd
  }}

// funcion para convertir de pesos argentinos a dolares o viceversa
const pesosArgentinosToDolares = (pesosArgentinos, conversion) => 
  {if (conversion === 3) {
    return pesosArgentinos / usd
  }
  else {
    return pesosArgentinos * usd
  }}

// funcion para convertir de pesos colombianos a euros o viceversa
const pesosColombianosToEuros = (pesosColombianos, conversion) =>
  {if (conversion === 5) {
    return pesosColombianos / eur
  }
  else {
     return pesosColombianos * eur
  }}

// funcion para convertir de pesos argentinos a euros o viceversa
const pesosArgentinosToEuros = (pesosArgentinos, conversion) =>
  {if (conversion === 7) {
    return pesosArgentinos / eur
  }
  else {
    return pesosArgentinos * eur
  }}

// funcion para convertir de dolares a euros o viceversa
const dolaresToEuros = (dolares, conversion) => 
  {if (conversion === 9) {
    return dolares / usdEur
  }
   else {
     return dolares * usdEur
  }}

/*Menu del programa
*/

// esta entrada nos permite saber si el usuario quiere hacer una conversion o no
let conversion = prompt("Si desea hacer una conversion de divisa escriba la palabra 'CON' o escriba la palabra 'ESC' para terminar el programa.")

// este ciclo while esa para que el usuario pueda hacer varias conversiones y el programa no este delimitado a un solo ciclo, sino que el usuario pueda determinar si quiere hacer solo una conversion o varias
while (conversion !== "ESC") {
  let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "))
  let opcion = parseInt(prompt("Seleccione la conversion a realizar: \n 1. Pesos Colombianos a Dolares.\n 2. Dolares a Pesos Colombianos. \n 3. Pesos Argentinos a Dolares. \n 4. Dolares a Pesos Argentinos. \n 5. Pesos Colombianos a Euros. \n 6. Euros a Pesos Colombianos. \n 7. Pesos Argentinos a Euros. \n 8. Euros a Pesos Argentinos. \n 9. Dolares a Euros. \n 10. Euros a Dolares. \n"))

  // estructura switch para determinar la funcion a usar dependiendo de la opcion seleccionada
  switch (opcion) {
    case 1:
      let resultadoCopToUsd = pesosColombianosToDolares(cantidad, opcion);
      alert(cantidad + " pesos colombianos equivalen a " + resultadoCopToUsd + " dolares")
      break;
      
    case 2:
      let resultadoUsdToCop = pesosColombianosToDolares(cantidad, opcion);
      alert(cantidad + " dolares equivalen a " + resultadoUsdToCop + " pesos colombianos")
      break;
      
    case 3:
      let resultadoArsToUsd = pesosArgentinosToDolares(cantidad, opcion);
      alert(cantidad + " pesos argentinos equivalen a " + resultadoArsToUsd + " dolares")
      break;

    case 4:
      let resultadoUsdToArs = pesosArgentinosToDolares(cantidad, opcion);
      alert(cantidad + " dolares equivalen a " + resultadoUsdToArs + " pesos argentinos")
      break;
      
    case 5:
      let resultadoCopToEur = pesosColombianosToEuros(cantidad, opcion);
      alert(cantidad + " pesos colombianos equivalen a " + resultadoCopToEur + "euros")
      break;

    case 6:
      let resultadoEurToCop = pesosColombianosToEuros(cantidad, opcion);
      alert(cantidad + " euros equivalen a " + resultadoEurToCop + " pesos colombianos")
      break;

    case 7:
      let resultadoArsToEur = pesosArgentinosToEuros(cantidad, opcion);
      alert(cantidad + " pesos argentinos equivalen a " + resultadoArsToEur + " euros")
      break;

    case 8:
      let resultadoEurToArs = pesosArgentinosToEuros(cantidad, opcion);
      alert(cantidad + " euros equivalen a " + resultadoEurToArs + " pesos argentinos")
      break;

    case 9:
      let resultadoUsdToEur = dolaresToEuros(cantidad, opcion);
      alert(cantidad + " dolares equivalen a " + resultadoUsdToEur + " euros")
      break;

    case 10:
      let resultadoEurToUsd = dolaresToEuros(cantidad, opcion);
      alert(cantidad + " euros equivalen a " + resultadoEurToUsd + " dolares")
      break;   

    default:
      alert("Opcion no valida");
      break;
  }

  // se pregunta al usuario si quiere hacer otra conversion
  conversion = prompt("Si desea hacer una conversion de divisa escriba la palabra 'CON' o escriba la palabra 'ESC' para terminar el programa.")
  
}