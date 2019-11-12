var modal = document.getElementById("etrafli")
var modaltext1 = "Bizim saytımız vasitəsi ilə siz istədiyiniz anda münasib stadionu öncədən sifariş edə bilersiniz. Bununla siz müxtəlif stadionlar arasında olan seçim çətinliyindən qurtulmaqla yanaşı həm də müəyyən qədər vaxt qazanacaqsınız."
var modaltext2 = 'Artıq qarşısıalınmaz komanda olduğunuzu sanırsınızsa saytımızın "Komandalar" bölməsi məhz sizin üçündür. Bizim istifadəçilər arasından mütləq maraqlı rəqib tapacaqsınız. Bu həm də yeni dostluqların baslanğıcı ola bilər :)'
var modaltext3 = 'Yenə bir nəfər çatmır?! "Oyunçu tap" bölməsi vasitəsi ilə artıq futbol həyəcanının qarşısı alınmazdır.'

function etrafli1(){
    document.getElementById("modaltext").innerText = modaltext1
    modal.style.display = "block"
}
function etrafli2(){
    document.getElementById("modaltext").innerText = modaltext2
    modal.style.display = "block"
}
function etrafli3(){
    document.getElementById("modaltext").innerText = modaltext3
    modal.style.display = "block"
}
window.onclick = function(){
    if(this.event.target == modal){
        this.modal.style.display = "none"
    }
} 