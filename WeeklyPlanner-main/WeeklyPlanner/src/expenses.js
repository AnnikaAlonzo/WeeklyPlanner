
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgExpenses = document.createElement("div");
bgExpenses.id = "bgExpenses";
bgExpenses.style.left = "0px";
bgExpenses.style.top = "0px";
bgExpenses.style.width = "1440px";
bgExpenses.style.height = "1024px";
bgExpenses.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgExpenses);

// var image_6 = document.createElement("img");
// image_6.id = "image_6";
// image_6.style.left = "1188px";
// image_6.style.top = "12px";
// image_6.style.width = "31px";
// image_6.style.height = "31px";
// image_6.src = "skins/image_6.png";

// contentContainer.appendChild(image_6);

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

var header = document.createElement("div");
header.id = "header";
header.style.width = "1440px";
header.style.height = "113px";
header.style.left = "0px";
header.style.top = "60px";
header.style.position = "absolute";
contentContainer.appendChild(header);

var headerRect = document.createElement("div");
headerRect.id = "headerRect";
headerRect.style.left = "0px";
headerRect.style.top = "0px";
headerRect.style.width = "1440px";
headerRect.style.height = "113px";
headerRect.style.background = 'rgba(225,221,221,1)';

header.appendChild(headerRect);

var expenses = document.createElement("div");
expenses.innerHTML = "EXPENSES";
expenses.style.textAlign = "center";
expenses.id = "expenses";
expenses.style.left = "529px";
expenses.style.top = "17px";
expenses.style.width = "436px";
expenses.style.height = "124px";
expenses.style.fontFamily = "Sansation";
expenses.style.fontSize = "64px";
expenses.style.overflow = "hidden";
expenses.style.color = "#000000";

header.appendChild(expenses);

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

var body = document.createElement("img");
body.id = "body";
body.style.left = "0px";
body.style.top = "0px";
body.style.width = "925px";
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

var downArrow = document.createElement("img");
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
buttons.style.width = "297px";
buttons.style.height = "471px";
buttons.style.left = "61px";
buttons.style.top = "340px";
buttons.style.position = "absolute";
contentContainer.appendChild(buttons);

var tallyExpButton = document.createElement("div");
tallyExpButton.id = "tallyExpButton";
tallyExpButton.style.width = "294px";
tallyExpButton.style.height = "66px";
tallyExpButton.style.left = "0px";
tallyExpButton.style.top = "243px";
tallyExpButton.style.position = "absolute";
buttons.appendChild(tallyExpButton);

var tallyExpRect = document.createElement("div");
tallyExpRect.id = "tallyExpRect";
tallyExpRect.style.left = "0px";
tallyExpRect.style.top = "0px";
tallyExpRect.style.width = "294px";
tallyExpRect.style.height = "64px";
tallyExpRect.style.borderRadius = "50px";
tallyExpRect.style.background = 'rgba(254,248,232,1)';

tallyExpButton.appendChild(tallyExpRect);

var tallyExpText = document.createElement("div");
tallyExpText.innerHTML = "Tally Expenses";
tallyExpText.style.textAlign = "left";
tallyExpText.id = "tallyExpText";
tallyExpText.style.left = "58px";
tallyExpText.style.top = "18px";
tallyExpText.style.width = "198px";
tallyExpText.style.height = "55px";
tallyExpText.style.fontFamily = "Radley";
tallyExpText.style.fontSize = "28px";
tallyExpText.style.overflow = "hidden";
tallyExpText.style.color = "#000000";

tallyExpButton.appendChild(tallyExpText);

var asteriskSymbol = document.createElement("div");
asteriskSymbol.innerHTML = "*";
asteriskSymbol.style.textAlign = "center";
asteriskSymbol.id = "asteriskSymbol";
asteriskSymbol.style.left = "9px";
asteriskSymbol.style.top = "5px";
asteriskSymbol.style.width = "55px";
asteriskSymbol.style.height = "97px";
asteriskSymbol.style.fontFamily = "Radley";
asteriskSymbol.style.fontSize = "48px";
asteriskSymbol.style.textShadow = "0px 0px 1px #000000";
asteriskSymbol.style.overflow = "hidden";
asteriskSymbol.style.color = "#000000";

tallyExpButton.appendChild(asteriskSymbol);

var viewExpButton = document.createElement("div");
viewExpButton.id = "viewExpButton";
viewExpButton.style.width = "294px";
viewExpButton.style.height = "66px";
viewExpButton.style.left = "0px";
viewExpButton.style.top = "325px";
viewExpButton.style.position = "absolute";
buttons.appendChild(viewExpButton);

var viewExpRect = document.createElement("div");
viewExpRect.id = "viewExpRect";
viewExpRect.style.left = "0px";
viewExpRect.style.top = "0px";
viewExpRect.style.width = "294px";
viewExpRect.style.height = "64px";
viewExpRect.style.borderRadius = "50px";
viewExpRect.style.background = 'rgba(254,248,232,1)';

viewExpButton.appendChild(viewExpRect);

var viewExpText = document.createElement("div");
viewExpText.innerHTML = "View Expenses";
viewExpText.style.textAlign = "left";
viewExpText.id = "viewExpText";
viewExpText.style.left = "58px";
viewExpText.style.top = "18px";
viewExpText.style.width = "197px";
viewExpText.style.height = "55px";
viewExpText.style.fontFamily = "Radley";
viewExpText.style.fontSize = "28px";
viewExpText.style.overflow = "hidden";
viewExpText.style.color = "#000000";

viewExpButton.appendChild(viewExpText);

var arrowSymbol = document.createElement("div");
arrowSymbol.innerHTML = ">";
arrowSymbol.style.textAlign = "center";
arrowSymbol.id = "arrowSymbol";
arrowSymbol.style.left = "16px";
arrowSymbol.style.top = "5px";
arrowSymbol.style.width = "41px";
arrowSymbol.style.height = "97px";
arrowSymbol.style.fontFamily = "Radley";
arrowSymbol.style.fontSize = "48px";
arrowSymbol.style.textShadow = "0px 0px 1px #000000";
arrowSymbol.style.overflow = "hidden";
arrowSymbol.style.color = "#000000";

viewExpButton.appendChild(arrowSymbol);

var helpButton = document.createElement("div");
helpButton.id = "helpButton";
helpButton.style.width = "294px";
helpButton.style.height = "64px";
helpButton.style.left = "3px";
helpButton.style.top = "407px";
helpButton.style.position = "absolute";
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

var removeExpButton = document.createElement("div");
removeExpButton.id = "removeExpButton";
removeExpButton.style.width = "294px";
removeExpButton.style.height = "64px";
removeExpButton.style.left = "0px";
removeExpButton.style.top = "163px";
removeExpButton.style.position = "absolute";
buttons.appendChild(removeExpButton);

var removeExpRect = document.createElement("div");
removeExpRect.id = "removeExpRect";
removeExpRect.style.left = "0px";
removeExpRect.style.top = "0px";
removeExpRect.style.width = "294px";
removeExpRect.style.height = "64px";
removeExpRect.style.borderRadius = "50px";
removeExpRect.style.background = 'rgba(254,248,232,1)';

removeExpButton.appendChild(removeExpRect);

var removeExpText = document.createElement("div");
removeExpText.innerHTML = "Remove Expense";
removeExpText.style.textAlign = "left";
removeExpText.id = "removeExpText";
removeExpText.style.left = "58px";
removeExpText.style.top = "18px";
removeExpText.style.width = "224px";
removeExpText.style.height = "55px";
removeExpText.style.fontFamily = "Radley";
removeExpText.style.fontSize = "28px";
removeExpText.style.overflow = "hidden";
removeExpText.style.color = "#000000";

removeExpButton.appendChild(removeExpText);

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

removeExpButton.appendChild(minusSymbol);

var editExpButton = document.createElement("div");
editExpButton.id = "editExpButton";
editExpButton.style.width = "294px";
editExpButton.style.height = "64px";
editExpButton.style.left = "0px";
editExpButton.style.top = "83px";
editExpButton.style.position = "absolute";
buttons.appendChild(editExpButton);

var editExpRect = document.createElement("div");
editExpRect.id = "editExpRect";
editExpRect.style.left = "0px";
editExpRect.style.top = "0px";
editExpRect.style.width = "294px";
editExpRect.style.height = "64px";
editExpRect.style.borderRadius = "50px";
editExpRect.style.background = 'rgba(254,248,232,1)';

editExpButton.appendChild(editExpRect);

var editExpText = document.createElement("div");
editExpText.innerHTML = "Edit Expense";
editExpText.style.textAlign = "left";
editExpText.id = "editExpText";
editExpText.style.left = "58px";
editExpText.style.top = "18px";
editExpText.style.width = "179px";
editExpText.style.height = "55px";
editExpText.style.fontFamily = "Radley";
editExpText.style.fontSize = "28px";
editExpText.style.overflow = "hidden";
editExpText.style.color = "#000000";

editExpButton.appendChild(editExpText);

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

editExpButton.appendChild(wavyDashSymbol);

var addExpButton = document.createElement("div");
addExpButton.id = "addExpButton";
addExpButton.style.width = "294px";
addExpButton.style.height = "67px";
addExpButton.style.left = "0px";
addExpButton.style.top = "0px";
addExpButton.style.position = "absolute";
addExpButton.style.cursor = "pointer";
addExpButton.addEventListener("click", addExp);
addExpButton.addEventListener("click", closeNav);

buttons.appendChild(addExpButton);

function addExp() {
    document.getElementById("myOverlay").style.width = "600px";
    document.getElementById("myOverlay").style.height = "400px";
    document.getElementById("myOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeAdd() {
    document.getElementById("myOverlay").style.width = "0";
    document.getElementById("myOverlay").style.height = "0";
    document.getElementById("myOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

var addExpRect = document.createElement("div");
addExpRect.id = "addExpRect";
addExpRect.style.left = "0px";
addExpRect.style.top = "0px";
addExpRect.style.width = "294px";
addExpRect.style.height = "67px";
addExpRect.style.borderRadius = "50px";
addExpRect.style.background = 'rgba(254,248,232,1)';

addExpButton.appendChild(addExpRect);

var addExpText = document.createElement("div");
addExpText.innerHTML = "Add Expense";
addExpText.style.textAlign = "left";
addExpText.id = "addExpText";
addExpText.style.left = "58px";
addExpText.style.top = "16px";
addExpText.style.width = "208.11px";
addExpText.style.height = "55px";
addExpText.style.fontFamily = "Radley";
addExpText.style.fontSize = "28px";
addExpText.style.overflow = "hidden";
addExpText.style.color = "#000000";

addExpButton.appendChild(addExpText);

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

addExpButton.appendChild(plusSymbol);

var line30 = document.createElement("div");
line30.id = "line30";
line30.style.left = "102px";
line30.style.top = "117px";
line30.style.width = "179.14px";
line30.style.height = "1px";
line30.style.transform = "rotate(39.11deg)";
line30.style.background = "#000000";

contentContainer.appendChild(line30);

var line31 = document.createElement("div");
line31.id = "line31";
line31.style.left = "131px";
line31.style.top = "117px";
line31.style.width = "179.14px";
line31.style.height = "1px";
line31.style.transform = "rotate(39.11deg)";
line31.style.background = "#000000";

contentContainer.appendChild(line31);

var line32 = document.createElement("div");
line32.id = "line32";
line32.style.left = "365px";
line32.style.top = "117px";
line32.style.width = "179.14px";
line32.style.height = "1px";
line32.style.transform = "rotate(39.11deg)";
line32.style.background = "#000000";

contentContainer.appendChild(line32);

var line33 = document.createElement("div");
line33.id = "line33";
line33.style.left = "394px";
line33.style.top = "117px";
line33.style.width = "179.14px";
line33.style.height = "1px";
line33.style.transform = "rotate(39.11deg)";
line33.style.background = "#000000";

contentContainer.appendChild(line33);

var line34 = document.createElement("div");
line34.id = "line34";
line34.style.left = "237px";
line34.style.top = "117px";
line34.style.width = "179.14px";
line34.style.height = "1px";
line34.style.transform = "rotate(39.11deg)";
line34.style.background = "#000000";

contentContainer.appendChild(line34);

var line35 = document.createElement("div");
line35.id = "line35";
line35.style.left = "266px";
line35.style.top = "117px";
line35.style.width = "179.14px";
line35.style.height = "1px";
line35.style.transform = "rotate(39.11deg)";
line35.style.background = "#000000";

contentContainer.appendChild(line35);

var line36 = document.createElement("div");
line36.id = "line36";
line36.style.left = "916px";
line36.style.top = "117px";
line36.style.width = "179.14px";
line36.style.height = "1px";
line36.style.transform = "rotate(-39.11deg)";
line36.style.background = "#000000";

contentContainer.appendChild(line36);

var line37 = document.createElement("div");
line37.id = "line37";
line37.style.left = "945px";
line37.style.top = "117px";
line37.style.width = "179.14px";
line37.style.height = "1px";
line37.style.transform = "rotate(-39.11deg)";
line37.style.background = "#000000";

contentContainer.appendChild(line37);

var line38 = document.createElement("div");
line38.id = "line38";
line38.style.left = "1179px";
line38.style.top = "117px";
line38.style.width = "179.14px";
line38.style.height = "1px";
line38.style.transform = "rotate(-39.11deg)";
line38.style.background = "#000000";

contentContainer.appendChild(line38);

var line39 = document.createElement("div");
line39.id = "line39";
line39.style.left = "1208px";
line39.style.top = "117px";
line39.style.width = "179.14px";
line39.style.height = "1px";
line39.style.transform = "rotate(-39.11deg)";
line39.style.background = "#000000";

contentContainer.appendChild(line39);

var line40 = document.createElement("div");
line40.id = "line40";
line40.style.left = "1051px";
line40.style.top = "117px";
line40.style.width = "179.14px";
line40.style.height = "1px";
line40.style.transform = "rotate(-39.11deg)";
line40.style.background = "#000000";

contentContainer.appendChild(line40);

var line41 = document.createElement("div");
line41.id = "line41";
line41.style.left = "1080px";
line41.style.top = "117px";
line41.style.width = "179.14px";
line41.style.height = "1px";
line41.style.transform = "rotate(-39.11deg)";
line41.style.background = "#000000";

contentContainer.appendChild(line41);

function clearInput() {
    document.getElementById("nameInp").value = "";
    document.getElementById("amntInp").value = "";

    for (var i=1; i<=7; i++){
        document.getElementById("button"+i).style.backgroundColor= "white";
    }
}

function selectBtn(IDS) {
    if (document.getElementById(IDS).className == "unSelected") {
        document.getElementById(IDS).className = "Selected";
        document.getElementById(IDS).style.backgroundColor = '#ffe298';
    } else {
        document.getElementById(IDS).className = "unSelected";
        document.getElementById(IDS).style.backgroundColor = 'white';
    }
}