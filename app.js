// localStorage.setItem("kullaniciadi","mehmet");
// localStorage.setItem("sifre","mehmet");

let kullaniciAdi = localStorage.getItem("kullaniciadi");
let sifre = localStorage.getItem("sifre");

$(".girisYap").click(function (e) {
    e.preventDefault();
    let girilenKullaniciAdi = $(".kadi").val();
    let girilenSifre = $(".sifre").val();
    if (girilenKullaniciAdi == kullaniciAdi && girilenSifre == sifre) {
        window.location.href = "index.html";
    }
    else {
        alert("sifre yanliss");
    }
});








$(".KayitBtn").click(function () {

    let kayitKullanici = $(".kayitKullanici").val();
    let kayitSifre = $(".kayitsifre").val();

    if (kayitKullanici == "" || kayitSifre == "") {
        alert("kullanici adi veya sifre boş gecilemez!");
    }
    else {

        localStorage.setItem("kullaniciadi", kayitKullanici);
        localStorage.setItem("sifre", kayitSifre);
    }
});


$(".sifreUnuttum").click(function (e) {
    e.preventDefault();
    $(".login-content").hide();
    $(".sifreUnut").show();

   

});


let rndsayi = Math.round(Math.random() * 1000000);
console.log(rndsayi);

$(".checkEt").click(function(e){
    e.preventDefault();
    
    let checkInp = Number($(".checkInp").val());
    if (checkInp == rndsayi) {
        alert("doğru");
        window.location.href="sifredegis.html";
    }
});



var field = document.querySelector(".kayitKullanici");
field.addEventListener('keypress', function (event) {
    var key = event.keyCode;
    if (key === 32) {
        event.preventDefault();
    }
});
