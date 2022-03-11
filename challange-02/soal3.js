

// // --------------------------------------------------------------------------------------- //

// // ([a-zA-Z0-9]+) = mencocokan dengan kata pertama yang dapat memiliki a-z, A-Z, dan 0-9
// // ([_.-{1}]) = mencocokan dengan _, -, . setelah kata pertama
// // ? = mencocokan antara 0(salah) dan 1(benar) dari token sebelumnya.
// // ([a-zA-Z0-9]+) = mencocokan dengan kata kedua yang dapat memiliki a-z, A-Z, dan 0-9
// // \@ = mencocokan dengan karakter khusus @
// // ([a-zA-Z0-9]+) = mencocokan dengan kata yang merupakan nama domain setelah @
// // ([.]) = mencocokan dengan .
// // ([a-zA-Z.]+) = mencocokan dengan kata terakhir terakhir dari id email yang dapat berupa com, co.in, org, dll.

// // --------------------------------------------------------------------------------------- // 


// // --------------------------------------------------------------------------------------- // 
function checkvalidateEmailAddress(emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if (typeof emailAdress == '*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;'){ 
  //   return 'error'
  // }
  if (emailAdress.match(regexEmail)) { // match fungsi ini mencari dan mendapatkan teks yang sama persis case-sensitive. 
    return true; 
  } else {
    return false; 
  } 
}  


 console.log(checkvalidateEmailAddress("pakainfo@gmail.com"));
 console.log(checkvalidateEmailAddress('apranata@binar.com')) 
 console.log(checkvalidateEmailAddress('apranata@binar')) 
//  console.log(checkvalidateEmailAddress('apranata')) 
