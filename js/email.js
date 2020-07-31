function loadAvgs(){
  
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gabor.logisztika@gmail.com',
      pass: 'B0rc12008'
    }
  });
  var mailSender=document.getElementById("inputEmail").value
  var name=document.getElementById("inputName").value
  var mailSubject=(name+" üzenetet küldött a www.partymaffia.band oldalról")
  var mailText=document.getElementById("inputText").value

  
  var mailOptions = {
    from: mailSender,
    to: 'gabor.logisztika@gmail.com',
    subject: mailSubject,
    text: mailText
  };
}

function sendEmail() {
    let email = document.querySelector("#inputEmail").value;

    ValidateEmail(email);



}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    loadAvgs()
    if (inputText.match(mailformat)) {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
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
    var email = document.getElementById("inputEmail")
    alarm.innerHTML = ("")
    email.value = ("")


}