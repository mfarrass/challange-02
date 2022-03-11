
// Built-in Objek String replace()

// --------------------------------------------------------------------------------------- //


function changeWord(selectedText, changedText, text) {
    let  merubahSebuahText=changedText.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"); // Mengganti string lama dengan string yang baru
    return selectedText.replace(new RegExp( merubahSebuahText, 'g'), text); 
}
//contoh penggunaan
const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changeWord(kalimat1,'mencintai','membenci'));
console.log(changeWord(kalimat2,'bromo','Semeru'));

// --------------------------------------------------------------------------------------- //

















