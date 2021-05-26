
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
image_4.addEventListener("click", closeAdd);
image_4.addEventListener("click", closeEdit);
image_4.addEventListener("click", closeReminder);
image_4.addEventListener("click", closeRemove);
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

var remindersButton = document.createElement("div");
remindersButton.id = "remindersButton";
remindersButton.style.width = "294px";
remindersButton.style.height = "64px";
remindersButton.style.left = "0px";
remindersButton.style.top = "323px";
remindersButton.style.position = "absolute";
remindersButton.style.cursor = "pointer";
remindersButton.addEventListener("click", reminder);
remindersButton.addEventListener("click", closeNav);
remindersButton.addEventListener("click", closeAdd);
remindersButton.addEventListener("click", closeEdit);
remindersButton.addEventListener("click", closeRemove);
remindersButton.addEventListener("click", closeAboutUs);
remindersButton.addEventListener("click", closeHelp);
remindersButton.addEventListener("click", closeSideHelp);

buttons.appendChild(remindersButton);

function reminder() {
    document.getElementById("reminderOverlay").style.width = "575px";
    document.getElementById("reminderOverlay").style.height = "500px";
    document.getElementById("reminderOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeReminder() {
    document.getElementById("reminderOverlay").style.width = "0";
    document.getElementById("reminderOverlay").style.height = "0";
    document.getElementById("reminderOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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
helpButton.addEventListener("click", helpTab);
helpButton.addEventListener("click", closeNav);
helpButton.addEventListener("click", closeRemove);
helpButton.addEventListener("click", closeReminder);
helpButton.addEventListener("click", closeEdit);
helpButton.addEventListener("click", closeAdd);
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

var removeTaskButton = document.createElement("div");
removeTaskButton.id = "removeTaskButton";
removeTaskButton.style.width = "294px";
removeTaskButton.style.height = "64px";
removeTaskButton.style.left = "0px";
removeTaskButton.style.top = "163px";
removeTaskButton.style.position = "absolute";
removeTaskButton.style.cursor = "pointer";
removeTaskButton.addEventListener("click", removeTask);
removeTaskButton.addEventListener("click", closeNav);
removeTaskButton.addEventListener("click", closeAdd);
removeTaskButton.addEventListener("click", closeEdit);
removeTaskButton.addEventListener("click", closeReminder);
removeTaskButton.addEventListener("click", closeAboutUs);
removeTaskButton.addEventListener("click", closeHelp);
removeTaskButton.addEventListener("click", closeSideHelp);

buttons.appendChild(removeTaskButton);

function removeTask() {
    document.getElementById("removeTaskOverlay").style.width = "575px";
    document.getElementById("removeTaskOverlay").style.height = "300px";
    document.getElementById("removeTaskOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeRemove() {
    document.getElementById("removeTaskOverlay").style.width = "0";
    document.getElementById("removeTaskOverlay").style.height = "0";
    document.getElementById("removeTaskOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

var removeTaskRect = document.createElement("div");
removeTaskRect.id = "removeTaskRect";
removeTaskRect.style.left = "0px";
removeTaskRect.style.top = "0px";
removeTaskRect.style.width = "294px";
removeTaskRect.style.height = "64px";
removeTaskRect.style.borderRadius = "50px";
removeTaskRect.style.background = 'rgba(254,248,232,1)';

removeTaskButton.appendChild(removeTaskRect);

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

removeTaskButton.appendChild(removeTaskText);

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

removeTaskButton.appendChild(minusSymbol);

var viewSchedButton = document.createElement("div");
viewSchedButton.id = "viewSchedButton";
viewSchedButton.style.width = "294px";
viewSchedButton.style.height = "64px";
viewSchedButton.style.left = "0px";
viewSchedButton.style.top = "243px";
viewSchedButton.style.position = "absolute";
viewSchedButton.style.cursor = "pointer";
viewSchedButton.addEventListener("click", goToViewSched);

function goToViewSched() {
    location.href="viewSchedule.html"
}


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
editTaskButton.addEventListener("click", editTask);
editTaskButton.addEventListener("click", closeNav);
editTaskButton.addEventListener("click", closeAdd);
editTaskButton.addEventListener("click", closeReminder);
editTaskButton.addEventListener("click", closeRemove);
editTaskButton.addEventListener("click", closeAboutUs);
editTaskButton.addEventListener("click", closeHelp);
editTaskButton.addEventListener("click", closeSideHelp);

buttons.appendChild(editTaskButton);

function editTask() {
    document.getElementById("editTaskOverlay").style.width = "575px";
    document.getElementById("editTaskOverlay").style.height = "580px";
    document.getElementById("editTaskOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeEdit() {
    document.getElementById("editTaskOverlay").style.width = "0";
    document.getElementById("editTaskOverlay").style.height = "0";
    document.getElementById("editTaskOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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
addTaskButton.addEventListener("click", addTask);
addTaskButton.addEventListener("click", closeNav);
addTaskButton.addEventListener("click", closeEdit);
addTaskButton.addEventListener("click", closeReminder);
addTaskButton.addEventListener("click", closeRemove);
addTaskButton.addEventListener("click", closeAboutUs);
addTaskButton.addEventListener("click", closeHelp);
addTaskButton.addEventListener("click", closeSideHelp);

buttons.appendChild(addTaskButton);

function addTask() {
    document.getElementById("addTaskOverlay").style.width = "575px";
    document.getElementById("addTaskOverlay").style.height = "580px";
    document.getElementById("addTaskOverlay").style.border = "1px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeAdd() {
    document.getElementById("addTaskOverlay").style.width = "0";
    document.getElementById("addTaskOverlay").style.height = "0";
    document.getElementById("addTaskOverlay").style.border = "0px solid black";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

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

var taskNameArr = [];
var taskDescArr = [];
var taskDayArr = [];
var taskMonthArr = [];
var taskYearArr = [];
var reminderDayArr = [];
var reminderMonthArr = [];
var reminderYearArr = [];
var taskHourArr = [];
var taskMinArr = [];
var i = 0;
var index = 0;
var currentUser;

function getUser(){
    $(onload).ready(function(){
        currentUser = sessionStorage.getItem('currentUser');
        console.log(currentUser);
    })
}

$(document).ready(function() {
    getUser();
    taskNameLoad();
    taskDescLoad();
    taskDayLoad();
    taskMonthLoad();
    taskYearLoad();
    $('#addTaskBtn').click("click",function() {
        console.log("it worked");
        var date = document.getElementById("addtaskDate").value;
        var dateArr = [];

        dateArr = date.split('-');

        taskNameArr.push(document.getElementById("addtaskName").value);
        taskDescArr.push(document.getElementById("addtaskDescr").value);
        taskYearArr.push(dateArr[0]);
        taskMonthArr.push(dateArr[1]);
        taskDayArr.push(dateArr[2]);

        addToDB();

        document.getElementById("addtaskName").value = "";
        document.getElementById("addtaskDescr").value = "";
        document.getElementById("addtaskDate").value = "";

    })

    $('#saveEditBtn').click("click", function(){
        taskEdited();

        document.getElementById("editTaskName").value = "";
        document.getElementById("editedTaskDescr").value = "";
        document.getElementById("editTaskDate").value = "";
    })

    $('#deleteBtn').click("click", function() {
        deleteTask();

        document.getElementById("deleteTaskName").value = "";
    })

    $('#setReminderBtn').click("click", function(){
        reminderTask();

        document.getElementById("reminderTaskName").value = "";
        document.getElementById("reminderDate").value = "";
        document.getElementById("reminderTime").value = "";
    })
});


function addToDB(){
    $.ajax({
        type: "POST",
        url: "scheduleAddTask.php",
        data: {
            currentUser: currentUser,
            taskName: JSON.stringify(taskNameArr),
            taskDesc: JSON.stringify(taskDescArr),
            taskDay: JSON.stringify(taskDayArr),
            taskMonth: JSON.stringify(taskMonthArr),
            taskYear: JSON.stringify(taskYearArr)
        },
        success:function(result) {
            
        }
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
            }
        })
    })
}

function taskEdited() {
    console.log("worked");
    var date = document.getElementById("editTaskDate").value;
    var dateArr = [];

    dateArr = date.split('-');

    taskNameArr.push(document.getElementById("editTaskName").value);
    taskDescArr.push(document.getElementById("editedTaskDescr").value);
    taskYearArr.push(dateArr[0]);
    taskMonthArr.push(dateArr[1]);
    taskDayArr.push(dateArr[2]);

    $.ajax({
        type: "POST",
        url: "scheduleEditTask.php",
        data: {
            currentUser: currentUser,
            taskName: JSON.stringify(taskNameArr),
            taskDesc: JSON.stringify(taskDescArr),
            taskDay: JSON.stringify(taskDayArr),
            taskMonth: JSON.stringify(taskMonthArr),
            taskYear: JSON.stringify(taskYearArr)
        },
        success:function(result) {
            
        }
    })
}


function deleteTask() {
    taskNameArr.push(document.getElementById("deleteTaskName").value);

    $.ajax({
        type: "POST",
        url: "scheduleDeleteTask.php",
        data: {
            taskName: JSON.stringify(taskNameArr),
        },
        success:function(result) {
            console.log("boom");
        }
    })
}

function reminderTask() {
    console.log("worked");
    var reminderDate = document.getElementById("reminderDate").value;
    var time = document.getElementById("reminderTime").value;
    var reminderDateArr = [];
    var timeArr = [];

    reminderDateArr = reminderDate.split('-');
    timeArr = time.split(':');

    taskNameArr.push(document.getElementById("reminderTaskName").value);
    reminderYearArr.push(reminderDateArr[0]);
    reminderMonthArr.push(reminderDateArr[1]);
    reminderDayArr.push(reminderDateArr[2]);
    taskHourArr.push(timeArr[0]);
    taskMinArr.push(timeArr[1]);

    $.ajax({
        type: "POST",
        url: "scheduleReminder.php",
        data: {
            currentUser: currentUser,
            taskName: JSON.stringify(taskNameArr),
            reminderDay: JSON.stringify(reminderDayArr),
            reminderMonth: JSON.stringify(reminderMonthArr),
            reminderYear: JSON.stringify(reminderYearArr),
            taskHour: JSON.stringify(taskHourArr),
            taskMin: JSON.stringify(taskMinArr)
        },
        success:function(result) {
            console.log("boomboom");
        }
    })
}
