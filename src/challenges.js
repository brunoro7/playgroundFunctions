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
   
  let maxNum = arrayNum[0];
  for(let i=0; i<arrayNum.length; i++){
    if(arrayNum[i]>maxNum){
      maxNum = arrayNum[i];
    }
  }
  let somaMaxNum = 0;
  for(let iGeral=0; iGeral<arrayNum.length; iGeral++){
    if(arrayNum[iGeral]===maxNum){
      somaMaxNum = somaMaxNum +1;      
    }
  }
  return somaMaxNum
}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz(arrayDeNum) {

  let result = [];
  for(let i=0; i<arrayDeNum.length; i++){  
    
    if(arrayDeNum[i]%3===0 && arrayDeNum[i]%5===0){
      result.push("fizzBuzz");
    }
    else if(arrayDeNum[i]%3===0){
      result.push("fizz");
    }
    else if(arrayDeNum[i]%5===0){
      result.push("buzz");
    }
    else if(arrayDeNum[i]%3!==0 || arrayDeNum[i]%5!==0){
      result.push("bug!");
    }
  }
  return result;
}


// Desafio 9
function encode(frase) {

  let splitedFrase = frase.split("");
  let modifiedFrase = [];

  for(let i=0; i<splitedFrase.length; i++){

    if(splitedFrase[i]==="a") {
      modifiedFrase.push("1");
    }
    else if(splitedFrase[i]==="e") {
      modifiedFrase.push("2");
    }
    else if(splitedFrase[i]==="i") {
      modifiedFrase.push("3");
    }
    else if(splitedFrase[i]==="o") {
      modifiedFrase.push("4");
    }
    else if(splitedFrase[i]==="u") {
      modifiedFrase.push("5");
    }
    else{
      modifiedFrase.push(splitedFrase[i]);
    }
  }
  let joinedFrase = modifiedFrase.join("");

  return joinedFrase
}

function decode(fraseCod) {
  let splitedFraseCod = fraseCod.split("");
  let modifiedFraseCod = [];

  for(let i=0; i<splitedFraseCod.length; i++){

    if(splitedFraseCod[i]==="1") {
      modifiedFraseCod.push("a");
    }
    else if(splitedFraseCod[i]==="2") {
      modifiedFraseCod.push("e");
    }
    else if(splitedFraseCod[i]==="3") {
      modifiedFraseCod.push("i");
    }
    else if(splitedFraseCod[i]==="4") {
      modifiedFraseCod.push("o");
    }
    else if(splitedFraseCod[i]==="5") {
      modifiedFraseCod.push("u");
    }
    else{
      modifiedFraseCod.push(splitedFraseCod[i]);
    }
  }
  let joinedFraseCod = modifiedFraseCod.join("");

  return joinedFraseCod
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
