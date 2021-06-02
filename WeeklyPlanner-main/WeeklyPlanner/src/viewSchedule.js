
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

var titleRect = document.createElement("div");
titleRect.id = "titleRect";
titleRect.style.border = "5px solid #d17b7b"
titleRect.style.left = "737px";
titleRect.style.top = "250px";
titleRect.style.width = "700px";
titleRect.style.height = "60px";
titleRect.style.background = 'rgba(225,221,221,1)';
titleRect.style.overflowX = "hidden";
titleRect.style.overflowY = "auto";

contentContainer.appendChild(titleRect);

var descrRect = document.createElement("div");
descrRect.id = "descrRect";
descrRect.style.border = "5px solid #d17b7b"
descrRect.style.left = "737px";
descrRect.style.top = "350px";
descrRect.style.width = "700px";
descrRect.style.height = "460px";
descrRect.style.background = 'rgba(225,221,221,1)';
descrRect.style.overflowX = "hidden";
descrRect.style.overflowY = "auto";

contentContainer.appendChild(descrRect);

var dateRect = document.createElement("div");
dateRect.id = "dateRect";
dateRect.style.border = "5px solid #d17b7b"
dateRect.style.left = "737px";
dateRect.style.top = "850px";
dateRect.style.width = "700px";
dateRect.style.height = "60px";
dateRect.style.background = 'rgba(225,221,221,1)';
dateRect.style.overflowX = "hidden";
dateRect.style.overflowY = "auto";

contentContainer.appendChild(dateRect);

var listRect = document.createElement("div");
listRect.id = "listRect";
listRect.style.border = "5px solid #d17b7b"
listRect.style.left = "400px";
listRect.style.top = "250px";
listRect.style.width = "290px";
listRect.style.height = "665px";
listRect.style.background = 'rgba(225,221,221,1)';
listRect.style.overflowX = "hidden";
listRect.style.overflowY = "auto";

contentContainer.appendChild(listRect);

var editButton = document.createElement("img");
editButton.id = "image_3";
editButton.style.left = "1320px";
editButton.style.top = "855px";
editButton.style.width = "55px";
editButton.style.height = "55px";
editButton.style.cursor = "pointer";
editButton.src = "skins/editSave.png";
editButton.addEventListener("click", displaySave);

contentContainer.appendChild(editButton);

var deleteButton = document.createElement("img");
deleteButton.id = "image_3";
deleteButton.style.left = "1380px";
deleteButton.style.top = "855px";
deleteButton.style.width = "50px";
deleteButton.style.height = "50px";
deleteButton.style.cursor = "pointer";
deleteButton.src = "skins/delete.png";
deleteButton.addEventListener("click", deleteNode);

contentContainer.appendChild(deleteButton);

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

var titleArr = [];
var prevTitle = [];
var descrArr = [];
var dayArr = [];
var monthArr = [];
var yearArr = [];
var i = 0;
var index = 0;
var disTitle;
var disDescr;
var disDate;
var selected;
var currentUser;

$(document).ready(function(){
    getUser();
    taskNameLoad();
    taskDescLoad();
    taskDayLoad();
    taskMonthLoad();
    taskYearLoad();
})

function getUser(){
    $(onload).ready(function(){
        currentUser = sessionStorage.getItem('currentUser');
        console.log(currentUser);
    })
}

function taskNameLoad() {
    $(onload).ready(function(){
        $.ajax({
            type: "POST",
            url: "taskNameLoad.php",
            data: 
            {
                currentUser: currentUser
            },
            success:function(data) {
                console.log(data);
                if(data.length != 0){
                    var titleTemp = data.split(",");
                    list(titleTemp);
                }
            }
        })
    })
}

function taskDescLoad() {
    $(onload).ready(function(){
        $.ajax({
            type: "POST",
            url: "taskDescLoad.php",
            data: 
            {
                currentUser: currentUser
            },
            success:function(data) {
                console.log(data);
                if(data.length != 0){
                    var descTemp = data.split(",");
                    updateDesc(descTemp);
                }
            }
        })
    })
}

function taskDayLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "taskDayLoad.php",
            data: 
            {
                currentUser: currentUser
            },
            success:function(data) {
                console.log(data);
                if(data.length != 0){
                    var dayTemp = data.split(",");
                    updateDay(dayTemp);
                }
            }
        })
    })
}

function taskMonthLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "taskMonthLoad.php",
            data: 
            {
                currentUser: currentUser
            },
            success:function(data) {
                console.log(data);
                if(data.length != 0){
                    var monthTemp = data.split(",");
                    updateMonth(monthTemp);
                }
            }
        })
    })
}

function taskYearLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "taskYearLoad.php",
            data: 
            {
                currentUser: currentUser
            },
            success:function(data) {
                console.log(data);
                if(data.length != 0){
                    var yearTemp = data.split(",");
                    updateYear(yearTemp);
                }
            }
        })
    })
}

function updateDesc(data){
    var k;
    for(k = 0; k < data.length; k++){
        descrArr.push(data[k]);
    } 
}

function updateDay(data){
    var k;
    for(k = 0; k < data.length; k++){
        dayArr.push(data[k]);
    } 
}

function updateMonth(data){
    var k;
    for(k = 0; k < data.length; k++){
        monthArr.push(data[k]);
    } 
}

function updateYear(data){
    var k;
    for(k = 0; k < data.length; k++){
        yearArr.push(data[k]);
    } 
}

function list(data) {
    var tempI;
    for(tempI = 0; tempI < data.length; tempI++){  
        var temp = data[tempI];
        (function(){
            titleArr.push(temp);
            prevTitle.push(temp);
            var row = document.createElement("li");
            row.innerHTML = titleArr[i];
            row.style.border = "1px solid #d17b7b";
            row.style.width = "290px";
            row.style.height = "50px";
            row.style.textAlign = "center";
            row.style.paddingTop = "25px";
            row.style.listStyle = "none";
            row.style.fontStyle = "Sansation";
            row.style.cursor = "pointer";
            row.addEventListener("click", function(){
                while(descrRect.hasChildNodes()){
                    descrRect.removeChild(descrRect.lastChild);
                    titleRect.removeChild(titleRect.lastChild);
                    dateRect.removeChild(dateRect.lastChild);
                }
                displayTitle(row.innerHTML);
                displayDesc(row.innerHTML);
                displayDate(row.innerHTML);
            });
            listRect.appendChild(row);
            i++;
        })();
    }
}

function displayTitle(name) {
    disTitle = document.createElement("div");
    index = titleArr.indexOf(name);
    selected = name;
    console.log(name);
    disTitle.innerHTML = titleArr[index];
    disTitle.contentEditable = "true";
    disTitle.style.border = "1px solid #d17b7b";
    disTitle.style.width = "700px";
    disTitle.style.height = "60px";
    disTitle.style.display = "block";
    disTitle.style.padding = "2px";
    disTitle.style.fontStyle = "Sansation";
    document.execCommand("defaultParagraphSeparator", false, "p");
    titleRect.append(disTitle);
}

function displayDesc(name) {
    disDescr = document.createElement("div");
    index = titleArr.indexOf(name);
    console.log(name);
    disDescr.innerHTML = descrArr[index];
    disDescr.contentEditable = "true";
    disDescr.style.border = "1px solid #d17b7b";
    disDescr.style.width = "700px";
    disDescr.style.height = "460px";
    disDescr.style.display = "block";
    disDescr.style.padding = "2px";
    disDescr.style.fontStyle = "Sansation";
    document.execCommand("defaultParagraphSeparator", false, "p");
    descrRect.append(disDescr);
}

function displayDate(name) {
    disDate = document.createElement("div");
    index = titleArr.indexOf(name);
    console.log(name);
    var tempDate = yearArr[index] + "-" + monthArr[index] + "-" + dayArr[index];
    disDate.innerHTML = tempDate;
    disDate.contentEditable = "true";
    disDate.style.border = "1px solid #d17b7b";
    disDate.style.width = "700px";
    disDate.style.height = "60px";
    disDate.style.display = "block";
    disDate.style.padding = "2px";
    disDate.style.fontStyle = "Sansation";
    document.execCommand("defaultParagraphSeparator", false, "p");
    dateRect.append(disDate);
}

function displaySave(){
    titleArr[index] = disTitle.innerHTML;
    descrArr[index] = disDescr.innerHTML;
    
    var tempDate = [];
    
    tempDate = disDate.innerHTML.split('-');

    yearArr[index] = tempDate[0];
    monthArr[index] = tempDate[1];
    dayArr[index] = tempDate[2];

    $.ajax({
        type: "POST",
        url: "updatedSchedule.php",
        data: {
            taskName: JSON.stringify(titleArr),
            prevTitle: JSON.stringify(prevTitle),
            taskDesc: JSON.stringify(descrArr),
            taskDay: JSON.stringify(dayArr),
            taskMonth: JSON.stringify(monthArr),
            taskYear: JSON.stringify(yearArr)
        },
        success:function(result) {
            setTimeout(function() {
                window.location.reload();
            }, 1500)
        }
    })
}

function deleteNode(){
    console.log("MADE CHANGES");
    var k;
    k = titleArr.indexOf(selected);
    listRect.removeChild(listRect.childNodes[k]);
    descrRect.removeChild(descrRect.lastChild);
    titleRect.removeChild(titleRect.lastChild);
    dateRect.removeChild(dateRect.lastChild);
    deleteFromArray();
    deleteFromDB();
}

function deleteFromArray(){
    var j;

    for(j = 0; j < titleArr.length; j++){
        if(titleArr[j] == selected){
            titleArr.splice(j,1);
            descrArr.splice(j,1);
            dayArr.splice(j,1);
            monthArr.splice(j,1);
            yearArr.splice(j,1);
            i--;
        }
    }
}

function deleteFromDB(){
    $.ajax({
        type: "POST",
        url: "scheduleRemove.php",
        data: {
            taskName: selected
        },
        success:function(result) {
            
        }
    })
}