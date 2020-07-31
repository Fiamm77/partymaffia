let videosDb = [
    {
        "id": 1,
        "title": "Happy",
        "src": "https://www.youtube.com/embed/hqiNL8jVmZI",
        "pict": "./pics/happy.jpg"
    },
    {
        "id": 2,
        "title": "Highway to hell",
        "src": "https://www.youtube.com/embed/8fBWTfxn2Nk",
        "pict": "./pics/highway.jpg",
    },
    {
        "id": 3,
        "title": "Je veux",
        "src": "https://www.youtube.com/embed/--RRjfIDkcM",
        "pict": "./pics/je-veux.jpg",
    },
    {
        "id": 4,
        "title": "utolsó nyár",
        "src": "https://www.youtube.com/embed/aJthpk4AREM",
        "pict": "./pics/utolso-nyar.jpg",
    },
    {
        "id": 5,
        "title": "utolsó nyár",
        "src": "https://www.youtube.com/embed/aJthpk4AREM",
        "pict": "./pics/utolso-nyar.jpg",
    },
    {
        "id": 6,
        "title": "utolsó nyár",
        "src": "https://www.youtube.com/embed/aJthpk4AREM",
        "pict": "./pics/utolso-nyar.jpg",
    },
    {
        "id": 7,
        "title": "legújabb",
        "src": "https://www.youtube.com/embed/hqiNL8jVmZI",
        "pict": "./pics/happy.jpg"
    }
]

var i, newDiv, newImg, newP, newH, parentDivVar, videoId

function makeDiv(classElement, parentElement) {
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", classElement);
    newDiv.setAttribute("id", i);
    parentElement.appendChild(newDiv)
}
function makeImg(classElement, parentElement) {

    let tbDiv = document.createElement("div");
    tbDiv.setAttribute("id", i)
    tbDiv.setAttribute("class", classElement);
    let vidBtn = document.createElement("i");
    vidBtn.setAttribute("class", "far fa-play-circle imageBtn");
    vidBtn.setAttribute("id", i);
    let arr = videosDb[i];
    newImg = "url('" + arr.pict + "')";
    tbDiv.style.backgroundImage = newImg;
    tbDiv.appendChild(vidBtn);
    parentElement.appendChild(tbDiv)
}


function makeP(classElement, parentElement) {
    newP = document.createElement("p");
    newP.innerText = "MUSIC VIDEOS";
    newP.setAttribute("class", classElement);
    newP.setAttribute("id", i);
    parentElement.appendChild(newP)
}
function makeH(classElement, parentElement) {
    newH = document.createElement("h2");
    let arr = videosDb[i];
    newH.innerHTML = arr.title;
    newH.setAttribute("class", classElement);
    newH.setAttribute("id", i);
    parentElement.appendChild(newH)

}

function makeVideos() {


    parentDivVar = document.querySelector(".row");
    for (i = videosDb.length - 1; i > -1; i--) {
        makeDiv("col-12 col-md-6 videoDiv", parentDivVar);
        makeImg("vidImg", newDiv);
        makeP("videoP", newDiv);
        makeH("videoH", newDiv);
        newDiv.addEventListener("click", function (event) {
            videoId = event.target.id;
            let videoSrc=videosDb[videoId].src;
            let videoTitle=videosDb[videoId].title;
            localStorage.url=videoSrc;
            localStorage.title=videoTitle;
            window.location.href="videoplayer.html";
  
            
        });
        newDiv.addEventListener("mouseover", function (event2) {
            videoId = event2.target.id
            newDiv.style.cursor=("pointer")
            let targetId = parseInt(videoId);
            let classTarget = document.querySelectorAll(".far");
            let hossz = videosDb.length;
            let targetIdFinal = hossz - 1 - videoId;
            targetBtn = classTarget[targetIdFinal];
            let attr = targetBtn.className;
           
            if (attr = ("far fa-play-circle imageBtn")){
                targetBtn.classList.remove("far");
                let btnCass=targetBtn.className;
              
                targetBtn.classList.remove("fa-play-circle");
                btnCass=targetBtn.className;
               
                targetBtn.classList.remove("imageBtn");
                btnCass=targetBtn.className;
             
                targetBtn.setAttribute("class", "far fa-play-circle imageBtnHover")
                btnCass=targetBtn.className;
               
            }
        })

        newDiv.addEventListener("mouseout", function (event3) {
            videoId = event3.target.id
            let targetId = parseInt(videoId);
            let classTarget = document.querySelectorAll(".far");
            let hossz = videosDb.length;
            let targetIdFinal = hossz - 1 - videoId;
            targetBtn = classTarget[targetIdFinal];
            let attr = targetBtn.className;
           
            if (attr = ("far fa-play-circle imageBtnHover")){
                targetBtn.classList.remove("far");
                let btnCass=targetBtn.className;
              
                targetBtn.classList.remove("fa-play-circle");
                btnCass=targetBtn.className;
               
                targetBtn.classList.remove("imageBtnHover");
                btnCass=targetBtn.className;
             
                targetBtn.setAttribute("class", "far fa-play-circle imageBtn")
                btnCass=targetBtn.className;
               
            }
        })


        

    }
}

function setYtUrl(){
         let setSrc=localStorage.url
         let setTitle=localStorage.title
         delete localStorage.url
         delete localStorage.title
         ytFrame.src=setSrc;
         ytTitle.innerText=setTitle;
    
}