function calculaPorciento(valor,porcentaje){
  return valor*(porcentaje*0.01)
  
}

//console.log(calculaPorciento(100,8))


function sumaPorciento(valor, porcentaje){
  return valor + calculaPorciento(valor, porcentaje)
}

//console.log(sumaPorciento(100,8))

function restaPorciento(valor, porcentaje){
  return valor - calculaPorciento(valor, porcentaje)
}

function porcent(valor, porcentaje, operador){
  switch(operador){
    case "+":
      alert (sumaPorciento(valor, porcentaje))
      break;
    case "-": 
      alert (restaPorciento(valor, porcentaje))
  }
}

document.querySelector("button").onclick = ejecutar;

function ejecutar(){
  let initialElement = document.querySelector('#initial').value;
  let initial = parseFloat(initialElement)
  console.log(initial)
  
  let percentElement = document.querySelector('#percent').value;
  let percent = parseFloat(percentElement)
  console.log(percent)
  
  let operator = document.querySelector("select").value;
  console.log(operator)
  
  porcent(initial, percent, operator)
 
}

//console.log(porcent(100,8,"+"))