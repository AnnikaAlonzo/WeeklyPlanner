
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgMain2 = document.createElement("div");
bgMain2.id = "bgMain2";
bgMain2.style.left = "0px";
bgMain2.style.top = "0px";
bgMain2.style.width = "1440px";
bgMain2.style.height = "1024px";
bgMain2.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgMain2);

var header = document.createElement("div");
header.id = "header";
header.style.width = "1440px";
header.style.height = "177px";
header.style.left = "0px";
header.style.top = "0px";
header.style.position = "absolute";
contentContainer.appendChild(header);

var headerRect = document.createElement("div");
headerRect.id = "headerRect";
headerRect.style.left = "0px";
headerRect.style.top = "0px";
headerRect.style.width = "1440px";
headerRect.style.height = "177px";
headerRect.style.background = 'rgba(225,221,221,1)';

header.appendChild(headerRect);

var weeklyPlanner = document.createElement("div");
weeklyPlanner.innerHTML = "WEEKLY<br/>           PLANNER";
weeklyPlanner.style.textAlign = "center";
weeklyPlanner.id = "weeklyPlanner";
weeklyPlanner.style.left = "-47px";
weeklyPlanner.style.top = "40px";
weeklyPlanner.style.width = "414px";
weeklyPlanner.style.height = "100px";
weeklyPlanner.style.fontFamily = "Sansation";
weeklyPlanner.style.fontSize = "45px";
weeklyPlanner.style.textShadow = "0px 4px 1px rgba(0,0,0,0.25)";
weeklyPlanner.style.overflow = "hidden";
weeklyPlanner.style.color = "#000000";

contentContainer.appendChild(weeklyPlanner);

var welcomeUser = document.createElement("div");
welcomeUser.innerHTML = sessionStorage.getItem("currentUser");
welcomeUser.style.textAlign = "center";
welcomeUser.id = "welcomeUser";
welcomeUser.style.left = "1053px";
welcomeUser.style.top = "70px";
welcomeUser.style.width = "182px";
welcomeUser.style.height = "52.5px";
welcomeUser.style.fontFamily = "Sansation";
welcomeUser.style.fontSize = "30px";
welcomeUser.style.overflow = "hidden";
welcomeUser.style.color = "#000000";

contentContainer.appendChild(welcomeUser);

var welcomeLine = document.createElement("div");
welcomeLine.id = "welcomeLine";
welcomeLine.style.left = "1065px";
welcomeLine.style.top = "121px";
welcomeLine.style.width = "151px";
welcomeLine.style.height = "1px";
welcomeLine.style.background = "#000000";

contentContainer.appendChild(welcomeLine);

var aboutUs = document.createElement("div");
aboutUs.innerHTML = "About the<br/>Developers";
aboutUs.style.textAlign = "center";
aboutUs.id = "aboutUs";
aboutUs.style.left = "814px";
aboutUs.style.top = "60px";
aboutUs.style.width = "198px";
aboutUs.style.height = "56px";
aboutUs.style.fontFamily = "Sansation";
aboutUs.style.fontSize = "25px";
aboutUs.style.overflow = "hidden";
aboutUs.style.color = "#000000";
aboutUs.style.cursor = "pointer";
aboutUs.addEventListener("click", openAboutUs);
aboutUs.addEventListener("click", closeAboutWeb);

contentContainer.appendChild(aboutUs);

var line8 = document.createElement("div");
line8.id = "line8";
line8.style.left = "814px";
line8.style.top = "121px";
line8.style.width = "192px";
line8.style.height = "1px";
line8.style.background = "#000000";

contentContainer.appendChild(line8);

var aboutWeb = document.createElement("div");
aboutWeb.innerHTML = "About Website";
aboutWeb.style.textAlign = "center";
aboutWeb.id = "aboutWeb";
aboutWeb.style.left = "560px";
aboutWeb.style.top = "90px";
aboutWeb.style.width = "198px";
aboutWeb.style.height = "56px";
aboutWeb.style.fontFamily = "Sansation";
aboutWeb.style.fontSize = "25px";
aboutWeb.style.overflow = "hidden";
aboutWeb.style.color = "#000000";
aboutWeb.style.cursor = "pointer";
aboutWeb.addEventListener("click", openAboutWeb);
aboutWeb.addEventListener("click", closeAboutUs);

contentContainer.appendChild(aboutWeb);

var line9 = document.createElement("div");
line9.id = "line8";
line9.style.left = "563px";
line9.style.top = "121px";
line9.style.width = "190px";
line9.style.height = "1px";
line9.style.background = "#000000";

contentContainer.appendChild(line9);

var logout = document.createElement("div");
logout.innerHTML = "Logout";
logout.style.textAlign = "center";
logout.id = "logout";
logout.style.left = "1264px";
logout.style.top = "74px";
logout.style.width = "168px";
logout.style.height = "56px";
logout.style.fontFamily = "Sansation";
logout.style.fontSize = "40px";
logout.style.overflow = "hidden";
logout.style.color = "#000000";
logout.style.cursor = "pointer";
logout.addEventListener("click", goToLogout);

function goToLogout() {
	location.href="main.html"
}

contentContainer.appendChild(logout);

var logoutLine = document.createElement("div");
logoutLine.id = "logoutLine";
logoutLine.style.left = "1267px";
logoutLine.style.top = "121px";
logoutLine.style.width = "151px";
logoutLine.style.height = "1px";
logoutLine.style.background = "#000000";

contentContainer.appendChild(logoutLine);

var line32 = document.createElement("div");
line32.id = "line32";
line32.style.left = "275px";
line32.style.top = "88px";
line32.style.width = "225.06px";
line32.style.height = "1px";
line32.style.transform = "rotate(51.86deg)";
line32.style.background = "#000000";

contentContainer.appendChild(line32);

var line33 = document.createElement("div");
line33.id = "line33";
line33.style.left = "335px";
line33.style.top = "88px";
line33.style.width = "225.06px";
line33.style.height = "1px";
line33.style.transform = "rotate(51.86deg)";
line33.style.background = "#000000";

contentContainer.appendChild(line33);

var schedRect = document.createElement("div");
schedRect.id = "schedRect";
schedRect.style.left = "91px";
schedRect.style.top = "240px";
schedRect.style.width = "345px";
schedRect.style.height = "505px";
schedRect.style.border = "1px solid #000000";
schedRect.style.background = 'rgba(121.48,171.29,208.25,1)';
schedRect.style.cursor = "pointer";
schedRect.addEventListener("click", goToSched);

function goToSched() {
    location.href = "schedule.html"
}

contentContainer.appendChild(schedRect);

var calendar = document.createElement("img");
calendar.id = "calendar";
calendar.style.left = "147px";
calendar.style.top = "330px";
calendar.style.width = "269px";
calendar.style.height = "350px";
calendar.src = "skins/calendar.png";
calendar.style.cursor = "pointer";
calendar.addEventListener("click", goToSched);

function goToSched() {
    location.href = "schedule.html"
}

contentContainer.appendChild(calendar);

var pnRect = document.createElement("div");
pnRect.id = "pnRect";
pnRect.style.left = "548px";
pnRect.style.top = "459px";
pnRect.style.width = "345px";
pnRect.style.height = "505px";
pnRect.style.border = "1px solid #000000";
pnRect.style.background = 'rgba(121.48,171.29,208.25,1)';
pnRect.style.cursor = "pointer";
pnRect.addEventListener("click", goToPN);

function goToPN() {
    location.href = "personalNotes.html"
}

contentContainer.appendChild(pnRect);

var notepad = document.createElement("img");
notepad.id = "notepad";
notepad.style.left = "575px";
notepad.style.top = "496px";
notepad.style.width = "304px";
notepad.style.height = "428px";
notepad.src = "skins/notepad.png";
notepad.style.cursor = "pointer";
notepad.addEventListener("click", goToPN);

function goToPN() {
    location.href = "personalNotes.html"
}

contentContainer.appendChild(notepad);

var expRect = document.createElement("div");
expRect.id = "expRect";
expRect.style.left = "1004px";
expRect.style.top = "240px";
expRect.style.width = "345px";
expRect.style.height = "505px";
expRect.style.border = "1px solid #000000";
expRect.style.background = 'rgba(121.48,171.29,208.25,1)';
expRect.style.cursor = "pointer";
expRect.addEventListener("click", goToExp);

function goToExp() {
    location.href = "expenses.html"
}

contentContainer.appendChild(expRect);

var dollar = document.createElement("img");
dollar.id = "dollar";
dollar.style.left = "875px";
dollar.style.top = "192px";
dollar.style.width = "617px";
dollar.style.height = "599px";
dollar.src = "skins/dollar.png";
dollar.style.cursor = "pointer";
dollar.addEventListener("click", goToExp);

function goToExp() {
    location.href = "expenses.html"
}

contentContainer.appendChild(dollar);

var schedText1 = document.createElement("div");
schedText1.innerHTML = "SCHEDULE";
schedText1.style.fontWeight = "bold";
schedText1.style.textAlign = "center";
schedText1.id = "schedText1";
schedText1.style.left = "81px";
schedText1.style.top = "743px";
schedText1.style.width = "374px";
schedText1.style.height = "101px";
schedText1.style.fontFamily = "Sansation";
schedText1.style.fontSize = "48px";
schedText1.style.overflow = "hidden";
schedText1.style.color = "#0A0A0A";

contentContainer.appendChild(schedText1);

var schedText2 = document.createElement("div");
schedText2.innerHTML = "SCHEDULE";
schedText2.style.fontWeight = "bold";
schedText2.style.textAlign = "center";
schedText2.id = "schedText2";
schedText2.style.left = "81px";
schedText2.style.top = "810px";
schedText2.style.width = "374px";
schedText2.style.height = "101px";
schedText2.style.fontFamily = "Sansation";
schedText2.style.fontSize = "48px";
schedText2.style.overflow = "hidden";
schedText2.style.color = "#0A0A0A";
schedText2.style.opacity = "0.75";

contentContainer.appendChild(schedText2);

var schedText3 = document.createElement("div");
schedText3.innerHTML = "SCHEDULE";
schedText3.style.fontWeight = "bold";
schedText3.style.textAlign = "center";
schedText3.id = "schedText3";
schedText3.style.left = "81px";
schedText3.style.top = "877px";
schedText3.style.width = "374px";
schedText3.style.height = "101px";
schedText3.style.fontFamily = "Sansation";
schedText3.style.fontSize = "48px";
schedText3.style.overflow = "hidden";
schedText3.style.color = "#0A0A0A";
schedText3.style.opacity = "0.50";

contentContainer.appendChild(schedText3);

var schedText4 = document.createElement("div");
schedText4.innerHTML = "SCHEDULE";
schedText4.style.fontWeight = "bold";
schedText4.style.textAlign = "center";
schedText4.id = "schedText4";
schedText4.style.left = "81px";
schedText4.style.top = "944px";
schedText4.style.width = "374px";
schedText4.style.height = "101px";
schedText4.style.fontFamily = "Sansation";
schedText4.style.fontSize = "48px";
schedText4.style.overflow = "hidden";
schedText4.style.color = "#0A0A0A";
schedText4.style.opacity = "0.25";

contentContainer.appendChild(schedText4);

var pnText1 = document.createElement("div");
pnText1.innerHTML = "PERSONAL NOTES";
pnText1.style.fontWeight = "bold";
pnText1.style.textAlign = "center";
pnText1.id = "pnText1";
pnText1.style.left = "497px";
pnText1.style.top = "392px";
pnText1.style.width = "457px";
pnText1.style.height = "101px";
pnText1.style.fontFamily = "Sansation";
pnText1.style.fontSize = "48px";
pnText1.style.overflow = "hidden";
pnText1.style.color = "#0A0A0A";

contentContainer.appendChild(pnText1);

var pnText2 = document.createElement("div");
pnText2.innerHTML = "PERSONAL NOTES";
pnText2.style.fontWeight = "bold";
pnText2.style.textAlign = "center";
pnText2.id = "pnText2";
pnText2.style.left = "497px";
pnText2.style.top = "325px";
pnText2.style.width = "457px";
pnText2.style.height = "101px";
pnText2.style.fontFamily = "Sansation";
pnText2.style.fontSize = "48px";
pnText2.style.overflow = "hidden";
pnText2.style.color = "#0A0A0A";
pnText2.style.opacity = "0.75";

contentContainer.appendChild(pnText2);

var pnText3 = document.createElement("div");
pnText3.innerHTML = "PERSONAL NOTES";
pnText3.style.fontWeight = "bold";
pnText3.style.textAlign = "center";
pnText3.id = "pnText3";
pnText3.style.left = "497px";
pnText3.style.top = "258px";
pnText3.style.width = "457px";
pnText3.style.height = "101px";
pnText3.style.fontFamily = "Sansation";
pnText3.style.fontSize = "48px";
pnText3.style.overflow = "hidden";
pnText3.style.color = "#0A0A0A";
pnText3.style.opacity = "0.50";

contentContainer.appendChild(pnText3);

var pnText4 = document.createElement("div");
pnText4.innerHTML = "PERSONAL NOTES";
pnText4.style.fontWeight = "bold";
pnText4.style.textAlign = "center";
pnText4.id = "pnText4";
pnText4.style.left = "498px";
pnText4.style.top = "192px";
pnText4.style.width = "457px";
pnText4.style.height = "101px";
pnText4.style.fontFamily = "Sansation";
pnText4.style.fontSize = "48px";
pnText4.style.overflow = "hidden";
pnText4.style.color = "#0A0A0A";
pnText4.style.opacity = "0.25";

contentContainer.appendChild(pnText4);

var expText1 = document.createElement("div");
expText1.innerHTML = "EXPENSES";
expText1.style.fontWeight = "bold";
expText1.style.textAlign = "center";
expText1.id = "expText1";
expText1.style.left = "995px";
expText1.style.top = "743px";
expText1.style.width = "374px";
expText1.style.height = "101px";
expText1.style.fontFamily = "Sansation";
expText1.style.fontSize = "48px";
expText1.style.overflow = "hidden";
expText1.style.color = "#0A0A0A";

contentContainer.appendChild(expText1);

var expText2 = document.createElement("div");
expText2.innerHTML = "EXPENSES";
expText2.style.fontWeight = "bold";
expText2.style.textAlign = "center";
expText2.id = "expText2";
expText2.style.left = "995px";
expText2.style.top = "810px";
expText2.style.width = "374px";
expText2.style.height = "101px";
expText2.style.fontFamily = "Sansation";
expText2.style.fontSize = "48px";
expText2.style.overflow = "hidden";
expText2.style.color = "#0A0A0A";
expText2.style.opacity = "0.75";

contentContainer.appendChild(expText2);

var expText3 = document.createElement("div");
expText3.innerHTML = "EXPENSES";
expText3.style.fontWeight = "bold";
expText3.style.textAlign = "center";
expText3.id = "expText3";
expText3.style.left = "995px";
expText3.style.top = "877px";
expText3.style.width = "374px";
expText3.style.height = "101px";
expText3.style.fontFamily = "Sansation";
expText3.style.fontSize = "48px";
expText3.style.overflow = "hidden";
expText3.style.color = "#0A0A0A";
expText3.style.opacity = "0.50";

contentContainer.appendChild(expText3);

var expText4 = document.createElement("div");
expText4.innerHTML = "EXPENSES";
expText4.style.fontWeight = "bold";
expText4.style.textAlign = "center";
expText4.id = "expText4";
expText4.style.left = "995px";
expText4.style.top = "944px";
expText4.style.width = "374px";
expText4.style.height = "101px";
expText4.style.fontFamily = "Sansation";
expText4.style.fontSize = "48px";
expText4.style.overflow = "hidden";
expText4.style.color = "#0A0A0A";
expText4.style.opacity = "0.25";

contentContainer.appendChild(expText4);

$(document).ready(function(){
    $(onload).ready(function() {
        var test = sessionStorage.getItem("currentUser");
        console.log(test);
    })
});

function openAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "595px";
    document.getElementById("aboutUsOverlay").style.height = "766px";
}
  
function closeAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "0";
    document.getElementById("aboutUsOverlay").style.height = "0";
}

function openAboutWeb() {
    document.getElementById("aboutWebOverlay").style.width = "595px";
    document.getElementById("aboutWebOverlay").style.height = "766px";
}
  
function closeAboutWeb() {
    document.getElementById("aboutWebOverlay").style.width = "0";
    document.getElementById("aboutWebOverlay").style.height = "0";
}