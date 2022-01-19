// NOMER 1
// Define the variable with the value
console.log(`SOAL NOMER 1`);
let p = 20.5
let l = 30
harga = 1500000
console.log(`Panjang = ${p}`);
console.log(`Lebar = ${l}`);
console.log(`Harga Per-Meter = ${harga}`);
console.log(``);
// create the calculation
let luas = p * l
console.log(`Luas = ${luas}`);

// create harga with ppn
total = (luas*harga)
ppn = (luas * harga) * 15/100
harga_akhir = total + ppn
console.log(`Total Harga = ${harga_akhir}`);

// NOMER 2
// define array
barang = [
    {nama: `Beras`, harga: 10000, jumlah: 5},
    {nama: `Gula`, harga: 14000, jumlah: 5},
    {nama: `Telur`, harga: 20000, jumlah: 2},
    {nama: `Minyak Goreng`, harga: 9000, jumlah: 10}
]