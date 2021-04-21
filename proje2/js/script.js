let isimler = JSON.parse(localStorage.getItem('isim'));
let soyisimler = JSON.parse(localStorage.getItem('soyisim'));
let sehirler = JSON.parse(localStorage.getItem('sehir'));
let mailAdresleri = JSON.parse(localStorage.getItem('email'));

if(JSON.parse(localStorage.getItem('isim')) == null){   
    isimler = [];
    soyisimler = [];
    sehirler = [];
    mailAdresleri = [];
}

let i = isimler.length;

kaydetButonu.onclick = function () {

    let isim = document.getElementById('isim');
    let soyisim = document.getElementById('soyisim');
    let sehir = document.getElementById('sehir');
    let email = document.getElementById('email');
    let gif = document.getElementById('gif');

    gif.hidden=false;
    
    setTimeout(function(){ gif.hidden=true; }, 3000);

    isimler[i] = isim.value;
    soyisimler[i] = soyisim.value;
    sehirler[i] = sehir.value;
    mailAdresleri[i] = email.value;

    localStorage.setItem('isim', JSON.stringify(isimler));
    localStorage.setItem('soyisim', JSON.stringify(soyisimler));
    localStorage.setItem('sehir', JSON.stringify(sehirler));
    localStorage.setItem('email', JSON.stringify(mailAdresleri)); 


    i++;

}


