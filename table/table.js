var tdarr = document.querySelectorAll("td")
var saat = 12

for(let i=0; i<tdarr.length; i++){
    if(tdarr[i].innerText == ""){
        tdarr[i].innerText = saat + ":00"
        tdarr[i].setAttribute("class", "transparent")
        saat++
        var trueimg = document.createElement("img")
        var falseimg = document.createElement("img")
        trueimg.src = "table/true.png"
        falseimg.src = "table/false.png"
        trueimg.style.maxWidth = "25px"
        falseimg.style.maxWidth = "25px"

        if(i%2==0 && (i%3==0 || i%5==0)){
            tdarr[i].innerText = "dolu"
            tdarr[i].append(falseimg)
        }
        else{
            tdarr[i].append(trueimg)
        }
    }
    else{
        tdarr[i].setAttribute("id", "gradient")
    }
    if(saat == 24){
        saat = 12
    }
}

for(let i=0; i<tdarr.length; i++){
    if(i>12 && i!=13 && i!=26 && i!=39 && i!=52 && i!=65 && i!=78 && i!=91){
        tdarr[i].addEventListener("click", function(){
            if(this.innerText != "dolu"){
                var sifaris = this.innerText
                document.querySelector("#stadium_info_time span").innerText = sifaris
                document.querySelector('.table_popup').classList.remove('open');
            }
            else{
                alert("Seçdiyiniz saat uyğun deyil")
            }
        })
    }
};