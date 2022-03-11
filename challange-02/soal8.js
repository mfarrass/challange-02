


const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  const getInfoPenjualan = (dataPenjualan) => {
  
        const totalKeuntungan = dataPenjualan.reduce(
          (acc, { totalTerjual, hargaJual, hargaBeli  }) => {acc += (totalTerjual) * (hargaJual - hargaBeli) ;
            return acc;},0);
  
        const totalModal = dataPenjualan.reduce(
          (acc, {totalTerjual, sisaStok, hargaBeli}) => {acc += (sisaStok + totalTerjual) * hargaBeli;
          return acc;},0); 
  
        const persentaseKeuntungan = totalKeuntungan / totalModal * 100;
  
        const bukuTerlaris = dataPenjualan.reduce(
          (prev,curr) => curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.namaProduk
        )
        
        const penulisTerlaris = dataPenjualan.reduce(
          (prev,curr) =>( curr.totalTerjual > (prev.totalTerjual||0) ? curr : prev.penulis)) 
  
          return {
            totalKeuntungan: `Rp. ${new Intl.NumberFormat('id-ID').format(Math.floor(totalKeuntungan))}`,
            totalModal: `Rp. ${new Intl.NumberFormat('id-ID').format(Math.floor(totalModal))}`,
            persentaseKeuntungan : `${(persentaseKeuntungan).toFixed(2)} %`,
            bukuTerlaris: `${bukuTerlaris}`,
            penulisTerlaris: `${penulisTerlaris}`,
          }
      }
  console.log(getInfoPenjualan(dataPenjualanNovel))
  
