// Ambil elemen input jumlah buah
const inputJumlahBuah = document.querySelector('input[type="text"]');

// Ambil elemen yang menampilkan jumlah buah manggis
const jumlahBuahManggis = document.getElementById("jumlah-buah manggis");

// Ambil tombol beli
const tombolBeli = document.querySelector(".beli");

// Tambahkan event listener pada tombol beli
tombolBeli.addEventListener("click", function () {
  // Ambil nilai yang dimasukkan oleh pengguna
  const jumlahYangDibeli = parseInt(inputJumlahBuah.value);

  // Ambil jumlah buah manggis yang tersedia saat ini
  const sisaBuahManggis = parseInt(jumlahBuahManggis.textContent);

  // Hitung sisa buah setelah pembelian
  const sisaSetelahBeli = sisaBuahManggis - jumlahYangDibeli;

  // Update tampilan jumlah buah manggis
  jumlahBuahManggis.textContent = sisaSetelahBeli;

  if (sisaSetelahBeli >= 1) {
    jumlahBuahManggis.textContent = sisaSetelahBeli;
  } else {
    jumlahBuahManggis.textContent = "Habis";
  }
});
