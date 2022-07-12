// Sistem Tema
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
}
else {
document.documentElement.classList.remove('dark')
}

const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', function () {
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

// Sistem Formulir
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGnVhpDwqszlnCK243RFDblfDGl8HIw3HHtP8AmU-zskNwS1Zp44G-UvJ9lFekS-ij/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        PopupBox('Pesan Telah Terkirim');
        form.reset();
        LoadMenu.classList.add('invisible')
    })
    .catch(error => {
        console.error('Error!', error.message);
        PopupBox('PESAN GAGAL TERKIRIM!')
    })
    AnimationButtons()
})

// Kostum Pop Up Box
const popup = document.getElementById('popup')

function PopupBox (pesan = 'Terima Kasih') {
    document.getElementById('popupitem').innerText = pesan
    popup.classList.remove('invisible')
}

function ClosePopup () {
    popup.classList.add('invisible')
}

// Animasi Tombol Kirim
const LoadMenu = document.getElementById('loading')

function AnimationButtons() {
    LoadMenu.classList.remove('invisible')
}

// Sambutan Pengunjung Baru
const CacheLogIn = "NUMBER";

function Sambutan() {
    if (typeof(Storage) !== "undefined") {
        if ((localStorage.getItem(CacheLogIn) === "undefined") || (localStorage.getItem(CacheLogIn) === null)) {
            PopupBox("Hai Pengunjung Baru\n\nSelamat Datang!");
            localStorage.setItem(CacheLogIn, true);
        }
    }
}

Sambutan();
