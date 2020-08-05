document.addEventListener("DOMContentLoaded", main);

// let firstName = prompt("siapa namamu?");
// let lengkapName = prompt(`nama lengkapmu siapa ${firstName} ?`);
// let alamat = prompt(`Halo ${firstName} kamu dari mana?` );
// let bahasa = prompt("kalau kamu bisa berbahasa apa?");

// let user = { 
//     nama: {
//         namaPanggilan: firstName,
//         namaLengkap: lengkapName,
//     },
//     bahasa: bahasa
// };

// if (user.bahasa === "jowo"){
//     alert(`Sugeng enjing ndoro ${user.nama.namaPanggilan} ...`)
// } else if (user.bahasa === "Indonesa"){
//     alert(`Selamat pagi bro ${user.nama.namaPanggilan}...`);
// } else if (user.bahasa === "inggris"){
//     alert(`Good morning Mr. ${user.nama.namaPanggilan}..`);
// } else {
//     alert(`Senang bertemu anda ${user.nama.namaLengkap}`)
// }

// let profile = {
//     firstName: "ken",
//     lastName: "oda",
//     age: 18
// }


// let {firstName: nama, age: umur, alamat= "Jalan Kh. Agus Salim"} = profile

// console.log(nama, umur, alamat)
// console.log(profile);

const makanan = ["Nasi goreng", "Rendang", "Gudeg", "soto"];
const makananLain = ["Kerang pedas", "Nasi Kebuli", "Oseng Mercon"];

const semuaMakanan = [...makanan, ...makananLain]

console.log(semuaMakanan);


