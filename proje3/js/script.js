let isimler = JSON.parse(localStorage.getItem('isim'));
let soyisimler = JSON.parse(localStorage.getItem('soyisim'));
let sehirler = JSON.parse(localStorage.getItem('sehir'));
let mailAdresleri = JSON.parse(localStorage.getItem('email'));

$(document).ready(function () {

    if (JSON.parse(localStorage.getItem('isim')) == null) {
        isimler = [];
        soyisimler = [];
        sehirler = [];
        mailAdresleri = [];
    }

    let i = isimler.length;
    $("#gif").hide();
    $("#kaydetButonu").click(function () {

        let isim = $("#isim");
        let soyisim = $("#soyisim");
        let sehir = $("#sehir");
        let email = $("#email");
        let gif = $("#gif");



        $("#gif").show();
        setTimeout(function () { $("#gif").hide(2000);}, 2000);


        isimler[i] = isim.val();
        soyisimler[i] = soyisim.val();
        sehirler[i] = sehir.val();
        mailAdresleri[i] = email.val();

        localStorage.setItem('isim', JSON.stringify(isimler));
        localStorage.setItem('soyisim', JSON.stringify(soyisimler));
        localStorage.setItem('sehir', JSON.stringify(sehirler));
        localStorage.setItem('email', JSON.stringify(mailAdresleri));


        i++;

    });


});