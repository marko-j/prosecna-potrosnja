


function potrosnjaGoriva() {

    kilometraza = document.getElementById("razdaljina").value
    vozilo = document.getElementById("auto").value
    brzina = document.getElementById("brzina").value

    switch(vozilo) {
        case "i20":
        potrosnja = 5.8
        izracunajPotrosnju(potrosnja)
        break

        case "i30":
        potrosnja = 6.5
        izracunajPotrosnju(potrosnja)
        break

        case "a3":
        potrosnja = 6.3
        izracunajPotrosnju(potrosnja)
        break

    }
    

    p1.innerText = `ZA UNETU RAZDALJINU ĆETE POTROŠITI SLEDEĆU KOLIČINU GORIVA: ${realnaPotrosnja} litara`

}


function izracunajPotrosnju(potrosnja) {

    if (brzina >= 100) {
        realnaPotrosnja = Math.floor((kilometraza / 100) * potrosnja * 1.3)
    }
    else if (brzina <= 60) {

        realnaPotrosnja = Math.floor((kilometraza / 100) * potrosnja * 1.2)
    }
    else {

        realnaPotrosnja = Math.floor((kilometraza / 100) * potrosnja)
    }


}



dugme = document.getElementById("gumb")
dugme.addEventListener("click", potrosnjaGoriva);
p1 = document.getElementById("pasus")










