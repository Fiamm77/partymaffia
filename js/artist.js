let artistDb = [
    {
        "id": 1,
        "name": "Czeglédi-Nagy Zsófia",
        "inst": "Ének",
        "pictOut": "./pics/ok_zsozso.jpg",
        "pictIn": "./pics/sophie.jpg",
        "text": "Zsófia hivatásos muzsikusként tervezi és éli az életét. Jazz basszusgitár és ének szakon fog diplomázni hamarosan, emellett 12 idegen nyelvet beszél. Rajong a rockzenéért, Guns 'n' roses tribute zenekar frontembere, lexikális tudása, intellektusa és korát meghazudtoló profizmusa, valamint nőiessége csodásan csillog a zenekar élén.",

    },
    {
        "id": 2,
        "name": "Fecske Dávid",
        "inst": "Gitár, ének",
        "pictOut": "./pics/david.jpg",
        "pictIn": "./pics/davidInner.jpg",
        "text": "Zenész, színész, csepűrágó.",

    },
    {
        "id": 3,
        "name": "Károlyi László",
        "inst": "Billentyűs hangszerek, ének",
        "pictOut": "./pics/ok_laci-1.jpg",
        "pictIn": "./pics/laci_portrait.jpg",
        "text": "Főnök, álomgyáros",

    },
    {
        "id": 4,
        "name": "Ladányi Péter",
        "inst": "Szaxofon",
        "pictOut": "./pics/ok_pepe.jpg",
        "pictIn": "./pics/peti_portrait.jpg",
        "text": "Péter diplomás, hivatásos zenész, klarinét, tenor, alt, szoprán szaxofonokon játszik, elképesztő zenei és lexikális tudása van. Rendkívül felkészült technikailag is, zeneileg is. Egy országos ismertség sztár zenekarából igazolt a Maffiához, ezen kívül a Magyar Légierő zenekarában fúj, rangja őrmester.<br>A zenekar lexikonja, mindenre figyel, mindent megjegyez és ez a maximalizmus megvan a munkájában is.<br>Ugyanakkor akkora szenvedéllyel tud becsúszni a körben táncolók közé térden egy szaxofonszólója közepette, hogy csak lesünk.",

    },
    {
        "id": 5,
        "name": "Mészáros Gábor",
        "inst": "Basszusgitár",
        "pictOut": "./pics/ok_gabor.jpg",
        "pictIn": "./pics/gabor.jpg",
        "text": "A basszusgitár akkor jó, ha észrevehetetlen, atomstabil háttér. Gábor pont ilyen. Keveset szól, csak, amikor nagyon fontos és nagyon megalapozottat kell mondani. Egyébként a kalapjában vigyorog és ritmusra bólogat, és hozza a betont a többiek alá.<br>Remekül szervez, adottsága és természete is ilyen, logisztika diplomája csak hab a tortán. Mindig van nála tartalék kábel, tartalék elem, ő az, aki forraszt, megjavít. Ja, és ami a legfontosabb, mindig pontosan, időre, ahogy a jól szervezett rendszerekben ez szokás. Semmi sallang, semmi felesleges dolog.<br>Hangról hangra, ezredpontossággal jön a basszus a zenekar alá, nagyon könnyű dolog rápakolni erre az alapra.<br>2 gyermek boldog édesapja, és 4 hangszer boldog tulajdonosa.",

    },

    {
        "id": 6,
        "name": "Tisza Miklós",
        "inst": "Dobok",
        "pictOut": "./pics/ok_miki.jpg",
        "pictIn": "./pics/miki_portrait.jpg",
        "text": "Zeneakadémiai diplomája és maximalizmusa kapcsán Miki a világ legjobb választása számunkra. Tájékozott, fiatal kora ellenére elképesztő rutinja és stílusismerete van. Fehér kesztyűben érkezik, abban is pakolja a dobokat, mint egy sebész. Büszke apukája egy csodás kislánynak, és majdnem ennyire büszke gazdája a világ egyik legjobb dobfelszerelésének.<br>Hangszerei:<br>Yamaha Custom recording 1991",
    },

]

var i, innerArtistDiv, artistDiv, newImg, newP, newH, artistDivVar, artistId

function makeDiv() {
    artistDiv = document.createElement("div");
    artistDiv.setAttribute("class", "col-12 col-md-6 col-lg-4 contDiv");
    artistDiv.setAttribute("id", i);
    artistDivVar.appendChild(artistDiv);

    innerArtistDiv = document.createElement("div");
    innerArtistDiv.setAttribute("class", "artistDiv");
    innerArtistDiv.setAttribute("id", i);
    artistDiv.appendChild(innerArtistDiv)
}
function makeImg() {


    let artistImgDiv = document.createElement("img");
    artistImgDiv.setAttribute("class", "image");
    artistImgDiv.setAttribute("id", i);
    let arr = artistDb[i];
    newImg = arr.pictOut;
    artistImgDiv.src = newImg;
    innerArtistDiv.appendChild(artistImgDiv);
    let overlay = document.createElement("div");
    overlay.className = "ol noOverlay";
    let att = document.createAttribute("id");
    att.value = i;
    overlay.setAttributeNode(att);

    innerArtistDiv.appendChild(overlay);

}


function makeP(classElement, parentElement) {
    newP = document.createElement("p");
    let arr = artistDb[i];
    newP.innerText = arr.inst;;
    newP.setAttribute("class", "artistP");
    newP.setAttribute("id", i);
    innerArtistDiv.appendChild(newP)
}
function makeH(classElement, parentElement) {
    newH = document.createElement("h2");
    let arr = artistDb[i];
    newH.innerHTML = arr.name;
    newH.setAttribute("class", "artistH");
    newH.setAttribute("id", i);
    innerArtistDiv.appendChild(newH)

}

function makeArtists() {
    artistDivVar = document.querySelector("#artistRow");
    for (i = 0; i < artistDb.length; i++) {
        makeDiv();
        makeImg();
        makeH();
        makeP();

        artistDiv.addEventListener("click", function (event) {
            artistId = event.target.id;
            let artistPict = artistDb[artistId].pictIn;
            let artistName = artistDb[artistId].name;
            let artistInst = artistDb[artistId].inst;
            let artistText = artistDb[artistId].text;
            localStorage.pict = artistPict;
            localStorage.name = artistName;
            localStorage.inst = artistInst;
            localStorage.text = artistText;
            window.location.href = "artist.html";
        });

        artistDiv.addEventListener("mouseover", function (event2) {
            artistId = event2.target.id
            innerArtistDiv.style.cursor = ("pointer");
            let targetId = parseInt(artistId);
            let classTarget = document.querySelectorAll(".ol");
            targetOl = classTarget[targetId];
            let attr = targetOl.className;

            if (attr = ("ol noOverlay")) {
                targetOl.classList.remove("ol");
                targetOl.classList.remove("noOverlay");
                targetOl.setAttribute("class", "ol overlay")


            }
        });
        artistDiv.addEventListener("mouseout", function (event3) {
            artistId = event3.target.id
            innerArtistDiv.style.cursor = ("pointer");
            let targetId = parseInt(artistId);
            let classTarget = document.querySelectorAll(".ol");
            targetOl = classTarget[targetId];
            let attr = targetOl.className;

            if (attr = ("ol Overlay")) {
                targetOl.classList.remove("ol");
                targetOl.classList.remove("Overlay");
                targetOl.setAttribute("class", "ol noOverlay")


            }
        });
        
  






    }
}
function setArtist() {
    let artistPictSrc = localStorage.pict;
    let artistNameSrc = localStorage.name;
    let artistInstSrc = localStorage.inst;
    let artistTextSrc = localStorage.text;
    delete localStorage.pict;
    delete localStorage.name;
    delete localStorage.inst;
    delete localStorage.text;
    artistPict.src=artistPictSrc;
    artistName.innerText=artistNameSrc;
    artistInst.innerText=artistInstSrc;
    artistText.innerHTML=artistTextSrc



}