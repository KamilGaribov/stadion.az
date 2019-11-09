var cityselect = document.createElement("select")
var city1 = document.createElement("option")
city1.innerHTML = "Şəhər"
cityselect.append(city1)
var cities = []
for (let i = 0; i < stadions.length; i++) {
    if (cities.indexOf(stadions[i].city) == -1) {
        var cityoption = document.createElement("option")
        cityoption.innerHTML = stadions[i].city
        cityselect.append(cityoption)
        cities.push(stadions[i].city)
    }
}
document.getElementById("options").append(cityselect)

var districtselect = document.createElement("select")
var district1 = document.createElement("option")
district1.innerHTML = "Rayon"
districtselect.append(district1)
var districts = []
for (let i = 0; i < stadions.length; i++) {
    if (districts.indexOf(stadions[i].district) == -1) {
        var districtoption = document.createElement("option")
        districtoption.innerHTML = stadions[i].district
        districtselect.append(districtoption)
        districts.push(stadions[i].district)
    }
}
document.getElementById("options").append(districtselect)


var metroselect = document.createElement("select")
var metro1 = document.createElement("option")
metro1.innerHTML = "Metro"
metroselect.append(metro1)
var metros = []
for (let i = 0; i < stadions.length; i++) {
    if (metros.indexOf(stadions[i].metro) == -1) {
        var metrooption = document.createElement("option")
        metrooption.innerHTML = stadions[i].metro
        metroselect.append(metrooption)
        metros.push(stadions[i].metro)
    }
}
document.getElementById("options").append(metroselect)

var floorselect = document.createElement("select")
var floor1 = document.createElement("option")
floor1.innerHTML = "Örtük"
floorselect.append(floor1)
var floors = []
for (let i = 0; i < stadions.length; i++) {
    if (floors.indexOf(stadions[i].floor) == -1) {
        var flooroption = document.createElement("option")
        flooroption.innerHTML = stadions[i].floor
        floorselect.append(flooroption)
        floors.push(stadions[i].floor)
    }
}
document.getElementById("options").append(floorselect)

var sizeselect = document.createElement("select")
var size1 = document.createElement("option")
size1.innerHTML = "Ölçü"
sizeselect.append(size1)
var sizes = []
for (let i = 0; i < stadions.length; i++) {
    if (sizes.indexOf(stadions[i].size) == -1) {
        var sizeoption = document.createElement("option")
        sizeoption.innerHTML = stadions[i].size
        sizeselect.append(sizeoption)
        sizes.push(stadions[i].size)
    }
}
document.getElementById("options").append(sizeselect)


var coverselect = document.createElement("div")
coverselect.innerText = "Qapali"
var coverradio = document.createElement("input")
coverradio.type = "checkbox"
coverselect.append(coverradio)
document.getElementById("radios").append(coverselect)

var cafeselect = document.createElement("div")
cafeselect.innerText = "Kafe"
var caferadio = document.createElement("input")
caferadio.type = "checkbox"
cafeselect.append(caferadio)
document.getElementById("radios").append(cafeselect)

var videoselect = document.createElement("div")
videoselect.innerText = "Video"
var videoradio = document.createElement("input")
videoradio.type = "checkbox"
videoselect.append(videoradio)
document.getElementById("radios").append(videoselect)

var parkselect = document.createElement("div")
parkselect.innerText = "Parking"
var parkradio = document.createElement("input")
parkradio.type = "checkbox"
parkselect.append(parkradio)
document.getElementById("radios").append(parkselect)


function axtaris(){
    var cityval = document.querySelector("#options select:nth-child(1)").value
    var districtval = document.querySelector("#options select:nth-child(2)").value
    var metroval = document.querySelector("#options select:nth-child(3)").value
    var floorval = document.querySelector("#options select:nth-child(4)").value
    var sizeval = document.querySelector("#options select:nth-child(5)").value
    var coverval = document.querySelector("#radios div:nth-child(1) input").checked
    var cafeval = document.querySelector("#radios div:nth-child(2) input").checked
    var videoval = document.querySelector("#radios div:nth-child(3) input").checked
    var parkval = document.querySelector("#radios div:nth-child(4) input").checked

    var testarr = []
    var myarr = []

    if(cityval != "Şəhər"){
        testarr.push("city")
        myarr.push(cityval)
    }
    if(districtval != "Rayon"){
        testarr.push("district")
        myarr.push(districtval)
    }
    if(metroval != "Metro"){
        testarr.push("metro")
        myarr.push(metroval)
    }
    if(floorval != "Örtük"){
        testarr.push("floor")
        myarr.push(floorval)
    }
    if(sizeval != "Ölçü"){
        testarr.push("size")
        myarr.push(sizeval)
    }
    if(coverval != false){
        testarr.push("cover")
        myarr.push(coverval)
    }
    if(cafeval != false){
        testarr.push("cafe")
        myarr.push(cafeval)
    }
    if(videoval != false){
        testarr.push("video")
        myarr.push(videoval)
    }
    if(parkval != false){
        testarr.push("park")
        myarr.push(parkval)
    }
    var lastarr = []
    for(let i=0; i<stadions.length; i++){
        for(let j=0; j<testarr.length; j++){
            if(stadions[i][testarr[j]] == myarr[j]){
                lastarr.push(stadions[i].name)
            }
        }
    }

    var count = 0
    var finalarr = []

    for(let i=0; i<lastarr.length; i++){
        for(let j=0; j<lastarr.length; j++){
            if(lastarr[i] == lastarr[j]){
                count++
            }
        }
        if(count == myarr.length){
            if(finalarr.indexOf(lastarr[i]) == -1){
                finalarr.push(lastarr[i])
            }
        }
        count = 0
    }
    console.log(finalarr)
    var secondData = otherProject.database().ref();
    secondData.set({
        sentdata: finalarr
    })
};



function axtaris2() {
    document.getElementById("cardsarea").innerHTML = ""

    var cityval = document.querySelector("#options select:nth-child(1)").value
    var districtval = document.querySelector("#options select:nth-child(2)").value
    var metroval = document.querySelector("#options select:nth-child(3)").value
    var floorval = document.querySelector("#options select:nth-child(4)").value
    var sizeval = document.querySelector("#options select:nth-child(5)").value
    var coverval = document.querySelector("#radios div:nth-child(1) input").checked
    var cafeval = document.querySelector("#radios div:nth-child(2) input").checked
    var videoval = document.querySelector("#radios div:nth-child(3) input").checked
    var parkval = document.querySelector("#radios div:nth-child(4) input").checked

    var testarr = []
    var myarr = []

    if(cityval != "Şəhər"){
        testarr.push("city")
        myarr.push(cityval)
    }
    if(districtval != "Rayon"){
        testarr.push("district")
        myarr.push(districtval)
    }
    if(metroval != "Metro"){
        testarr.push("metro")
        myarr.push(metroval)
    }
    if(floorval != "Örtük"){
        testarr.push("floor")
        myarr.push(floorval)
    }
    if(sizeval != "Ölçü"){
        testarr.push("size")
        myarr.push(sizeval)
    }
    if(coverval != false){
        testarr.push("cover")
        myarr.push(coverval)
    }
    if(cafeval != false){
        testarr.push("cafe")
        myarr.push(cafeval)
    }
    if(videoval != false){
        testarr.push("video")
        myarr.push(videoval)
    }
    if(parkval != false){
        testarr.push("park")
        myarr.push(parkval)
    }
    var lastarr = []
    for(let i=0; i<stadions.length; i++){
        for(let j=0; j<testarr.length; j++){
            if(stadions[i][testarr[j]] == myarr[j]){
                lastarr.push(stadions[i].name)
            }
        }
    }

    var count = 0
    var finalarr = []

    for(let i=0; i<lastarr.length; i++){
        for(let j=0; j<lastarr.length; j++){
            if(lastarr[i] == lastarr[j]){
                count++
            }
        }
        if(count == myarr.length){
            if(finalarr.indexOf(lastarr[i]) == -1){
                finalarr.push(lastarr[i])
            }
        }
        count = 0
    }

    for(let j=0; j<finalarr.length; j++){
        for(let i=0; i<stadions.length; i++){
            if(finalarr[j] == stadions[i].name){
                console.log(stadions[i].name)
                var example1_carddiv = document.createElement("div")
                example1_carddiv.setAttribute("class", "example-1 cardsarea col-sm-12 col-md-6 col-lg-4 col-xl-4")
            
                var wrapperdiv = document.createElement("div")
                wrapperdiv.setAttribute("class", "wrapper")
            
                var datadiv = document.createElement("div")
                datadiv.setAttribute("class", "data")
            
                var contentdiv = document.createElement("div")
                contentdiv.setAttribute("class", "content")
            
                var namespan = document.createElement("h2")
                namespan.setAttribute("class", "name")
                namespan.innerHTML = stadions[i].name + '<br>';
            
                var infoh1 = document.createElement("h3")
                infoh1.setAttribute("class", "info")
                infoh1.innerHTML = `Qiymət: ${stadions[i].price} AZN` + '<br>' + `Ölçü: ${stadions[i].size}`;
            
                var textdiv = document.createElement("p")
                textdiv.setAttribute("class", "text")
                textdiv.innerHTML = stadions[i].city + " şəhəri, " + stadions[i].district + " r., " + stadions[i].metro + " metrosu yaxınlığında yerləşən,  yüksək standartlara cavab verən " + stadions[i].name + " idman kompleksi. Burada siz öz asudə vaxtınızı ..."

                var newlink = document.createElement("a")
                newlink.setAttribute("href", "nsayli.html")

                example1_carddiv.append(wrapperdiv)
                wrapperdiv.append(datadiv)

                newlink.append(contentdiv)
                
                contentdiv.append(namespan)
                contentdiv.append(infoh1)
                contentdiv.append(textdiv)
                datadiv.append(newlink)

                document.getElementById("cardsarea").append(example1_carddiv)
            }
        }
    }


}