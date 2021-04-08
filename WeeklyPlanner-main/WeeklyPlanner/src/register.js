
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "content_container";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgRegister = document.createElement("div");
bgRegister.id = "_bg__register";
bgRegister.style.left = "0px";
bgRegister.style.top = "0px";
bgRegister.style.width = "1440px";
bgRegister.style.height = "1024px";
bgRegister.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgRegister);

var registerBox = document.createElement("div");
registerBox.id = "register_box";
registerBox.style.width = "636.12px";
registerBox.style.height = "722px";
registerBox.style.left = "402px";
registerBox.style.top = "151px";
registerBox.style.position = "absolute";
contentContainer.appendChild(registerBox);

var accRegRect = document.createElement("div");
accRegRect.id = "rectangle_2";
accRegRect.style.left = "0px";
accRegRect.style.top = "0px";
accRegRect.style.width = "599px";
accRegRect.style.height = "724px";
accRegRect.style.border = "1px solid #000000";
accRegRect.style.background = 'rgba(255,255,255,0)';
accRegRect.style.background = "linear-gradient(-90deg , rgba(249,249,250,1) 0%, rgba(255,255,255,0) 100%)";

registerBox.appendChild(accRegRect);

var passwordBox = document.createElement("div");
passwordBox.id = "passwordbox";
passwordBox.style.width = "406px";
passwordBox.style.height = "45px";
passwordBox.style.left = "96px";
passwordBox.style.top = "352px";
passwordBox.style.position = "absolute";
registerBox.appendChild(passwordBox);

var passRect = document.createElement("div");
passRect.id = "rectangle_5";
passRect.style.left = "0px";
passRect.style.top = "0px";
passRect.style.width = "408px";
passRect.style.height = "47px";
passRect.style.border = "1px solid #000000";
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

var passwordTextbox = document.createElement("INPUT");
passwordTextbox.setAttribute("passwordText","passwordTextbox");
passwordTextbox.placeholder = "Password";
passwordTextbox.style.fontFamily = "Roboto";
passwordTextbox.style.fontSize = "20px";
passwordTextbox.style.left = "38px";
passwordTextbox.style.top = "1px";
passwordTextbox.style.width = "367px";
passwordTextbox.style.height = "45px";
passwordTextbox.style.border = "0px solid #000000";

passwordBox.appendChild(passwordTextbox);

var image2 = document.createElement("img");
image2.id = "image_2";
image2.style.left = "6px";
image2.style.top = "5px";
image2.style.width = "30px";
image2.style.height = "32px";
image2.src = "skins/image_2_ek1.png";

passwordBox.appendChild(image2);

var confirmPasswordBox = document.createElement("div");
confirmPasswordBox.id = "passwordbox_ek1";
confirmPasswordBox.style.width = "406px";
confirmPasswordBox.style.height = "45px";
confirmPasswordBox.style.left = "96px";
confirmPasswordBox.style.top = "413px";
confirmPasswordBox.style.position = "absolute";
registerBox.appendChild(confirmPasswordBox);

var confirmPassRect = document.createElement("div");
confirmPassRect.id = "rectangle_5_ek1";
confirmPassRect.style.left = "0px";
confirmPassRect.style.top = "0px";
confirmPassRect.style.width = "408px";
confirmPassRect.style.height = "47px";
confirmPassRect.style.border = "1px solid #000000";
confirmPassRect.style.background = 'rgba(255,252.88,252.88,1)';

confirmPasswordBox.appendChild(confirmPassRect);

var confirmPassword = document.createElement("div");
confirmPassword.innerHTML = "Confirm Password";
confirmPassword.style.textAlign = "left";
confirmPassword.id = "confirm_password";
confirmPassword.style.left = "46px";
confirmPassword.style.top = "8px";
confirmPassword.style.width = "209px";
confirmPassword.style.height = "45px";
confirmPassword.style.fontFamily = "Roboto";
confirmPassword.style.fontSize = "24px";
confirmPassword.style.overflow = "hidden";
confirmPassword.style.color = "#000000";

confirmPasswordBox.appendChild(confirmPassword);

var confirmPasswordTextbox = document.createElement("INPUT");
confirmPasswordTextbox.setAttribute("confirmPasswordText","confirmPasswordTextbox");
confirmPasswordTextbox.placeholder = "Confirm Password";
confirmPasswordTextbox.style.fontFamily = "Roboto";
confirmPasswordTextbox.style.fontSize = "20px";
confirmPasswordTextbox.style.left = "38px";
confirmPasswordTextbox.style.top = "1px";
confirmPasswordTextbox.style.width = "367px";
confirmPasswordTextbox.style.height = "45px";
confirmPasswordTextbox.style.border = "0px solid #000000";

confirmPasswordBox.appendChild(confirmPasswordTextbox);

var image_2_ek1 = document.createElement("img");
image_2_ek1.id = "image_2_ek1";
image_2_ek1.style.left = "6px";
image_2_ek1.style.top = "5px";
image_2_ek1.style.width = "30px";
image_2_ek1.style.height = "32px";
image_2_ek1.src = "skins/image_2_ek1.png";

confirmPasswordBox.appendChild(image_2_ek1);

var firstNameBox = document.createElement("div");
firstNameBox.id = "emailbox";
firstNameBox.style.width = "406px";
firstNameBox.style.height = "45px";
firstNameBox.style.left = "96px";
firstNameBox.style.top = "169px";
firstNameBox.style.position = "absolute";
registerBox.appendChild(firstNameBox);

var fristNameRect = document.createElement("div");
fristNameRect.id = "rectangle_4";
fristNameRect.style.left = "0px";
fristNameRect.style.top = "0px";
fristNameRect.style.width = "408px";
fristNameRect.style.height = "47px";
fristNameRect.style.border = "1px solid #000000";
fristNameRect.style.background = 'rgba(255,255,255,1)';

firstNameBox.appendChild(fristNameRect);

var firstName = document.createElement("div");
firstName.innerHTML = "First Name";
firstName.style.textAlign = "left";
firstName.id = "first_name";
firstName.style.left = "46px";
firstName.style.top = "11px";
firstName.style.width = "188px";
firstName.style.height = "35px";
firstName.style.fontFamily = "Roboto";
firstName.style.fontSize = "24px";
firstName.style.overflow = "hidden";
firstName.style.color = "#010101";

firstNameBox.appendChild(firstName);

var firstNameTextbox = document.createElement("INPUT");
firstNameTextbox.setAttribute("firstNameText","firstNameTextbox");
firstNameTextbox.placeholder = "First Name";
firstNameTextbox.style.fontFamily = "Roboto";
firstNameTextbox.style.fontSize = "20px";
firstNameTextbox.style.left = "38px";
firstNameTextbox.style.top = "1px";
firstNameTextbox.style.width = "367px";
firstNameTextbox.style.height = "45px";
firstNameTextbox.style.border = "0px solid #000000";

firstNameBox.appendChild(firstNameTextbox);

var image_1 = document.createElement("img");
image_1.id = "image_1";
image_1.style.left = "6px";
image_1.style.top = "9px";
image_1.style.width = "31px";
image_1.style.height = "31px";
image_1.src = "skins/image_1.png";

firstNameBox.appendChild(image_1);

var lastNameBox = document.createElement("div");
lastNameBox.id = "emailbox_ek1";
lastNameBox.style.width = "406px";
lastNameBox.style.height = "45px";
lastNameBox.style.left = "96px";
lastNameBox.style.top = "230px";
lastNameBox.style.position = "absolute";
registerBox.appendChild(lastNameBox);

var lastNameRect = document.createElement("div");
lastNameRect.id = "rectangle_4_ek1";
lastNameRect.style.left = "0px";
lastNameRect.style.top = "0px";
lastNameRect.style.width = "408px";
lastNameRect.style.height = "47px";
lastNameRect.style.border = "1px solid #000000";
lastNameRect.style.background = 'rgba(255,255,255,1)';

lastNameBox.appendChild(lastNameRect);

var lastName = document.createElement("div");
lastName.innerHTML = "Last Name";
lastName.style.textAlign = "left";
lastName.id = "last_name";
lastName.style.left = "46px";
lastName.style.top = "11px";
lastName.style.width = "188px";
lastName.style.height = "35px";
lastName.style.fontFamily = "Roboto";
lastName.style.fontSize = "24px";
lastName.style.overflow = "hidden";
lastName.style.color = "#010101";

lastNameBox.appendChild(lastName);

var lastNameTextbox = document.createElement("INPUT");
lastNameTextbox.setAttribute("lastNameText","lastNameTextbox");
lastNameTextbox.placeholder = "Last Name";
lastNameTextbox.style.fontFamily = "Roboto";
lastNameTextbox.style.fontSize = "20px";
lastNameTextbox.style.left = "38px";
lastNameTextbox.style.top = "1px";
lastNameTextbox.style.width = "367px";
lastNameTextbox.style.height = "45px";
lastNameTextbox.style.border = "0px solid #000000";

lastNameBox.appendChild(lastNameTextbox);

var image_1_ek1 = document.createElement("img");
image_1_ek1.id = "image_1_ek1";
image_1_ek1.style.left = "6px";
image_1_ek1.style.top = "9px";
image_1_ek1.style.width = "31px";
image_1_ek1.style.height = "31px";
image_1_ek1.src = "skins/image_1_ek1.png";

lastNameBox.appendChild(image_1_ek1);

var emailBox = document.createElement("div");
emailBox.id = "emailbox_ek2";
emailBox.style.width = "406px";
emailBox.style.height = "45px";
emailBox.style.left = "96px";
emailBox.style.top = "291px";
emailBox.style.position = "absolute";
registerBox.appendChild(emailBox);

var emailRect = document.createElement("div");
emailRect.id = "rectangle_4_ek2";
emailRect.style.left = "0px";
emailRect.style.top = "0px";
emailRect.style.width = "408px";
emailRect.style.height = "47px";
emailRect.style.border = "1px solid #000000";
emailRect.style.background = 'rgba(255,255,255,1)';

emailBox.appendChild(emailRect);

var emailAddress = document.createElement("div");
emailAddress.innerHTML = "Email Address";
emailAddress.style.textAlign = "left";
emailAddress.id = "email_address";
emailAddress.style.left = "46px";
emailAddress.style.top = "11px";
emailAddress.style.width = "188px";
emailAddress.style.height = "35px";
emailAddress.style.fontFamily = "Roboto";
emailAddress.style.fontSize = "24px";
emailAddress.style.overflow = "hidden";
emailAddress.style.color = "#010101";

emailBox.appendChild(emailAddress);

var emailTextbox = document.createElement("INPUT");
emailTextbox.setAttribute("emailText","emailTextbox");
emailTextbox.placeholder = "Email Address";
emailTextbox.style.fontFamily = "Roboto";
emailTextbox.style.fontSize = "20px";
emailTextbox.style.left = "38px";
emailTextbox.style.top = "1px";
emailTextbox.style.width = "367px";
emailTextbox.style.height = "45px";
emailTextbox.style.border = "0px solid #000000";

emailBox.appendChild(emailTextbox);

var image_1_ek2 = document.createElement("img");
image_1_ek2.id = "image_1_ek2";
image_1_ek2.style.left = "6px";
image_1_ek2.style.top = "9px";
image_1_ek2.style.width = "31px";
image_1_ek2.style.height = "31px";
image_1_ek2.src = "skins/image_1_ek2.png";

emailBox.appendChild(image_1_ek2);

var registerButton = document.createElement("div");
registerButton.id = "registerButton";
registerButton.style.width = "540.12px";
registerButton.style.height = "66px";
registerButton.style.left = "96px";
registerButton.style.top = "539px";
registerButton.style.position = "absolute";
registerButton.style.cursor = "pointer";
registerButton.addEventListener("click", goToLogin);

function goToLogin() {
    if(passwordTextbox.value === confirmPasswordTextbox.value) {
        alert("First and last name obtained: " + firstNameTextbox.value + " " + lastNameTextbox.value + 
        "\nEmail obtained: " + emailTextbox.value + "\nPassword obtained: " + passwordTextbox.value);
        location.replace("login.html");
    } else {
        alert("Password does not match.");
    }
    
}

registerBox.appendChild(registerButton);

var registerRect = document.createElement("div");
registerRect.id = "rectangle_1";
registerRect.style.left = "0px";
registerRect.style.opacity = "100";
registerRect.style.filter = "alpha(opacity='0')";
registerRect.style.top = "0px";
registerRect.style.width = "414px";
registerRect.style.height = "74px";
registerRect.style.border = "4px solid #000203";
registerRect.style.background = 'rgba(196,196,196,0)';

registerButton.appendChild(registerRect);

var register = document.createElement("div");
register.innerHTML = "REGISTER";
register.style.textAlign = "left";
register.id = "register";
register.style.left = "155px";
register.style.top = "26px";
register.style.width = "404.12px";
register.style.height = "62.62px";
register.style.fontFamily = "Roboto";
register.style.fontSize = "24px";
register.style.overflow = "hidden";
register.style.color = "#000000";

registerButton.appendChild(register);

var accountRegister = document.createElement("div");
accountRegister.innerHTML = "Account Register";
accountRegister.style.textAlign = "left";
accountRegister.id = "account_register";
accountRegister.style.left = "514px";
accountRegister.style.top = "216px";
accountRegister.style.width = "390px";
accountRegister.style.height = "90px";
accountRegister.style.fontFamily = "Roboto";
accountRegister.style.fontSize = "48px";
accountRegister.style.overflow = "hidden";
accountRegister.style.color = "#000000";

contentContainer.appendChild(accountRegister);

