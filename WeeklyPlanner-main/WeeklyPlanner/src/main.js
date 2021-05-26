
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgMain = document.createElement("div");
bgMain.id = "bgMain";
bgMain.style.left = "0px";
bgMain.style.top = "0px";
bgMain.style.width = "1440px";
bgMain.style.height = "1182px";
bgMain.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgMain);

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

var login = document.createElement("div");
login.innerHTML = "Login";
login.style.textAlign = "center";
login.id = "login";
login.style.left = "1240px";
login.style.top = "74px";
login.style.width = "141px";
login.style.height = "56px";
login.style.fontFamily = "Sansation";
login.style.fontSize = "40px";
login.style.overflow = "hidden";
login.style.color = "#000000";
login.style.cursor = "pointer";
login.addEventListener("click", goToLogin);

function goToLogin() {
	location.href="login.html"
}

contentContainer.appendChild(login);

var loginLine = document.createElement("div");
loginLine.id = "loginLine";
loginLine.style.left = "1240px";
loginLine.style.top = "121px";
loginLine.style.width = "151px";
loginLine.style.height = "1px";
loginLine.style.background = "#000000";

contentContainer.appendChild(loginLine);

var aboutUs = document.createElement("div");
aboutUs.innerHTML = "About the<br/>Developers";
aboutUs.style.textAlign = "center";
aboutUs.id = "aboutUs";
aboutUs.style.left = "1001px";
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
line8.style.left = "1001px";
line8.style.top = "121px";
line8.style.width = "192px";
line8.style.height = "1px";
line8.style.background = "#000000";

contentContainer.appendChild(line8);

var aboutWeb = document.createElement("div");
aboutWeb.innerHTML = "About Website";
aboutWeb.style.textAlign = "center";
aboutWeb.id = "aboutWeb";
aboutWeb.style.left = "760px";
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
line9.style.left = "760px";
line9.style.top = "121px";
line9.style.width = "192px";
line9.style.height = "1px";
line9.style.background = "#000000";

contentContainer.appendChild(line9);

var line10 = document.createElement("div");
line10.id = "line10";
line10.style.left = "275px";
line10.style.top = "88px";
line10.style.width = "225.06px";
line10.style.height = "1px";
line10.style.transform = "rotate(51.86deg)";
line10.style.background = "#000000";

contentContainer.appendChild(line10);

var line11 = document.createElement("div");
line11.id = "line11";
line11.style.left = "335px";
line11.style.top = "88px";
line11.style.width = "225.06px";
line11.style.height = "1px";
line11.style.transform = "rotate(51.86deg)";
line11.style.background = "#000000";

contentContainer.appendChild(line11);

var line12 = document.createElement("div");
line12.id = "line12";
line12.style.left = "435px";
line12.style.top = "88px";
line12.style.width = "225.06px";
line12.style.height = "1px";
line12.style.transform = "rotate(51.86deg)";
line12.style.background = "#000000";

contentContainer.appendChild(line12);

var line13 = document.createElement("div");
line13.id = "line13";
line13.style.left = "495px";
line13.style.top = "88px";
line13.style.width = "225.06px";
line13.style.height = "1px";
line13.style.transform = "rotate(51.86deg)";
line13.style.background = "#000000";

contentContainer.appendChild(line13);

var triangleUp1 = document.createElement("img");
triangleUp1.id = "triangleUp1";
triangleUp1.style.left = "535px";
triangleUp1.style.top = "229px";
triangleUp1.style.width = "120px";
triangleUp1.style.height = "150px";
triangleUp1.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp1);

var triangleUp2 = document.createElement("img");
triangleUp2.id = "triangleUp2";
triangleUp2.style.left = "1270px";
triangleUp2.style.top = "231px";
triangleUp2.style.width = "120px";
triangleUp2.style.height = "148px";
triangleUp2.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp2);

var triangleUp3 = document.createElement("img");
triangleUp3.id = "triangleUp3";
triangleUp3.style.left = "563px";
triangleUp3.style.top = "229px";
triangleUp3.style.width = "119px";
triangleUp3.style.height = "150px";
triangleUp3.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp3);

var triangleUp4 = document.createElement("img");
triangleUp4.id = "triangleUp4";
triangleUp4.style.left = "1243px";
triangleUp4.style.top = "229px";
triangleUp4.style.width = "120px";
triangleUp4.style.height = "150px";
triangleUp4.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp4);

var schedRect1 = document.createElement("div");
schedRect1.id = "schedRect1";
schedRect1.style.left = "622px";
schedRect1.style.top = "229px";
schedRect1.style.width = "680px";
schedRect1.style.height = "148px";
schedRect1.style.border = "1px solid #000000";
schedRect1.style.background = 'rgba(121.48,171.29,208.25,1)';

contentContainer.appendChild(schedRect1);

var triangleDown1 = document.createElement("img");
triangleDown1.id = "triangleDown1";
triangleDown1.style.left = "1270px";
triangleDown1.style.top = "378px";
triangleDown1.style.width = "120px";
triangleDown1.style.height = "148px";
triangleDown1.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown1);

var triangleDown2 = document.createElement("img");
triangleDown2.id = "triangleDown2";
triangleDown2.style.left = "537px";
triangleDown2.style.top = "378px";
triangleDown2.style.width = "120px";
triangleDown2.style.height = "148px";
triangleDown2.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown2);

var triangleDown3 = document.createElement("img");
triangleDown3.id = "triangleDown3";
triangleDown3.style.left = "1243px";
triangleDown3.style.top = "378px";
triangleDown3.style.width = "119px";
triangleDown3.style.height = "150px";
triangleDown3.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown3);

var triangleDown4 = document.createElement("img");
triangleDown4.id = "triangleDown4";
triangleDown4.style.left = "563px";
triangleDown4.style.top = "378px";
triangleDown4.style.width = "120px";
triangleDown4.style.height = "150px";
triangleDown4.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown4);

var schedRect2 = document.createElement("div");
schedRect2.id = "schedRect2";
schedRect2.style.left = "622px";
schedRect2.style.top = "378px";
schedRect2.style.width = "680px";
schedRect2.style.height = "150px";
schedRect2.style.transform = "rotate(180deg)";
schedRect2.style.border = "1px solid #000000";
schedRect2.style.background = 'rgba(121.48,171.29,208.25,1)';

contentContainer.appendChild(schedRect2);

var triangleUp5 = document.createElement("img");
triangleUp5.id = "triangleUp5";
triangleUp5.style.left = "535px";
triangleUp5.style.top = "1065px";
triangleUp5.style.width = "120px";
triangleUp5.style.height = "150px";
triangleUp5.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp5);

var triangleUp6 = document.createElement("img");
triangleUp6.id = "triangleUp6";
triangleUp6.style.left = "1270px";
triangleUp6.style.top = "1065px";
triangleUp6.style.width = "120px";
triangleUp6.style.height = "150px";
triangleUp6.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp6);

var triangleUp7 = document.createElement("img");
triangleUp7.id = "triangleUp7";
triangleUp7.style.left = "563px";
triangleUp7.style.top = "1065px";
triangleUp7.style.width = "119px";
triangleUp7.style.height = "150px";
triangleUp7.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp7);

var triangleUp8 = document.createElement("img");
triangleUp8.id = "triangleUp8";
triangleUp8.style.left = "1243px";
triangleUp8.style.top = "1065px";
triangleUp8.style.width = "120px";
triangleUp8.style.height = "150px";
triangleUp8.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp8);

var expRect1 = document.createElement("div");
expRect1.id = "expRect1";
expRect1.style.left = "622px";
expRect1.style.top = "1065px";
expRect1.style.width = "680px";
expRect1.style.height = "148px";
expRect1.style.border = "1px solid #000000";
expRect1.style.background = 'rgba(121.48,171.29,208.25,1)';

contentContainer.appendChild(expRect1);

var triangleDown5 = document.createElement("img");
triangleDown5.id = "triangleDown5";
triangleDown5.style.left = "1269px";
triangleDown5.style.top = "1213px";
triangleDown5.style.width = "120px";
triangleDown5.style.height = "148px";
triangleDown5.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown5);

var triangleDown6 = document.createElement("img");
triangleDown6.id = "triangleDown6";
triangleDown6.style.left = "536px";
triangleDown6.style.top = "1213px";
triangleDown6.style.width = "120px";
triangleDown6.style.height = "148px";
triangleDown6.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown6);

var triangleDown7 = document.createElement("img");
triangleDown7.id = "triangleDown7";
triangleDown7.style.left = "1243px";
triangleDown7.style.top = "1213px";
triangleDown7.style.width = "119px";
triangleDown7.style.height = "150px";
triangleDown7.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown7);

var triangleDown8 = document.createElement("img");
triangleDown8.id = "triangleDown8";
triangleDown8.style.left = "563px";
triangleDown8.style.top = "1213px";
triangleDown8.style.width = "120px";
triangleDown8.style.height = "150px";
triangleDown8.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown8);

var expRect2 = document.createElement("div");
expRect2.id = "expRect2";
expRect2.style.left = "622px";
expRect2.style.top = "1213px";
expRect2.style.width = "680px";
expRect2.style.height = "150px";
expRect2.style.transform = "rotate(180deg)";
expRect2.style.border = "1px solid #000000";
expRect2.style.background = 'rgba(121.48,171.29,208.25,1)';

contentContainer.appendChild(expRect2);

var triangleUp9 = document.createElement("img");
triangleUp9.id = "triangleUp9";
triangleUp9.style.left = "785px";
triangleUp9.style.top = "647px";
triangleUp9.style.width = "120px";
triangleUp9.style.height = "150px";
triangleUp9.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp9);

var triangleUp10 = document.createElement("img");
triangleUp10.id = "triangleUp10";
triangleUp10.style.left = "51px";
triangleUp10.style.top = "647px";
triangleUp10.style.width = "120px";
triangleUp10.style.height = "150px";
triangleUp10.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp10);

var triangleUp11 = document.createElement("img");
triangleUp11.id = "triangleUp11";
triangleUp11.style.left = "759px";
triangleUp11.style.top = "647px";
triangleUp11.style.width = "120px";
triangleUp11.style.height = "150px";
triangleUp11.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp11);

var triangleUp12 = document.createElement("img");
triangleUp12.id = "triangleUp12";
triangleUp12.style.left = "78px";
triangleUp12.style.top = "647px";
triangleUp12.style.width = "120px";
triangleUp12.style.height = "150px";
triangleUp12.src = "skins/triangleUp.png";

contentContainer.appendChild(triangleUp12);

var pnRect1 = document.createElement("div");
pnRect1.id = "pnRect1";
pnRect1.style.left = "137px";
pnRect1.style.top = "647px";
pnRect1.style.width = "680px";
pnRect1.style.height = "148px";
pnRect1.style.transform = "rotate(180deg)";
pnRect1.style.border = "1px solid #000000";
pnRect1.style.background = 'rgba(121,171,208,1)';

contentContainer.appendChild(pnRect1);

var triangleDown9 = document.createElement("img");
triangleDown9.id = "triangleDown9";
triangleDown9.style.left = "51px";
triangleDown9.style.top = "795px";
triangleDown9.style.width = "120px";
triangleDown9.style.height = "148px";
triangleDown9.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown9);

var triangleDown10 = document.createElement("img");
triangleDown10.id = "triangleDown10";
triangleDown10.style.left = "785px";
triangleDown10.style.top = "795px";
triangleDown10.style.width = "120px";
triangleDown10.style.height = "150px";
triangleDown10.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown10);

var triangleDown11 = document.createElement("img");
triangleDown11.id = "triangleDown11";
triangleDown11.style.left = "78px";
triangleDown11.style.top = "795px";
triangleDown11.style.width = "120px";
triangleDown11.style.height = "150px";
triangleDown11.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown11);

var triangleDown12 = document.createElement("img");
triangleDown12.id = "triangleDown12";
triangleDown12.style.left = "759px";
triangleDown12.style.top = "795px";
triangleDown12.style.width = "120px";
triangleDown12.style.height = "150px";
triangleDown12.src = "skins/triangleDown.png";

contentContainer.appendChild(triangleDown12);

var pnRect2 = document.createElement("div");
pnRect2.id = "pnRect2";
pnRect2.style.left = "137px";
pnRect2.style.top = "795px";
pnRect2.style.width = "680px";
pnRect2.style.height = "150px";
pnRect2.style.border = "1px solid #000000";
pnRect2.style.background = 'rgba(121,171,208,1)';

contentContainer.appendChild(pnRect2);

var timeManageText = document.createElement("div");
timeManageText.innerHTML = "NEED HELP WITH TIME MANAGEMENT?";
timeManageText.style.fontWeight = "bold";
timeManageText.style.fontStyle = "italic";
timeManageText.style.textAlign = "center";
timeManageText.id = "timeManageText";
timeManageText.style.left = "680px";
timeManageText.style.top = "285px";
timeManageText.style.width = "590px";
timeManageText.style.height = "96px";
timeManageText.style.fontFamily = "Sansation";
timeManageText.style.fontSize = "30px";
timeManageText.style.overflow = "hidden";
timeManageText.style.color = "#FBF4F4";

contentContainer.appendChild(timeManageText);

var schedMakerText = document.createElement("div");
schedMakerText.innerHTML = "USE OUR SCHEDULE MAKER!";
schedMakerText.style.fontWeight = "bold";
schedMakerText.style.textAlign = "center";
schedMakerText.id = "schedMakerText";
schedMakerText.style.left = "684px";
schedMakerText.style.top = "435px";
schedMakerText.style.width = "590px";
schedMakerText.style.height = "96px";
schedMakerText.style.fontFamily = "Sansation";
schedMakerText.style.fontSize = "30px";
schedMakerText.style.overflow = "hidden";
schedMakerText.style.color = "#FFF9F9";

contentContainer.appendChild(schedMakerText);

var writeNotesText = document.createElement("div");
writeNotesText.innerHTML = "HAVE NOTES TO WRITE DOWN?";
writeNotesText.style.fontWeight = "bold";
writeNotesText.style.fontStyle = "italic";
writeNotesText.style.textAlign = "center";
writeNotesText.id = "writeNotesText";
writeNotesText.style.left = "195px";
writeNotesText.style.top = "710px";
writeNotesText.style.width = "590px";
writeNotesText.style.height = "96px";
writeNotesText.style.fontFamily = "Sansation";
writeNotesText.style.fontSize = "30px";
writeNotesText.style.overflow = "hidden";
writeNotesText.style.color = "#FDF6F6";

contentContainer.appendChild(writeNotesText);

var pnText = document.createElement("div");
pnText.innerHTML = "USE OUR PERSONAL NOTES FEATURE!";
pnText.style.fontWeight = "bold";
pnText.style.textAlign = "center";
pnText.id = "pnText";
pnText.style.left = "200px";
pnText.style.top = "855px";
pnText.style.width = "590px";
pnText.style.height = "96px";
pnText.style.fontFamily = "Sansation";
pnText.style.fontSize = "30px";
pnText.style.overflow = "hidden";
pnText.style.color = "#FFF6F6";

contentContainer.appendChild(pnText);

var spendingText = document.createElement("div");
spendingText.innerHTML = "WANT TO SEE HOW MUCH YOU\'RE SPENDING IN A WEEK? A MONTH?";
spendingText.style.fontWeight = "bold";
spendingText.style.fontStyle = "italic";
spendingText.style.textAlign = "center";
spendingText.id = "spendingText";
spendingText.style.left = "680px";
spendingText.style.top = "1105px";
spendingText.style.width = "590px";
spendingText.style.height = "96px";
spendingText.style.fontFamily = "Sansation";
spendingText.style.fontSize = "30px";
spendingText.style.overflow = "hidden";
spendingText.style.color = "#FBF4F4";

contentContainer.appendChild(spendingText);

var expText = document.createElement("div");
expText.innerHTML = "USE OUR EXPENSE TRACKER!";
expText.style.fontWeight = "bold";
expText.style.textAlign = "center";
expText.id = "expText";
expText.style.left = "680px";
expText.style.top = "1275px";
expText.style.width = "590px";
expText.style.height = "96px";
expText.style.fontFamily = "Sansation";
expText.style.fontSize = "30px";
expText.style.overflow = "hidden";
expText.style.color = "#FFF4F4";

contentContainer.appendChild(expText);

var calendar1 = document.createElement("img");
calendar1.id = "calendar1";
calendar1.style.left = "375px";
calendar1.style.top = "300px";
calendar1.style.width = "145px";
calendar1.style.height = "146.01px";
calendar1.src = "skins/calendar.png";

contentContainer.appendChild(calendar1);

var calendar2 = document.createElement("img");
calendar2.id = "calendar1";
calendar2.style.left = "213px";
calendar2.style.top = "300px";
calendar2.style.width = "145px";
calendar2.style.height = "146.01px";
calendar2.src = "skins/calendar.png";

contentContainer.appendChild(calendar2);

var calendar3 = document.createElement("img");
calendar3.id = "calendar1";
calendar3.style.left = "51px";
calendar3.style.top = "300px";
calendar3.style.width = "145px";
calendar3.style.height = "146.01px";
calendar3.src = "skins/calendar.png";

contentContainer.appendChild(calendar3);

var notepad1 = document.createElement("img");
notepad1.id = "notepad1";
notepad1.style.left = "928px";
notepad1.style.top = "715px";
notepad1.style.width = "146.01px";
notepad1.style.height = "146.01px";
notepad1.src = "skins/notepad.png";

contentContainer.appendChild(notepad1);

var notepad2 = document.createElement("img");
notepad2.id = "notepad1";
notepad2.style.left = "1092px";
notepad2.style.top = "715px";
notepad2.style.width = "146.01px";
notepad2.style.height = "146.01px";
notepad2.src = "skins/notepad.png";

contentContainer.appendChild(notepad2);

var notepad3 = document.createElement("img");
notepad3.id = "notepad1";
notepad3.style.left = "1255px";
notepad3.style.top = "715px";
notepad3.style.width = "146.01px";
notepad3.style.height = "146.01px";
notepad3.src = "skins/notepad.png";

contentContainer.appendChild(notepad3);

var dollar1 = document.createElement("img");
dollar1.id = "dollar1";
dollar1.style.left = "338px";
dollar1.style.top = "1105px";
dollar1.style.width = "220px";
dollar1.style.height = "212px";
dollar1.src = "skins/dollar.png";

contentContainer.appendChild(dollar1);

var dollar2 = document.createElement("img");
dollar2.id = "dollar1";
dollar2.style.left = "176px";
dollar2.style.top = "1105px";
dollar2.style.width = "220px";
dollar2.style.height = "212px";
dollar2.src = "skins/dollar.png";

contentContainer.appendChild(dollar2);

var dollar3 = document.createElement("img");
dollar3.id = "dollar1";
dollar3.style.left = "14px";
dollar3.style.top = "1105px";
dollar3.style.width = "220px";
dollar3.style.height = "212px";
dollar3.src = "skins/dollar.png";

contentContainer.appendChild(dollar3);

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