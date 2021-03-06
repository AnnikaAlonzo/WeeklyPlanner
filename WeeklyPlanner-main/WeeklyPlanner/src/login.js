
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgLogin = document.createElement("div");
bgLogin.id = "bgLogin";
bgLogin.style.left = "0px";
bgLogin.style.top = "0px";
bgLogin.style.width = "1440px";
bgLogin.style.height = "1024px";
bgLogin.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgLogin);

var loginBox = document.createElement("div");
loginBox.id = "loginBox";
loginBox.style.width = "609.12px";
loginBox.style.height = "722px";
loginBox.style.left = "415px";
loginBox.style.top = "151px";
loginBox.style.position = "absolute";
contentContainer.appendChild(loginBox);

var logRect = document.createElement("div");
logRect.id = "logRect";
logRect.style.left = "0px";
logRect.style.top = "0px";
logRect.style.width = "599px";
logRect.style.height = "724px";
logRect.style.border = "1px solid #000203";
logRect.style.background = 'rgba(255,255,255,0)';
logRect.style.background = "linear-gradient(-90deg , rgba(252.88,252.88,252.88,1) 0%, rgba(255,233.75,233.75,0) 100%)";

loginBox.appendChild(logRect);

var rightLine = document.createElement("img");
rightLine.id = "rightLine";
rightLine.style.left = "351px";
rightLine.style.top = "534px";
rightLine.style.width = "244px";
rightLine.style.height = "1px";
rightLine.src = "skins/vector_2.png";

loginBox.appendChild(rightLine);

var message = document.createElement("div");
message.innerHTML = "";
message.style.textAlign = "left";
message.id = "message";
message.style.left = "508px";
message.style.top = "500px";
message.style.width = "390px";
message.style.height = "90px";
message.style.fontFamily = "Roboto";
message.style.fontSize = "24px";
message.style.overflow = "hidden";
message.position = "absolute";
message.style.color = "#000000";

contentContainer.appendChild(message);

var leftLine = document.createElement("img");
leftLine.id = "leftLine";
leftLine.style.left = "1px";
leftLine.style.top = "535px";
leftLine.style.width = "253px";
leftLine.style.height = "1px";
leftLine.src = "skins/vector_1.png";

loginBox.appendChild(leftLine);

var or = document.createElement("div");
or.innerHTML = "OR";
or.style.textAlign = "left";
or.id = "or";
or.style.left = "286px";
or.style.top = "521px";
or.style.width = "46px";
or.style.height = "47px";
or.style.fontFamily = "Roboto";
or.style.fontSize = "24px";
or.style.textShadow = "0px 0px 1px #000203";
or.style.overflow = "hidden";
or.style.color = "#8A7E7E";

loginBox.appendChild(or);

var accountLogin = document.createElement("div");
accountLogin.innerHTML = "Account Login";
accountLogin.style.textAlign = "left";
accountLogin.id = "accountLogin";
accountLogin.style.left = "145px";
accountLogin.style.top = "83px";
accountLogin.style.width = "332px";
accountLogin.style.height = "90px";
accountLogin.style.fontFamily = "Roboto";
accountLogin.style.fontSize = "48px";
accountLogin.style.overflow = "hidden";
accountLogin.style.color = "#000000";

loginBox.appendChild(accountLogin);

var passwordBox = document.createElement("div");
passwordBox.id = "passwordbox";
passwordBox.style.width = "406px";
passwordBox.style.height = "45px";
passwordBox.style.left = "96px";
passwordBox.style.top = "288px";
passwordBox.style.position = "absolute";
loginBox.appendChild(passwordBox);

var passRect = document.createElement("div");
passRect.id = "passRect";
passRect.style.left = "0px";
passRect.style.top = "0px";
passRect.style.width = "408px";
passRect.style.height = "47px";
passRect.style.border = "1px solid #000203";
passRect.style.background = 'rgba(255,252.88,252.88,1)';

passwordBox.appendChild(passRect);

var password = document.createElement("div");
password.innerHTML = "Password";
password.style.textAlign = "left";
password.id = "password";
password.style.left = "46px";
password.style.top = "8px";
password.style.width = "118px";
password.style.height = "45px";
password.style.fontFamily = "Roboto";
password.style.fontSize = "24px";
password.style.overflow = "hidden";
password.style.color = "#000000";

passwordBox.appendChild(password);

var image2 = document.createElement("img");
image2.id = "image2";
image2.style.left = "6px";
image2.style.top = "5px";
image2.style.width = "30px";
image2.style.height = "32px";
image2.src = "skins/image_2_ek1.png";

passwordBox.appendChild(image2);

var emailBox = document.createElement("div");
emailBox.id = "emailBox";
emailBox.style.width = "406px";
emailBox.style.height = "45px";
emailBox.style.left = "96px";
emailBox.style.top = "217px";
emailBox.style.position = "absolute";
loginBox.appendChild(emailBox);

var emailRect = document.createElement("div");
emailRect.id = "emailRect";
emailRect.style.left = "0px";
emailRect.style.top = "0px";
emailRect.style.width = "408px";
emailRect.style.height = "47px";
emailRect.style.border = "1px solid #000000";
emailRect.style.background = 'rgba(255,255,255,1)';

emailBox.appendChild(emailRect);

var image_1 = document.createElement("img");
image_1.id = "image_1";
image_1.style.left = "6px";
image_1.style.top = "9px";
image_1.style.width = "31px";
image_1.style.height = "31px";
image_1.src = "skins/image_1.png";

emailBox.appendChild(image_1);

var registerButton = document.createElement("div");
registerButton.id = "registerButton";
registerButton.style.width = "513.12px";
registerButton.style.height = "66px";
registerButton.style.left = "96px";
registerButton.style.top = "597px";
registerButton.style.position = "absolute";
loginBox.appendChild(registerButton);

var regButtonRect = document.createElement("div");
regButtonRect.id = "regButtonRect";
regButtonRect.style.left = "0px";
regButtonRect.style.opacity = "100";
regButtonRect.style.filter = "alpha(opacity='0')";
regButtonRect.style.top = "0px";
regButtonRect.style.width = "414px";
regButtonRect.style.height = "74px";
regButtonRect.style.border = "4px solid #000203";
regButtonRect.style.background = 'rgba(196,196,196,0)';

registerButton.appendChild(regButtonRect);

var register = document.createElement("div");
register.innerHTML = "REGISTER NOW";
register.style.textAlign = "center";
register.id = "register";
register.style.left = "0px";
register.style.top = "24px";
register.style.width = "420.12px";
register.style.height = "62.62px";
register.style.fontFamily = "Roboto";
register.style.fontSize = "24px";
register.style.overflow = "hidden";
register.style.color = "#000000";
register.style.cursor = "pointer";
register.addEventListener("click", gotoRegister);

function gotoRegister() {
    location.href="register.html"
}

registerButton.appendChild(register);

var username;

$(document).ready(function(){
    console.log("ddd");
    $('#form').submit(function(e){
        console.log("sd made");
        username = document.getElementById('email').value;
        var password = document.getElementById('pass').value;
        e.preventDefault();
        $.ajax({
            type: "POST",
            url:"login.php",
            data:
            {
                email: username,
                pass: password
            },
            success:function(result){
                if(result == 1){
                    document.getElementById('message').innerHTML = "Login Successful";
                    getName();
                    setTimeout(() => {location.href= "main2.html";},2000);
                }else{
                    document.getElementById('message').innerHTML = result;
                }
            }
        })
    });
});

function getName(){
    $.ajax({
        type:"POST",
        url:"getName.php",
        data:{email: username},
        success:function(result){
            sessionStorage.setItem("currentUser",result);
        }
    })
}