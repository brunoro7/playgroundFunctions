// Desafio 10
function techList(arrayTech, nome) {
  
  let tecnologia =
  {
    tech: arrayTech,
    name: nome,
  }
  tecnologia.name = nome;
  tecnologia.tech = arrayTech.sort();
  
  let objList = [];
  let arrayTechVazio = "";
  let cadaTech = [];

  if(arrayTech.length<=0){
    arrayTechVazio = "Vazio!";
    
    return arrayTechVazio
  }

  else{
    for (let i=0; i<arrayTech.length; i++){
      objList.push(cadaTech.tecnologia = {
        tech: arrayTech[i],
        name: nome,
      });
    }
    return objList
  };

}



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
