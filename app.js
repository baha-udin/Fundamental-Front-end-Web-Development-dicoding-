document.addEventListener("DOMContentLoaded", main);


let firstName = prompt("siapa namamu?");
let lengkapName = prompt(`nama lengkapmu siapa ${firstName} ?`);
let alamat = prompt(`Halo ${firstName} kamu dari mana?` );
let bahasa = prompt("kalau kamu bisa berbahasa apa?");

let user = { 
    nama: {
        namaPanggilan: firstName,
        namaLengkap: lengkapName,
    },
    bahasa: bahasa
};

if (user.bahasa === "jowo"){
    alert(`Sugeng enjing ndoro ${user.nama.namaPanggilan} ...`)
} else if (user.bahasa === "Indonesa"){
    alert(`Selamat pagi bro ${user.nama.namaPanggilan}...`);
} else if (user.bahasa === "inggris"){
    alert(`Good morning Mr. ${user.nama.namaPanggilan}..`);
} else {
    alert(`Senang bertemu anda ${user.nama.namaLengkap}`)
}