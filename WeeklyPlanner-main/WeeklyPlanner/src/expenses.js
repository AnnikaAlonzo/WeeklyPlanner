
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
image_4.addEventListener("click", closeAdd);
image_4.addEventListener("click", closeRem);
image_4.addEventListener("click", closeTally);
image_4.addEventListener("click", closeEdit);
image_4.addEventListener("click", closeHelp);
image_4.addEventListener("click", closeSideHelp);
image_4.addEventListener("click", closeAboutUs);

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
tallyExpButton.style.cursor = "pointer";
tallyExpButton.addEventListener("click", tallyExp);
tallyExpButton.addEventListener("click", closeNav);
tallyExpButton.addEventListener("click", closeAdd);
tallyExpButton.addEventListener("click", closeRem);
tallyExpButton.addEventListener("click", closeEdit);
tallyExpButton.addEventListener("click", closeHelp);
tallyExpButton.addEventListener("click", closeSideHelp);
tallyExpButton.addEventListener("click", closeAboutUs);

tallyExpButton.appendChild(tallyExpRect);

function tallyExp() {
    document.getElementById("tallyOverlay").style.width = "500px";
    document.getElementById("tallyOverlay").style.height = "400px";
    document.getElementById("tallyOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeTally() {
    document.getElementById("tallyOverlay").style.width = "0";
    document.getElementById("tallyOverlay").style.height = "0";
    document.getElementById("tallyOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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

/*var viewExpButton = document.createElement("div");
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

viewExpButton.appendChild(arrowSymbol);*/

var helpButton = document.createElement("div");
helpButton.id = "helpButton";
helpButton.style.width = "294px";
helpButton.style.height = "64px";
helpButton.style.left = "3px";
helpButton.style.top = "325px";
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
helpButton.style.cursor = "pointer";
helpButton.addEventListener("click", helpTab);
helpButton.addEventListener("click", closeNav);
helpButton.addEventListener("click", closeRem);
helpButton.addEventListener("click", closeTally);
helpButton.addEventListener("click", closeEdit);
helpButton.addEventListener("click", closeAdd);
helpButton.addEventListener("click", closeSideHelp);
helpButton.addEventListener("click", closeAboutUs);

helpButton.appendChild(helpRect);


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

removeExpButton.style.cursor = "pointer";
removeExpButton.appendChild(removeExpRect);

removeExpButton.addEventListener("click", remExp);
removeExpButton.addEventListener("click", closeNav);
removeExpButton.addEventListener("click", closeAdd);
removeExpButton.addEventListener("click", closeTally);
removeExpButton.addEventListener("click", closeEdit);
removeExpButton.addEventListener("click", closeHelp);
removeExpButton.addEventListener("click", closeSideHelp);
removeExpButton.addEventListener("click", closeAboutUs);

function remExp() {
    document.getElementById("remOverlay").style.width = "450px";
    document.getElementById("remOverlay").style.height = "400px";
    document.getElementById("remOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeRem() {
    document.getElementById("remOverlay").style.width = "0";
    document.getElementById("remOverlay").style.height = "0";
    document.getElementById("remOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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
editExpButton.style.cursor = "pointer";

editExpButton.addEventListener("click", editExp);
editExpButton.addEventListener("click", closeNav);
editExpButton.addEventListener("click", closeAdd);
editExpButton.addEventListener("click", closeRem);
editExpButton.addEventListener("click", closeTally);
editExpButton.addEventListener("click", closeHelp);
editExpButton.addEventListener("click", closeSideHelp);
editExpButton.addEventListener("click", closeAboutUs);

editExpButton.appendChild(editExpRect);

function editExp() {
    document.getElementById("editOverlay").style.width = "450px";
    document.getElementById("editOverlay").style.height = "400px";
    document.getElementById("editOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeEdit() {
    document.getElementById("editOverlay").style.width = "0";
    document.getElementById("editOverlay").style.height = "0";
    document.getElementById("editOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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
addExpButton.addEventListener("click", closeRem);
addExpButton.addEventListener("click", closeTally);
addExpButton.addEventListener("click", closeEdit);
addExpButton.addEventListener("click", closeHelp);
addExpButton.addEventListener("click", closeSideHelp);
addExpButton.addEventListener("click", closeAboutUs);

buttons.appendChild(addExpButton);

function addExp() {
    document.getElementById("addOverlay").style.width = "450px";
    document.getElementById("addOverlay").style.height = "400px";
    document.getElementById("addOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeAdd() {
    document.getElementById("addOverlay").style.width = "0";
    document.getElementById("addOverlay").style.height = "0";
    document.getElementById("addOverlay").style.border = "0px solid black";
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

function testAdd() {
    var dateArr = [];
    
    var x = document.getElementById("addDate").value;
    var y = document.getElementById("addAmount").value;

    if ((x!="") && (y!="")){
        dateArr = x.split('-');

        for (var i=0; i<dateArr.length; i++){
            alert(dateArr[i] + " i counter: " + i);
        }

        alert("Money: " + y);
    }
    else {
        alert("One or more of the fields cannot be blank");
    }
}

function testEdit() {
    var x = document.getElementById("editDate").value;
    var y = document.getElementById("editAmount").value;
    alert("Works! " + x + " " + y);
}

function testTally() {
    var x = document.getElementById("tallyDate1").value;
    var y = document.getElementById("tallyDate2").value;
    alert("Works! " + x + " " + y);
    document.getElementById("calcTally").innerHTML = "Total: " + x;
}

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

var dayArr = [];
var monthArr = [];
var yearArr = [];
var priceArr = [];
var arrlen;
var i = 0;
var currentUser;

var tallyDay;
var tallyMonth;
var tallyYear;
var tallyPrice;
var tallySum = 0;
var tallyDayArr = [];
var tallyMonthArr = [];
var tallyYearArr = [];
var tallyPriceArr = [];
var tallyDayArrTemp = [];
var tallyMonthArrTemp = [];
var tallyYearArrTemp = [];
var tallyPriceArrTemp = [];

var dateDay1;
var dateMonth1;
var dateYear1;
var dateDay2;
var dateMonth2;
var dateYear2;

function getUser(){
    $(onload).ready(function(){
        currentUser = sessionStorage.getItem('currentUser');
        console.log(currentUser);
    })
}

$(document).ready(function(){
    getUser();
    dayLoad();
    monthLoad();
    yearLoad();
    priceLoad();
    $('#submitAdd').click("click",function() {
        var x = document.getElementById("addDate").value;
        var dateTemp = [];

        dateTemp = x.split('-');

        yearArr.push(dateTemp[0]);
        monthArr.push(dateTemp[1]);
        dayArr.push(dateTemp[2]);
        priceArr.push(document.getElementById("addAmount").value);

        addToDB();

        document.getElementById("addDate").value = "";
        document.getElementById("addAmount").value = "";
    })

    $('#submitEdit').click("click",function() {
        displaySave();

        document.getElementById("editDate").value = "";
        document.getElementById("editAmount").value = "";
    })

    $('#submitRemove').click("click",function() {
        deleteFromDB();

        document.getElementById("removeDate").value = "";
    })

    $('#submitTally').click("click",function() {
        getTallyDB();
    })
})

function addToDB(){
    $.ajax({
        type: "POST",
        url: "expenses.php",
        data: {
            currentUser: currentUser,
            expDay: JSON.stringify(dayArr),
            expMonth: JSON.stringify(monthArr),
            expYear: JSON.stringify(yearArr),
            expense: JSON.stringify(priceArr)
        },
        success:function(result) {
            
        }
    })
}

function dayLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "expenseDayLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                tallyDay = data;
            }
        })
    })
}

function monthLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "expenseMonthLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                tallyMonth = data;
            }
        })
    })
}

function yearLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "expenseYearLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                tallyYear = data;
            }
        })
    })
}

function priceLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "expensePriceLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                tallyPrice = data;
            }
        })
    })
}

function displaySave(){
    var x = document.getElementById("editDate").value;
    var dateTemp = [];

    dateTemp = x.split('-');

    yearArr.push(dateTemp[0]);
    monthArr.push(dateTemp[1]);
    dayArr.push(dateTemp[2]);
    priceArr.push(document.getElementById("editAmount").value);

    
    $.ajax({
        type: "POST",
        url: "updatedExpense.php",
        data: {
            expDay: JSON.stringify(dayArr),
            expMonth: JSON.stringify(monthArr),
            expYear: JSON.stringify(yearArr),
            expense: JSON.stringify(priceArr)
        },
        success:function(result) {
            console.log("It works");
        }
    })
}

function deleteFromDB(){
    var x = document.getElementById("removeDate").value;
    var dateTemp = [];

    dateTemp = x.split('-');

    yearArr.push(dateTemp[0]);
    monthArr.push(dateTemp[1]);
    dayArr.push(dateTemp[2]);
    
    $.ajax({
        type: "POST",
        url: "expenseDelete.php",
        data: {
            expDay: JSON.stringify(dayArr),
            expMonth: JSON.stringify(monthArr),
            expYear: JSON.stringify(yearArr)
        },
        success:function(result) {
            console.log("It works");
        }
    })
}

function getTallyDB(){
    tallyMonthArrTemp = tallyMonth.split(',');
    tallyDayArrTemp = tallyDay.split(',');
    tallyYearArrTemp = tallyYear.split(',');
    tallyPriceArrTemp = tallyPrice.split(',');

    for (var cntr=0; cntr<tallyMonthArrTemp.length; cntr++) {
        tallyMonthArr.push(parseInt(tallyMonthArrTemp[cntr]));
        tallyDayArr.push(parseInt(tallyDayArrTemp[cntr]));
        tallyYearArr.push(parseInt(tallyYearArrTemp[cntr]));
        tallyPriceArr.push(parseInt(tallyPriceArrTemp[cntr]));
    }

    var x = document.getElementById("tallyDate1").value;
    var y = document.getElementById("tallyDate2").value;
    var dateTemp1 = [], dateTemp2 = [];

    dateTemp1 = x.split('-');
    dateTemp2 = y.split('-');

    dateYear1 = parseInt(dateTemp1[0]);
    dateMonth1 = parseInt(dateTemp1[1]);
    dateDay1 = parseInt(dateTemp1[2]);

    dateYear2 = parseInt(dateTemp2[0]);
    dateMonth2 = parseInt(dateTemp2[1]);
    dateDay2 = parseInt(dateTemp2[2]);

    for (var cntr=0; cntr<tallyMonthArrTemp.length; cntr++) {
        if (((tallyDayArr[cntr] >= dateDay1) && (tallyDayArr[cntr] <= dateDay2)) && ((tallyMonthArr[cntr] >= dateMonth1) && (tallyMonthArr[cntr] <= dateMonth2)) && ((tallyYearArr[cntr] >= dateYear1) && (tallyYearArr[cntr] <= dateYear2))) {
            tallySum += tallyPriceArr[cntr];
        }
    }
        
    document.getElementById("calcTally").innerHTML = "Total: Php " + tallySum;
    tallySum = 0;
}


/*
Changes made (May 24):
- New overlays for other buttons
- removed clear input function (clears input from input)
- removed selectBtn function (for interactable button color change)
- added a new test functions to return specific data
- changed input type for amount
*/

/*
Changes made (May 25):
- Database has been added for add, edit, remove, and tally expense
*/