// Desafio 1
function compareTrue(valor1, valor2) {
    if((valor1 !== valor2) || (valor1 === false && valor2 === false)){
        return false;
    }
    else if((valor1 === valor2)){
        return true;
    }
}

// Desafio 2
function calcArea(base, height) {
  let areaTri = ((base*height)/2);
  
  return areaTri
}

// Desafio 3
function splitSentence(frase) {
  let result = frase.split(" ");
  return result;
}

// Desafio 4

function concatName(arrayString) {
  
  let firstIndex = arrayString[0];
  let lastIndex = arrayString[arrayString.length-1];
  let fullConcat = (lastIndex + ", " + firstIndex);
  
  return fullConcat
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamPoints = ((wins*3)+(ties));
  return teamPoints
}

// Desafio 6
function highestCount(arrayNum) {
  
  
  let maxNum = [];
  let somaMaxNum = 0;

  for(let i=0; i<arrayNum.length; i++){
    if(arrayNum[i]>maxNum){
      maxNum = arrayNum[i];
    }
  }
  for(let iGeral=0; iGeral<arrayNum.length; iGeral++){
    if(arrayNum[iGeral]===maxNum){
      somaMaxNum = somaMaxNum +1;      
    }
  }
  return somaMaxNum
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
