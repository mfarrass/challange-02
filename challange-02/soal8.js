// const dataPenjualanNovel = [
//     {
//         idProduct: 'BOOK002421',
//         namaProduk: 'Pulang - Pergi',
//         penulis: 'Tere Liye',
//         hargaBeli: '60000',
//         hargaJual: '86000',
//         totalTerjual: 150,
//         sisaStok: 17,
//     },
//     {
//         idProduct: 'BOOK002351',
//         namaProduk: 'Selamat Tinggal',
//         penulis: 'Tere Liye',
//         hargaBeli: '75000',
//         hargaJual: '103000',
//         totalTerjual: 171,
//         sisaStok: 20,
//     },
//     {
//         idProduct: 'BOOK002941',
//         namaProduk: 'Garis Waktu',
//         penulis: 'Fiersa Besari',
//         hargaBeli: '67000',
//         hargaJual: '99000',
//         totalTerjual: 213,
//         sisaStok: 5,
//     },
//     {
//         idProduct: 'BOOK002941',
//         namaProduk: 'Laskar Pelangi',
//         penulis: 'Andrea Hirata',
//         hargaBeli: '55000',
//         hargaJual: '66000',
//         totalTerjual: 20,
//         sisaStok: 56,
//     },
// ];

// // {
// //     totalKeuntungan: 'Rp. 10.000.000',
// //     totalModal: 'Rp.6.000.000',
// //     peresentaseKeuntungan: 'BUKU TERLARIS BERDASARKAN DATA DIATAS',
// //     penulisTerlaris: 'PENULIS TERLARIS BERDASARKAN DATA DIATAS'
// // }

// function getInfoPenjualan(dataPenjualan) {

// }

// console.log(getInfoPenjualan(dataPenjualanNovel));

// ----------------------------------------------------------------------------------------------------- //

// var voters = [
//     { name: "Bob", age: 30, voted: true },
//     { name: "Jake", age: 32, voted: true },
//     { name: "Kate", age: 25, voted: false },
//     { name: "Sam", age: 20, voted: false },
//     { name: "Phil", age: 21, voted: true },
//     { name: "Ed", age: 55, voted: true },
//     { name: "Tami", age: 54, voted: true },
//     { name: "Mary", age: 31, voted: false },
//     { name: "Becky", age: 43, voted: false },
//     { name: "Joey", age: 41, voted: true },
//     { name: "Jeff", age: 30, voted: true },
//     { name: "Zack", age: 19, voted: false }
//   ];
  
//   const voterResults = (votes) => {
//     const reducedObject = votes.reduce(
//       (a, b) => {
//         if (b.age >= 18 && b.age <= 25 && b.voted) {
//           // Young Voter
//           a.numYoungVotes++;
//         }
//         if (b.age >= 18 && b.age <= 25) {
//           // Mid Voter
//           a.numYoungPeople++;
//         }
//         if (b.age >= 26 && b.age <= 35 && b.voted) {
//           // Old Voter
//           a.numMidVotesPeople++;
//         }
//         if (b.age >= 26 && b.age <= 35) {
//           a.numMidsPeople++;
//         }
//         if (b.age >= 36 && b.age <= 55 && b.voted) {
//           a.numOldVotesPeople++;
//         }
//         if (b.age >= 36 && b.age <= 55) {
//           a.numOldsPeople++;
//         }
//         return { ...a };
//       },
//       {
//         numYoungVotes: 0,
//         numYoungPeople: 0,
//         numMidVotesPeople: 0,
//         numMidsPeople: 0,
//         numOldVotesPeople: 0,
//         numOldsPeople: 0
//       }
//     );
//     return reducedObject;
//   };
  
//   console.log(voterResults(voters));
  

// ------------------------------------------------------------------ //
// Durations are in minutes
 

let users = [{
          idProduct: 'BOOK002421',
          namaProduk: 'Pulang - Pergi',
          penulis: 'Tere Liye',
          hargaBeli: '60000',
          hargaJual: '86000',
          totalTerjual: 150,
          sisaStok: 17,
      },
      {
          idProduct: 'BOOK002351',
          namaProduk: 'Selamat Tinggal',
          penulis: 'Tere Liye',
          hargaBeli: '75000',
          hargaJual: '103000',
          totalTerjual: 171,
          sisaStok: 20,
      },
      {
          idProduct: 'BOOK002941',
          namaProduk: 'Garis Waktu',
          penulis: 'Fiersa Besari',
          hargaBeli: '67000',
          hargaJual: '99000',
          totalTerjual: 213,
          sisaStok: 5,
      },
      {
          idProduct: 'BOOK002941',
          namaProduk: 'Laskar Pelangi',
          penulis: 'Andrea Hirata',
          hargaBeli: '55000',
          hargaJual: '66000',
          totalTerjual: 20,
          sisaStok: 56,
      },
  ];

let grouped = users.reduce((result, user) => {

    (result[user.penulis] || (result[user.penulis] = [])).push(user);  
    return result;
}, {});

console.log(grouped);