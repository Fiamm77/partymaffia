

function fEmailSubmit() {
    let email = document.querySelector("#inputEmail").value;

    ValidateEmail(email)

}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        sendData()
        return true;
    }
    else {
        var targetDiv = document.getElementById("mailDiv")
        let alarm = document.createElement("div");
        const elements = document.getElementsByClassName("alertDiv");

while (elements.length > 0) elements[0].remove();
        alarm.className = "alertDiv"
     
        alarm.innerHTML = "Bocsi, nem megfelelő mailcím"
        targetDiv.appendChild(alarm)

        return false;
    }
}

function resetAlarm() {
    var alarm = document.getElementById("mailDiv")
    var mailAdress=document.getElementById("inputEmail")
    alarm.innerHTML = ("")
    window.location.reload
    return false

}

function sendData(){
    let data ={}
    data["id"]=("")
    data["email"]= document.querySelector("#inputEmail").value
    console.log(data)
    let dataFetch={
        method: "POST",
        mode:"cors",
        cache:"no-cache",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:3000/list', dataFetch).then(
        resp=> resp.json,
        mist=> console.error(mist)
    ).then(
        data=>console.log(data)
    );

}

function makeArtist(sourceDiv, targetHTML, picSrc, artistName, artistInstrument ){
    let artistDiv=document.createElement("div");
    artistDiv.setAttribute("class", "col-12 col-md-6 col-lg-4");
    let pictDiv=document.createElement("div");
    pictDiv.setAttribute("class", "container");
    let artistAnc=document.createElement("a");
    artistAnc.src=targetHTML;
    let artistPict=createdElement("img");
    artistPict.setAttribute=("class", "image");
    artistPict.src=picSrc;
    artistAnc.innerHTML=artistPict;
    let overlayDiv=document.createElement("div");
    overlayDiv.setAttribute=("class", "overlay");
    pictDiv.appendChild(artistAnc);
    pictDiv.appendChild(overlayDiv);
    sourceDiv.appendChild(pictDiv)
}



