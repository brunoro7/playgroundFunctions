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
  let cadaTech = [];
  for (let i=0; i<arrayTech.length; i++){
    if(){

    }
    else{objList.push(cadaTech.tecnologia = {
      tech: arrayTech[i],
      name: nome,
    });
    }
  };

    return objList
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
