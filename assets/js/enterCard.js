document.getElementById("cardsarea").innerHTML = ""

for (let i = 0; i < stadions.length; i++) {
    var example1_carddiv = document.createElement("div")
    example1_carddiv.setAttribute("class", "example-1 cardsarea col-sm-12 col-md-6 col-lg-4 col-xl-4")

    var wrapperdiv = document.createElement("div")
    wrapperdiv.setAttribute("class", "wrapper")
    wrapperdiv.setAttribute("onclick", "stadiumCardsPopup();")


    var datadiv = document.createElement("div")
    datadiv.setAttribute("class", "data")

    var contentdiv = document.createElement("div")
    contentdiv.setAttribute("class", "content")

    var namespan = document.createElement("h2")
    namespan.setAttribute("class", "name")
    namespan.innerHTML = stadions[i].name;

    var infoh1 = document.createElement("h3")
    infoh1.setAttribute("class", "info")
    infoh1.innerHTML = `Qiymət: ${stadions[i].price} AZN` + '<br>' + `Ölçü: ${stadions[i].size}`;

    var textdiv = document.createElement("p")
    textdiv.setAttribute("class", "text")
    textdiv.innerHTML = stadions[i].city + " şəhəri, " + stadions[i].district + " r., " + stadions[i].metro + " metrosu yaxınlığında yerləşən,  yüksək standartlara cavab verən " + stadions[i].name + " idman kompleksi. Burada siz öz asudə vaxtınızı ..."

    example1_carddiv.append(wrapperdiv)
    wrapperdiv.append(datadiv)
    contentdiv.append(namespan)
    contentdiv.append(infoh1)
    contentdiv.append(textdiv)
    datadiv.append(contentdiv)
    document.getElementById("cardsarea").append(example1_carddiv);
    document.querySelectorAll('.wrapper')[i].style.backgroundImage = 'url(https://kamilgaribov.github.io/stadion.az/stadium_images/cards/' + (i+1) + '.jpg)';
};


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