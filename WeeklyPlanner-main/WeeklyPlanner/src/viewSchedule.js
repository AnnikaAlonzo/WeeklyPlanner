
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgSchedule = document.createElement("div");
bgSchedule.id = "bgSchedule";
bgSchedule.style.left = "0px";
bgSchedule.style.top = "0px";
bgSchedule.style.width = "1440px";
bgSchedule.style.height = "1024px";
bgSchedule.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgSchedule);

var header = document.createElement("div");
header.id = "header";
header.style.width = "1440px";
header.style.height = "113px";
header.style.left = "0px";
header.style.top = "57px";
header.style.position = "absolute";
contentContainer.appendChild(header);

var headerRect = document.createElement("div");
headerRect.id = "headerRect";
headerRect.style.left = "0px";
headerRect.style.top = "0px";
headerRect.style.width = "1440px";
headerRect.style.height = "113px";
headerRect.style.background = 'rgba(225.25,220.56,220.56,1)';

header.appendChild(headerRect);

var schedule = document.createElement("div");
schedule.innerHTML = "SCHEDULE";
schedule.style.textAlign = "center";
schedule.id = "schedule";
schedule.style.left = "529px";
schedule.style.top = "15px";
schedule.style.width = "436px";
schedule.style.height = "124px";
schedule.style.fontFamily = "Sansation";
schedule.style.fontSize = "64px";
schedule.style.overflow = "hidden";
schedule.style.color = "#000000";

header.appendChild(schedule);

var image_4 = document.createElement("img"); //options
image_4.id = "image_4";
image_4.style.left = "36px";
image_4.style.top = "87px";
image_4.style.width = "49px";
image_4.style.height = "49px";
image_4.src = "skins/image_4.png";
image_4.style.cursor = "pointer";
image_4.addEventListener("click", openNav);
image_4.addEventListener("click", closeAboutUs);
image_4.addEventListener("click", closeHelp);
image_4.addEventListener("click", closeSideHelp);

contentContainer.appendChild(image_4);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
} 

var buttons = document.createElement("div");
buttons.id = "buttons";
buttons.style.width = "294px";
buttons.style.height = "467px";
buttons.style.left = "61px";
buttons.style.top = "340px";
buttons.style.position = "absolute";
contentContainer.appendChild(buttons);

var helpButton = document.createElement("div");
helpButton.id = "helpButton";
helpButton.style.width = "294px";
helpButton.style.height = "64px";
helpButton.style.left = "0px";
helpButton.style.top = "163px";
helpButton.style.position = "absolute";
helpButton.style.cursor = "pointer";
helpButton.addEventListener("click", helpTab);
helpButton.addEventListener("click", closeNav);
helpButton.addEventListener("click", closeSideHelp);
helpButton.addEventListener("click", closeAboutUs);

buttons.appendChild(helpButton);

function helpTab() {
    document.getElementById("helpOverlay").style.width = "650px";
    document.getElementById("helpOverlay").style.height = "600px";
    document.getElementById("helpOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
      
function closeHelp() {
    document.getElementById("helpOverlay").style.width = "0";
    document.getElementById("helpOverlay").style.height = "0";
    document.getElementById("helpOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

var helpRect = document.createElement("div");
helpRect.id = "helpRect";
helpRect.style.left = "0px";
helpRect.style.top = "0px";
helpRect.style.width = "294px";
helpRect.style.height = "64px";
helpRect.style.borderRadius = "50px";
helpRect.style.background = 'rgba(254,248,232,1)';

helpButton.appendChild(helpRect);

var helpText = document.createElement("div");
helpText.innerHTML = "Help";
helpText.style.textAlign = "left";
helpText.id = "helpText";
helpText.style.left = "58px";
helpText.style.top = "18px";
helpText.style.width = "75px";
helpText.style.height = "55px";
helpText.style.fontFamily = "Radley";
helpText.style.fontSize = "28px";
helpText.style.overflow = "hidden";
helpText.style.color = "#000000";

helpButton.appendChild(helpText);

var questionMarkSymbol = document.createElement("div");
questionMarkSymbol.innerHTML = "?";
questionMarkSymbol.style.textAlign = "center";
questionMarkSymbol.id = "questionMarkSymbol";
questionMarkSymbol.style.left = "14px";
questionMarkSymbol.style.top = "3px";
questionMarkSymbol.style.width = "45px";
questionMarkSymbol.style.height = "97px";
questionMarkSymbol.style.fontFamily = "Radley";
questionMarkSymbol.style.fontSize = "48px";
questionMarkSymbol.style.textShadow = "0px 0px 1px #000000";
questionMarkSymbol.style.overflow = "hidden";
questionMarkSymbol.style.color = "#000000";

helpButton.appendChild(questionMarkSymbol);

var goBackButton = document.createElement("div");
goBackButton.id = "goBackButton";
goBackButton.style.width = "294px";
goBackButton.style.height = "64px";
goBackButton.style.left = "0px";
goBackButton.style.top = "243px";
goBackButton.style.position = "absolute";
goBackButton.style.cursor = "pointer";
goBackButton.addEventListener("click", goBack);
goBackButton.addEventListener("click", closeNav);
goBackButton.addEventListener("click", closeAboutUs);
goBackButton.addEventListener("click", closeHelp);
goBackButton.addEventListener("click", closeSideHelp);

buttons.appendChild(goBackButton);

function goBack() {
    location.href="schedule.html"
}
  

var goBackRect = document.createElement("div");
goBackRect.id = "goBackRect";
goBackRect.style.left = "0px";
goBackRect.style.top = "0px";
goBackRect.style.width = "294px";
goBackRect.style.height = "64px";
goBackRect.style.borderRadius = "50px";
goBackRect.style.background = 'rgba(254,248,232,1)';

goBackButton.appendChild(goBackRect);

var goBackText = document.createElement("div");
goBackText.innerHTML = "Go Back";
goBackText.style.textAlign = "left";
goBackText.id = "goBackText";
goBackText.style.left = "58px";
goBackText.style.top = "18px";
goBackText.style.width = "178px";
goBackText.style.height = "55px";
goBackText.style.fontFamily = "Radley";
goBackText.style.fontSize = "28px";
goBackText.style.overflow = "hidden";
goBackText.style.color = "#000000";

goBackButton.appendChild(goBackText);

var minusSymbol = document.createElement("div");
minusSymbol.innerHTML = "<-";
minusSymbol.style.textAlign = "center";
minusSymbol.id = "minusSymbol";
minusSymbol.style.left = "14px";
minusSymbol.style.top = "3px";
minusSymbol.style.width = "45px";
minusSymbol.style.height = "97px";
minusSymbol.style.fontFamily = "Radley";
minusSymbol.style.fontSize = "48px";
minusSymbol.style.textShadow = "0px 0px 1px #000000";
minusSymbol.style.overflow = "hidden";
minusSymbol.style.color = "#000000";

goBackButton.appendChild(minusSymbol);

// var image_2 = document.createElement("img");
// image_2.id = "image_2";
// image_2.style.left = "1188px";
// image_2.style.top = "12px";
// image_2.style.width = "31px";
// image_2.style.height = "31px";
// image_2.src = "skins/image_2.png";

// contentContainer.appendChild(image_2);

// var lance_supangan = document.createElement("div");
// lance_supangan.innerHTML = "Lance Supangan";
// lance_supangan.style.textAlign = "center";
// lance_supangan.id = "lance_supangan";
// lance_supangan.style.left = "1216px";
// lance_supangan.style.top = "16px";
// lance_supangan.style.width = "150px";
// lance_supangan.style.height = "36px";
// lance_supangan.style.fontFamily = "Sansation";
// lance_supangan.style.fontSize = "18px";
// lance_supangan.style.overflow = "hidden";
// lance_supangan.style.color = "#000000";

// contentContainer.appendChild(lance_supangan);

var line42 = document.createElement("div");
line42.id = "line42";
line42.style.left = "99px";
line42.style.top = "114px";
line42.style.width = "179.14px";
line42.style.height = "1px";
line42.style.transform = "rotate(39.11deg)";
line42.style.background = "#000000";

contentContainer.appendChild(line42);

var line43 = document.createElement("div");
line43.id = "line43";
line43.style.left = "128px";
line43.style.top = "114px";
line43.style.width = "179.14px";
line43.style.height = "1px";
line43.style.transform = "rotate(39.11deg)";
line43.style.background = "#000000";

contentContainer.appendChild(line43);

var line44 = document.createElement("div");
line44.id = "line44";
line44.style.left = "362px";
line44.style.top = "114px";
line44.style.width = "179.14px";
line44.style.height = "1px";
line44.style.transform = "rotate(39.11deg)";
line44.style.background = "#000000";

contentContainer.appendChild(line44);

var line45 = document.createElement("div");
line45.id = "line45";
line45.style.left = "391px";
line45.style.top = "114px";
line45.style.width = "179.14px";
line45.style.height = "1px";
line45.style.transform = "rotate(39.11deg)";
line45.style.background = "#000000";

contentContainer.appendChild(line45);

var line46 = document.createElement("div");
line46.id = "line46";
line46.style.left = "234px";
line46.style.top = "114px";
line46.style.width = "179.14px";
line46.style.height = "1px";
line46.style.transform = "rotate(39.11deg)";
line46.style.background = "#000000";

contentContainer.appendChild(line46);

var line47 = document.createElement("div");
line47.id = "line47";
line47.style.left = "263px";
line47.style.top = "114px";
line47.style.width = "179.14px";
line47.style.height = "1px";
line47.style.transform = "rotate(39.11deg)";
line47.style.background = "#000000";

contentContainer.appendChild(line47);

var line48 = document.createElement("div");
line48.id = "line48";
line48.style.left = "913px";
line48.style.top = "114px";
line48.style.width = "179.14px";
line48.style.height = "1px";
line48.style.transform = "rotate(-39.11deg)";
line48.style.background = "#000000";

contentContainer.appendChild(line48);

var line49 = document.createElement("div");
line49.id = "line49";
line49.style.left = "942px";
line49.style.top = "114px";
line49.style.width = "179.14px";
line49.style.height = "1px";
line49.style.transform = "rotate(-39.11deg)";
line49.style.background = "#000000";

contentContainer.appendChild(line49);

var line50 = document.createElement("div");
line50.id = "line50";
line50.style.left = "1176px";
line50.style.top = "114px";
line50.style.width = "179.14px";
line50.style.height = "1px";
line50.style.transform = "rotate(-39.11deg)";
line50.style.background = "#000000";

contentContainer.appendChild(line50);

var line51 = document.createElement("div");
line51.id = "line51";
line51.style.left = "1205px";
line51.style.top = "114px";
line51.style.width = "179.14px";
line51.style.height = "1px";
line51.style.transform = "rotate(-39.11deg)";
line51.style.background = "#000000";

contentContainer.appendChild(line51);

var line52 = document.createElement("div");
line52.id = "line52";
line52.style.left = "1048px";
line52.style.top = "114px";
line52.style.width = "179.14px";
line52.style.height = "1px";
line52.style.transform = "rotate(-39.11deg)";
line52.style.background = "#000000";

contentContainer.appendChild(line52);

var line53 = document.createElement("div");
line53.id = "line53";
line53.style.left = "1077px";
line53.style.top = "114px";
line53.style.width = "179.14px";
line53.style.height = "1px";
line53.style.transform = "rotate(-39.11deg)";
line53.style.background = "#000000";

contentContainer.appendChild(line53);

function openAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "595px";
    document.getElementById("aboutUsOverlay").style.height = "766px";
}
  
function closeAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "0";
    document.getElementById("aboutUsOverlay").style.height = "0";
}

function openSideHelp() {
    document.getElementById("sideHelpOverlay").style.width = "595px";
    document.getElementById("sideHelpOverlay").style.height = "766px";
}
  
function closeSideHelp() {
    document.getElementById("sideHelpOverlay").style.width = "0";
    document.getElementById("sideHelpOverlay").style.height = "0";
}

function getUser(){
    $(onload).ready(function(){
        currentUser = sessionStorage.getItem('currentUser');
        console.log(currentUser);
    })
}



