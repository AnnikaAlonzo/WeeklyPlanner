
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

contentContainer.appendChild(image_4);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var scheduleBox = document.createElement("div");
scheduleBox.id = "scheduleBox";
scheduleBox.style.width = "925px";
scheduleBox.style.height = "627px";
scheduleBox.style.left = "405px";
scheduleBox.style.top = "224px";
scheduleBox.style.position = "absolute";
contentContainer.appendChild(scheduleBox);

//Actual schedule box
var body = document.createElement("img");
body.id = "body";
body.style.left = "0px";
body.style.top = "0px";
body.style.width = "926px";
body.style.height = "627px";
body.src = "skins/body.png";

scheduleBox.appendChild(body);

var days = document.createElement("div");
days.id = "days";
days.style.width = "925px";
days.style.height = "73px";
days.style.left = "0px";
days.style.top = "103px";
days.style.position = "absolute";
scheduleBox.appendChild(days);


//M-Su Dates of Schedule (From rect 8 to 14)
var monRect = document.createElement("div"); //Monday
monRect.id = "monRect";
monRect.style.left = "0px";
monRect.style.top = "13px";
monRect.style.width = "132px";
monRect.style.height = "49px";
monRect.style.border = "1px solid #000000";
monRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(monRect);

var tuesRect = document.createElement("img"); //Tuesday
tuesRect.id = "tuesRect";
tuesRect.style.left = "132px";
tuesRect.style.top = "13px";
tuesRect.style.width = "132px";
tuesRect.style.height = "49px";
tuesRect.style.border = "1px solid #000000";
tuesRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(tuesRect);

var wedRect = document.createElement("div"); //Wednesday
wedRect.id = "wedRect";
wedRect.style.left = "264px";
wedRect.style.top = "13px";
wedRect.style.width = "132px";
wedRect.style.height = "49px";
wedRect.style.border = "1px solid #000000";
wedRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(wedRect);

var thursRect = document.createElement("div"); //Thursday
thursRect.id = "thursRect";
thursRect.style.left = "396px";
thursRect.style.top = "13px";
thursRect.style.width = "132px";
thursRect.style.height = "49px";
thursRect.style.border = "1px solid #000000";
thursRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(thursRect);

var friRect = document.createElement("div"); //Friday
friRect.id = "friRect";
friRect.style.left = "528px";
friRect.style.top = "13px";
friRect.style.width = "132px";
friRect.style.height = "49px";
friRect.style.border = "1px solid #000000";
friRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(friRect);

var satRect = document.createElement("div"); //Saturday
satRect.id = "satRect";
satRect.style.left = "660px";
satRect.style.top = "13px";
satRect.style.width = "132px";
satRect.style.height = "49px";
satRect.style.border = "1px solid #000000";
satRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(satRect);

var sunRect = document.createElement("div"); //Sunday
sunRect.id = "sunRect";
sunRect.style.left = "791px";
sunRect.style.top = "13px";
sunRect.style.width = "132px";
sunRect.style.height = "49px";
sunRect.style.border = "1px solid #000000";
sunRect.style.background = 'rgba(225,221,221,1)';

days.appendChild(sunRect);

var m = document.createElement("div");
m.innerHTML = "M";
m.style.textAlign = "center";
m.id = "m";
m.style.left = "35px";
m.style.top = "0px";
m.style.width = "67px";
m.style.height = "108px";
m.style.fontFamily = "Poppins";
m.style.fontSize = "48px";
m.style.textShadow = "0px 0px 1px #000000";
m.style.overflow = "hidden";
m.style.color = "#000000";

days.appendChild(m);

var t = document.createElement("div");
t.innerHTML = "T";
t.style.textAlign = "center";
t.id = "t";
t.style.left = "174px";
t.style.top = "0px";
t.style.width = "51px";
t.style.height = "108px";
t.style.fontFamily = "Poppins";
t.style.fontSize = "48px";
t.style.textShadow = "0px 0px 1px #000000";
t.style.overflow = "hidden";
t.style.color = "#000000";

days.appendChild(t);

var f = document.createElement("div");
f.innerHTML = "F";
f.style.textAlign = "center";
f.id = "f";
f.style.left = "571px";
f.style.top = "1px";
f.style.width = "50px";
f.style.height = "108px";
f.style.fontFamily = "Poppins";
f.style.fontSize = "48px";
f.style.textShadow = "0px 0px 1px #000000";
f.style.overflow = "hidden";
f.style.color = "#000000";

days.appendChild(f);

var s = document.createElement("div");
s.innerHTML = "S";
s.style.textAlign = "center";
s.id = "s";
s.style.left = "700px";
s.style.top = "0px";
s.style.width = "54px";
s.style.height = "108px";
s.style.fontFamily = "Poppins";
s.style.fontSize = "48px";
s.style.textShadow = "0px 0px 1px #000000";
s.style.overflow = "hidden";
s.style.color = "#000000";

days.appendChild(s);

var su = document.createElement("div");
su.innerHTML = "Su";
su.style.textAlign = "center";
su.id = "su";
su.style.left = "820px";
su.style.top = "1px";
su.style.width = "84px";
su.style.height = "108px";
su.style.fontFamily = "Poppins";
su.style.fontSize = "48px";
su.style.textShadow = "0px 0px 1px #000000";
su.style.overflow = "hidden";
su.style.color = "#000000";

days.appendChild(su);

var w = document.createElement("div");
w.innerHTML = "W";
w.style.textAlign = "center";
w.id = "w";
w.style.left = "295px";
w.style.top = "0px";
w.style.width = "72px";
w.style.height = "108px";
w.style.fontFamily = "Poppins";
w.style.fontSize = "48px";
w.style.textShadow = "0px 0px 1px #000000";
w.style.overflow = "hidden";
w.style.color = "#000000";

days.appendChild(w);

var h = document.createElement("div");
h.innerHTML = "H";
h.style.textAlign = "center";
h.id = "h";
h.style.left = "433px";
h.style.top = "0px";
h.style.width = "59px";
h.style.height = "108px";
h.style.fontFamily = "Poppins";
h.style.fontSize = "48px";
h.style.textShadow = "0px 0px 1px #000000";
h.style.overflow = "hidden";
h.style.color = "#000000";

days.appendChild(h);

var monYrLabel = document.createElement("div");
monYrLabel.id = "monYrLabel";
monYrLabel.style.width = "814px";
monYrLabel.style.height = "116px";
monYrLabel.style.left = "55px";
monYrLabel.style.top = "0px";
monYrLabel.style.position = "absolute";
scheduleBox.appendChild(monYrLabel);

var date1 = document.createElement("div");
date1.innerHTML = "3";
date1.style.textAlign = "center";
date1.id = "date1";
date1.style.left = "-4px";
date1.style.top = "79px";
date1.style.width = "27px";
date1.style.height = "53px";
date1.style.fontFamily = "Poppins";
date1.style.fontSize = "24px";
date1.style.overflow = "hidden";
date1.style.color = "#000000";

monYrLabel.appendChild(date1);

var date2 = document.createElement("div");
date2.innerHTML = "4";
date2.style.textAlign = "center";
date2.id = "date2";
date2.style.left = "131px";
date2.style.top = "79px";
date2.style.width = "27px";
date2.style.height = "53px";
date2.style.fontFamily = "Poppins";
date2.style.fontSize = "24px";
date2.style.overflow = "hidden";
date2.style.color = "#000000";

monYrLabel.appendChild(date2);

var date5 = document.createElement("div");
date5.innerHTML = "7";
date5.style.textAlign = "center";
date5.id = "date5";
date5.style.left = "528px";
date5.style.top = "79px";
date5.style.width = "25px";
date5.style.height = "53px";
date5.style.fontFamily = "Poppins";
date5.style.fontSize = "24px";
date5.style.overflow = "hidden";
date5.style.color = "#000000";

monYrLabel.appendChild(date5);

var date6 = document.createElement("div");
date6.innerHTML = "8";
date6.style.textAlign = "center";
date6.id = "date6";
date6.style.left = "659px";
date6.style.top = "79px";
date6.style.width = "27px";
date6.style.height = "53px";
date6.style.fontFamily = "Poppins";
date6.style.fontSize = "24px";
date6.style.overflow = "hidden";
date6.style.color = "#000000";

monYrLabel.appendChild(date6);

var date7 = document.createElement("div");
date7.innerHTML = "9";
date7.style.textAlign = "center";
date7.id = "date7";
date7.style.left = "795px";
date7.style.top = "79px";
date7.style.width = "27px";
date7.style.height = "53px";
date7.style.fontFamily = "Poppins";
date7.style.fontSize = "24px";
date7.style.overflow = "hidden";
date7.style.color = "#000000";

monYrLabel.appendChild(date7);

var date3 = document.createElement("div");
date3.innerHTML = "5";
date3.style.textAlign = "center";
date3.id = "date3";
date3.style.left = "263px";
date3.style.top = "79px";
date3.style.width = "27px";
date3.style.height = "53px";
date3.style.fontFamily = "Poppins";
date3.style.fontSize = "24px";
date3.style.overflow = "hidden";
date3.style.color = "#000000";

monYrLabel.appendChild(date3);

var date4 = document.createElement("div");
date4.innerHTML = "6";
date4.style.textAlign = "center";
date4.id = "date4";
date4.style.left = "394px";
date4.style.top = "79px";
date4.style.width = "28px";
date4.style.height = "53px";
date4.style.fontFamily = "Poppins";
date4.style.fontSize = "24px";
date4.style.overflow = "hidden";
date4.style.color = "#000000";

monYrLabel.appendChild(date4);

var month = document.createElement("div");
month.innerHTML = "APRIL";
month.style.textAlign = "center";
month.id = "month";
month.style.left = "165px";
month.style.top = "15px";
month.style.width = "399px";
month.style.height = "113px";
month.style.fontFamily = "Sansation";
month.style.fontSize = "48px";
month.style.overflow = "hidden";
month.style.color = "#000000";

monYrLabel.appendChild(month);

var year = document.createElement("div");
year.innerHTML = "2021";
year.style.textAlign = "center";
year.id = "year";
year.style.left = "295px";
year.style.top = "15px";
year.style.width = "399px";
year.style.height = "113px";
year.style.fontFamily = "Sansation";
year.style.fontSize = "48px";
year.style.overflow = "hidden";
year.style.color = "#000000";

monYrLabel.appendChild(year);

var dividers = document.createElement("div");
dividers.id = "dividers";
dividers.style.width = "660px";
dividers.style.height = "464px";
dividers.style.left = "132px";
dividers.style.top = "163px";
dividers.style.position = "absolute";
scheduleBox.appendChild(dividers);

var line1 = document.createElement("div");
line1.id = "line1";
line1.style.left = "-229px";
line1.style.top = "232px";
line1.style.width = "459px";
line1.style.height = "1px";
line1.style.transform = "rotate(-90deg)";
line1.style.background = "#000000";

dividers.appendChild(line1);

var line2 = document.createElement("div");
line2.id = "line2";
line2.style.left = "-97px";
line2.style.top = "232px";
line2.style.width = "459px";
line2.style.height = "1px";
line2.style.transform = "rotate(-90deg)";
line2.style.background = "#000000";

dividers.appendChild(line2);

var line3 = document.createElement("div");
line3.id = "line3";
line3.style.left = "35px";
line3.style.top = "232px";
line3.style.width = "459px";
line3.style.height = "1px";
line3.style.transform = "rotate(-90deg)";
line3.style.background = "#000000";

dividers.appendChild(line3);

var line4 = document.createElement("div");
line4.id = "line4";
line4.style.left = "167px";
line4.style.top = "232px";
line4.style.width = "459px";
line4.style.height = "1px";
line4.style.transform = "rotate(-90deg)";
line4.style.background = "#000000";

dividers.appendChild(line4);

var line5 = document.createElement("div");
line5.id = "line5";
line5.style.left = "299px";
line5.style.top = "232px";
line5.style.width = "459px";
line5.style.height = "1px";
line5.style.transform = "rotate(-90deg)";
line5.style.background = "#000000";

dividers.appendChild(line5);

var line6 = document.createElement("div");
line6.id = "line6";
line6.style.left = "430px";
line6.style.top = "232px";
line6.style.width = "459px";
line6.style.height = "1px";
line6.style.transform = "rotate(-90deg)";
line6.style.background = "#000000";

dividers.appendChild(line6);

var rightArrow = document.createElement("img"); //Right tab
rightArrow.id = "rightArrow";
rightArrow.style.left = "878px";
rightArrow.style.top = "40px";
rightArrow.style.width = "30px";
rightArrow.style.height = "30px";
rightArrow.src = "skins/arrow_1.png";
rightArrow.style.cursor = "pointer";

scheduleBox.appendChild(rightArrow);

var leftArrow = document.createElement("img"); //Left tab
leftArrow.id = "leftArrow";
leftArrow.style.left = "20px";
leftArrow.style.top = "40px";
leftArrow.style.width = "30px";
leftArrow.style.height = "30px";
leftArrow.src = "skins/arrow_2.png";
leftArrow.style.cursor = "pointer";

scheduleBox.appendChild(leftArrow);

var downArrow = document.createElement("img"); //Month and year tab
downArrow.id = "downArrow";
downArrow.style.left = "310px";
downArrow.style.top = "35px";
downArrow.style.width = "30px";
downArrow.style.height = "20px";
downArrow.src = "skins/arrow_3.png";
downArrow.style.cursor = "pointer";
downArrow.addEventListener("click", showHide);

scheduleBox.appendChild(downArrow);

function showHide() {  
    var click = document.getElementById("list-items");
    if(click.style.display === "none") {  
       click.style.display = "block";  
    } else {  
       click.style.display = "none";  
    }   
}  

var buttons = document.createElement("div");
buttons.id = "buttons";
buttons.style.width = "294px";
buttons.style.height = "467px";
buttons.style.left = "61px";
buttons.style.top = "340px";
buttons.style.position = "absolute";
contentContainer.appendChild(buttons);

var remindersButton = document.createElement("div");
remindersButton.id = "remindersButton";
remindersButton.style.width = "294px";
remindersButton.style.height = "64px";
remindersButton.style.left = "0px";
remindersButton.style.top = "323px";
remindersButton.style.position = "absolute";
remindersButton.style.cursor = "pointer";
buttons.appendChild(remindersButton);

var remindersRect = document.createElement("div");
remindersRect.id = "remindersRect";
remindersRect.style.left = "0px";
remindersRect.style.top = "0px";
remindersRect.style.width = "294px";
remindersRect.style.height = "64px";
remindersRect.style.borderRadius = "50px";
remindersRect.style.background = 'rgba(254,248,232,1)';

remindersButton.appendChild(remindersRect);

var remindersText = document.createElement("div");
remindersText.innerHTML = "Reminders";
remindersText.style.textAlign = "left";
remindersText.id = "remindersText";
remindersText.style.left = "58px";
remindersText.style.top = "18px";
remindersText.style.width = "148px";
remindersText.style.height = "55px";
remindersText.style.fontFamily = "Radley";
remindersText.style.fontSize = "28px";
remindersText.style.overflow = "hidden";
remindersText.style.color = "#000000";

remindersButton.appendChild(remindersText);

var o = document.createElement("div");
o.innerHTML = "o";
o.style.textAlign = "center";
o.id = "o";
o.style.left = "10px";
o.style.top = "1px";
o.style.width = "53px";
o.style.height = "97px";
o.style.fontFamily = "Radley";
o.style.fontSize = "48px";
o.style.textShadow = "0px 0px 1px #000000";
o.style.overflow = "hidden";
o.style.color = "#000000";

remindersButton.appendChild(o);

var helpButton = document.createElement("div");
helpButton.id = "helpButton";
helpButton.style.width = "294px";
helpButton.style.height = "64px";
helpButton.style.left = "0px";
helpButton.style.top = "403px";
helpButton.style.position = "absolute";
helpButton.style.cursor = "pointer";
buttons.appendChild(helpButton);

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

var removeSchedButton = document.createElement("div");
removeSchedButton.id = "removeSchedButton";
removeSchedButton.style.width = "294px";
removeSchedButton.style.height = "64px";
removeSchedButton.style.left = "0px";
removeSchedButton.style.top = "163px";
removeSchedButton.style.position = "absolute";
removeSchedButton.style.cursor = "pointer";
buttons.appendChild(removeSchedButton);

var removeTaskButton = document.createElement("div");
removeTaskButton.id = "removeTaskButton";
removeTaskButton.style.left = "0px";
removeTaskButton.style.top = "0px";
removeTaskButton.style.width = "294px";
removeTaskButton.style.height = "64px";
removeTaskButton.style.borderRadius = "50px";
removeTaskButton.style.background = 'rgba(254,248,232,1)';

removeSchedButton.appendChild(removeTaskButton);

var removeTaskText = document.createElement("div");
removeTaskText.innerHTML = "Remove Task";
removeTaskText.style.textAlign = "left";
removeTaskText.id = "removeTaskText";
removeTaskText.style.left = "58px";
removeTaskText.style.top = "18px";
removeTaskText.style.width = "178px";
removeTaskText.style.height = "55px";
removeTaskText.style.fontFamily = "Radley";
removeTaskText.style.fontSize = "28px";
removeTaskText.style.overflow = "hidden";
removeTaskText.style.color = "#000000";

removeSchedButton.appendChild(removeTaskText);

var minusSymbol = document.createElement("div");
minusSymbol.innerHTML = "-";
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

removeSchedButton.appendChild(minusSymbol);

var viewSchedButton = document.createElement("div");
viewSchedButton.id = "viewSchedButton";
viewSchedButton.style.width = "294px";
viewSchedButton.style.height = "64px";
viewSchedButton.style.left = "0px";
viewSchedButton.style.top = "243px";
viewSchedButton.style.position = "absolute";
viewSchedButton.style.cursor = "pointer";
buttons.appendChild(viewSchedButton);

var viewSchedRect = document.createElement("div");
viewSchedRect.id = "viewSchedRect";
viewSchedRect.style.left = "0px";
viewSchedRect.style.top = "0px";
viewSchedRect.style.width = "294px";
viewSchedRect.style.height = "64px";
viewSchedRect.style.borderRadius = "50px";
viewSchedRect.style.background = 'rgba(254,248,232,1)';

viewSchedButton.appendChild(viewSchedRect);

var viewSchedText = document.createElement("div");
viewSchedText.innerHTML = "View Schedule";
viewSchedText.style.textAlign = "left";
viewSchedText.id = "viewSchedText";
viewSchedText.style.left = "58px";
viewSchedText.style.top = "18px";
viewSchedText.style.width = "194px";
viewSchedText.style.height = "55px";
viewSchedText.style.fontFamily = "Radley";
viewSchedText.style.fontSize = "28px";
viewSchedText.style.overflow = "hidden";
viewSchedText.style.color = "#000000";

viewSchedButton.appendChild(viewSchedText);

var arrowSymbol = document.createElement("div");
arrowSymbol.innerHTML = ">";
arrowSymbol.style.textAlign = "center";
arrowSymbol.id = "arrowSymbol";
arrowSymbol.style.left = "16px";
arrowSymbol.style.top = "3px";
arrowSymbol.style.width = "41px";
arrowSymbol.style.height = "97px";
arrowSymbol.style.fontFamily = "Radley";
arrowSymbol.style.fontSize = "48px";
arrowSymbol.style.textShadow = "0px 0px 1px #000000";
arrowSymbol.style.overflow = "hidden";
arrowSymbol.style.color = "#000000";

viewSchedButton.appendChild(arrowSymbol);

var editTaskButton = document.createElement("div");
editTaskButton.id = "editTaskButton";
editTaskButton.style.width = "294px";
editTaskButton.style.height = "64px";
editTaskButton.style.left = "0px";
editTaskButton.style.top = "83px";
editTaskButton.style.position = "absolute";
editTaskButton.style.cursor = "pointer";
buttons.appendChild(editTaskButton);

var editTaskRect = document.createElement("div");
editTaskRect.id = "editTaskRect";
editTaskRect.style.left = "0px";
editTaskRect.style.top = "0px";
editTaskRect.style.width = "294px";
editTaskRect.style.height = "64px";
editTaskRect.style.borderRadius = "50px";
editTaskRect.style.background = 'rgba(254,248,232,1)';

editTaskButton.appendChild(editTaskRect);

var editTaskText = document.createElement("div");
editTaskText.innerHTML = "Edit Task";
editTaskText.style.textAlign = "left";
editTaskText.id = "editTaskText";
editTaskText.style.left = "58px";
editTaskText.style.top = "18px";
editTaskText.style.width = "133px";
editTaskText.style.height = "55px";
editTaskText.style.fontFamily = "Radley";
editTaskText.style.fontSize = "28px";
editTaskText.style.overflow = "hidden";
editTaskText.style.color = "#000000";

editTaskButton.appendChild(editTaskText);

var wavyDashSymbol = document.createElement("div");
wavyDashSymbol.innerHTML = "~";
wavyDashSymbol.style.textAlign = "center";
wavyDashSymbol.id = "wavyDashSymbol";
wavyDashSymbol.style.left = "13px";
wavyDashSymbol.style.top = "3px";
wavyDashSymbol.style.width = "47px";
wavyDashSymbol.style.height = "97px";
wavyDashSymbol.style.fontFamily = "Radley";
wavyDashSymbol.style.fontSize = "48px";
wavyDashSymbol.style.textShadow = "0px 0px 1px #000000";
wavyDashSymbol.style.overflow = "hidden";
wavyDashSymbol.style.color = "#000000";

editTaskButton.appendChild(wavyDashSymbol);

var addTaskButton = document.createElement("div");
addTaskButton.id = "addTaskButton";
addTaskButton.style.width = "294px";
addTaskButton.style.height = "67px";
addTaskButton.style.left = "0px";
addTaskButton.style.top = "0px";
addTaskButton.style.position = "absolute";
addTaskButton.style.cursor = "pointer";
buttons.appendChild(addTaskButton);

var addTaskRect = document.createElement("div");
addTaskRect.id = "addTaskRect";
addTaskRect.style.left = "0px";
addTaskRect.style.top = "0px";
addTaskRect.style.width = "294px";
addTaskRect.style.height = "67px";
addTaskRect.style.borderRadius = "50px";
addTaskRect.style.background = 'rgba(253.94,247.59,231.72,1)';

addTaskButton.appendChild(addTaskRect);

var addTaskText = document.createElement("div");
addTaskText.innerHTML = "Add Task";
addTaskText.style.textAlign = "left";
addTaskText.id = "addTaskText";
addTaskText.style.left = "58px";
addTaskText.style.top = "16px";
addTaskText.style.width = "208.11px";
addTaskText.style.height = "55px";
addTaskText.style.fontFamily = "Radley";
addTaskText.style.fontSize = "28px";
addTaskText.style.overflow = "hidden";
addTaskText.style.color = "#000000";

addTaskButton.appendChild(addTaskText);

var plusSymbol = document.createElement("div");
plusSymbol.innerHTML = "+";
plusSymbol.style.textAlign = "center";
plusSymbol.id = "plusSymbol";
plusSymbol.style.left = "9px";
plusSymbol.style.top = "3px";
plusSymbol.style.width = "56px";
plusSymbol.style.height = "97px";
plusSymbol.style.fontFamily = "Radley";
plusSymbol.style.fontSize = "48px";
plusSymbol.style.textShadow = "0px 0px 1px #000000";
plusSymbol.style.overflow = "hidden";
plusSymbol.style.color = "#000000";

addTaskButton.appendChild(plusSymbol);

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

