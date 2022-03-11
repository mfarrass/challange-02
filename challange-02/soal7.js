const dataPenjualanPakAldi = [
        {
            namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
            hargaSatuan: 760808,
            kategori : "Sepatu Sneaker",
            totalTerjual : 90,
        },
        {
            namaProduct : 'Sepatu Warior Tristan Black Brown High',
            hargaSatuan: 960808,
            kategori : "Sepatu Sneaker",
            totalTerjual : 37,
        },
        {
            namaProduct : 'Sepatu Warrior Tristan Marron High',
            kategori : "Sepatu Sneaker",
            hargaSatuan: 360808,
            totalTerjual : 90,
        },
        {
            namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
            hargaSatuan: 120808,
            kategori : "Sepatu Sneaker",
            totalTerjual : 90,
        }
    ]
 
    //  Mengakumulasikan nilai berdasarkan elemen di atas.
const hitungTerjual = dataPenjualanPakAldi.reduce((total, task) => total + task.totalTerjual, 0);


const total = 0; // pengulangan for
// for (const ii = 0; ii < dataPenjualanPakAldi.lenght; ii++) {
//     total = total + dataPenjualanPakAldi[ii].totalTerjual;
// }

console.log(hitungTerjual);