
// // --------------------------------------------------------------------------------------- //

function checkTypeNumber(givenNumber){
  if (typeof givenNumber == 'string'){ 
    return 'Error : Invalid data type' // 
  }
  if (typeof givenNumber == 'object'){
    return 'Error : Invalid data type' // jika mendapatkan nilai selain akan menghasilkan error tersebut
  }
  if (givenNumber % 2 == 0){ // jika angka modulus 2 / sisa baginya = 0 = maka angka ini Genap
    return 'GENAP'
  }
  if (givenNumber % 2 == 1){ // jika sisa baginya bilangan satu, maka angka tersebut genap
    return 'GANJIL'
  }
  
  return 'Error : Bro where is the parameter ?' // jika tidak memiliki nilai argumen atau parameter maka akan menampilkan output tersebut
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
