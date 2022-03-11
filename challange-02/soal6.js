//  yang dibutuhkan adalah fungsi yang mengambil array sebagai argumennya dan mengembalikan elemen terbesar kedua dari array itu.

// / ------------------------------------------------------------------------- ///

function getAngkaTerbesarKedua(personName) {
  if (personName == null){
    return 'ERROR : Format salah (Kosong)' // kondisi pertama
  }
  if(typeof personName == "number"){ // mengembalikan string
    return 'ERROR : Format yang dimasukkan salah (Tidak Tersedia Di dataAngka)'
  }
  if (personName){
    dataAngka.sort(function(x,y){ // sort untuk mengurutkan angka
      return y-x;
    });
    for (var j = 1; j <dataAngka.length; j++){
      if( dataAngka[j-1] !== dataAngka[j]){
        return dataAngka [j]
      }
    }
  }
  } 
  

  
  const dataAngka = [9,4,7,7,4,3,2,2,8];
  console.log(getAngkaTerbesarKedua(dataAngka)); // 8
  console.log(getAngkaTerbesarKedua(0))  
  console.log(getAngkaTerbesarKedua())    
// / ------------------------------------------------------------------------- ///





