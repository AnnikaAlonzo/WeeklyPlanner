
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
aboutUs.innerHTML = "About us";
aboutUs.style.textAlign = "center";
aboutUs.id = "aboutUs";
aboutUs.style.left = "1001px";
aboutUs.style.top = "74px";
aboutUs.style.width = "198px";
aboutUs.style.height = "56px";
aboutUs.style.fontFamily = "Sansation";
aboutUs.style.fontSize = "40px";
aboutUs.style.overflow = "hidden";
aboutUs.style.color = "#000000";

contentContainer.appendChild(aboutUs);

var line8 = document.createElement("div");
line8.id = "line8";
line8.style.left = "1001px";
line8.style.top = "121px";
line8.style.width = "192px";
line8.style.height = "1px";
line8.style.background = "#000000";

contentContainer.appendChild(line8);

var line10 = document.createElement("div");
line10.id = "line10";
line10.style.left = "335px";
line10.style.top = "88px";
line10.style.width = "225.06px";
line10.style.height = "1px";
line10.style.transform = "rotate(51.86deg)";
line10.style.background = "#000000";

contentContainer.appendChild(line10);

var line11 = document.createElement("div");
line11.id = "line11";
line11.style.left = "364px";
line11.style.top = "88px";
line11.style.width = "225.06px";
line11.style.height = "1px";
line11.style.transform = "rotate(51.86deg)";
line11.style.background = "#000000";

contentContainer.appendChild(line11);

var line14 = document.createElement("div");
line14.id = "line14";
line14.style.left = "598px";
line14.style.top = "88px";
line14.style.width = "225.06px";
line14.style.height = "1px";
line14.style.transform = "rotate(51.86deg)";
line14.style.background = "#000000";

contentContainer.appendChild(line14);

var line15 = document.createElement("div");
line15.id = "line15";
line15.style.left = "627px";
line15.style.top = "88px";
line15.style.width = "225.06px";
line15.style.height = "1px";
line15.style.transform = "rotate(51.86deg)";
line15.style.background = "#000000";

contentContainer.appendChild(line15);

var line30 = document.createElement("div");
line30.id = "line30";
line30.style.left = "723px";
line30.style.top = "88px";
line30.style.width = "225.06px";
line30.style.height = "1px";
line30.style.transform = "rotate(51.86deg)";
line30.style.background = "#000000";

contentContainer.appendChild(line30);

var line31 = document.createElement("div");
line31.id = "line31";
line31.style.left = "752px";
line31.style.top = "88px";
line31.style.width = "225.06px";
line31.style.height = "1px";
line31.style.transform = "rotate(51.86deg)";
line31.style.background = "#000000";

contentContainer.appendChild(line31);

var line12 = document.createElement("div");
line12.id = "line12";
line12.style.left = "470px";
line12.style.top = "88px";
line12.style.width = "225.06px";
line12.style.height = "1px";
line12.style.transform = "rotate(51.86deg)";
line12.style.background = "#000000";

contentContainer.appendChild(line12);

var line13 = document.createElement("div");
line13.id = "line13";
line13.style.left = "499px";
line13.style.top = "88px";
line13.style.width = "225.06px";
line13.style.height = "1px";
line13.style.transform = "rotate(51.86deg)";
line13.style.background = "#000000";

contentContainer.appendChild(line13);

var schedRect1 = document.createElement("div");
schedRect1.id = "schedRect1";
schedRect1.style.left = "70px";
schedRect1.style.top = "229px";
schedRect1.style.width = "343px";
schedRect1.style.height = "503px";
schedRect1.style.background = 'rgba(216,196,213,1)';

contentContainer.appendChild(schedRect1);

var schedRect2 = document.createElement("div");
schedRect2.id = "schedRect2";
schedRect2.style.left = "118px";
schedRect2.style.opacity = "0.52999997138977";
schedRect2.style.filter = "alpha(opacity='52.999997138977')";
schedRect2.style.top = "286px";
schedRect2.style.width = "343px";
schedRect2.style.height = "503px";
schedRect2.style.background = 'rgba(250.75,247.62,250.3,0.53)';

contentContainer.appendChild(schedRect2);

var line19 = document.createElement("div");
line19.id = "line19";
line19.style.left = "118px";
line19.style.top = "717px";
line19.style.width = "50px";
line19.style.height = "1px";
line19.style.transform = "rotate(180deg)";
line19.style.background = "#000000";

contentContainer.appendChild(line19);

var line18 = document.createElement("div");
line18.id = "line18";
line18.style.left = "257px";
line18.style.top = "599px";
line18.style.width = "204px";
line18.style.height = "1px";
line18.style.transform = "rotate(-180deg)";
line18.style.background = "#000000";

contentContainer.appendChild(line18);

var personalNotesRect1 = document.createElement("div");
personalNotesRect1.id = "personalNotesRect1";
personalNotesRect1.style.left = "531px";
personalNotesRect1.style.top = "409px";
personalNotesRect1.style.width = "343px";
personalNotesRect1.style.height = "503px";
personalNotesRect1.style.background = 'rgba(216,196,213,1)';

contentContainer.appendChild(personalNotesRect1);

var personalNotesRect2 = document.createElement("div");
personalNotesRect2.id = "personalNotesRect2";
personalNotesRect2.style.left = "578px";
personalNotesRect2.style.opacity = "0.52999997138977";
personalNotesRect2.style.filter = "alpha(opacity='52.999997138977')";
personalNotesRect2.style.top = "466px";
personalNotesRect2.style.width = "343px";
personalNotesRect2.style.height = "503px";
personalNotesRect2.style.background = 'rgba(250.75,247.62,250.3,0.53)';

contentContainer.appendChild(personalNotesRect2);

var line21 = document.createElement("div");
line21.id = "line21";
line21.style.left = "766px";
line21.style.top = "648px";
line21.style.width = "155px";
line21.style.height = "1px";
line21.style.transform = "rotate(-180deg)";
line21.style.background = "#000000";

contentContainer.appendChild(line21);

var line25 = document.createElement("div");
line25.id = "line25";
line25.style.left = "773px";
line25.style.top = "876px";
line25.style.width = "148px";
line25.style.height = "1px";
line25.style.transform = "rotate(-180deg)";
line25.style.background = "#000000";

contentContainer.appendChild(line25);

var line24 = document.createElement("div");
line24.id = "line24";
line24.style.left = "578px";
line24.style.top = "762px";
line24.style.width = "68px";
line24.style.height = "1px";
line24.style.transform = "rotate(-180deg)";
line24.style.background = "#000000";

contentContainer.appendChild(line24);

var expensesRect1 = document.createElement("div");
expensesRect1.id = "expensesRect1";
expensesRect1.style.left = "991px";
expensesRect1.style.top = "229px";
expensesRect1.style.width = "343px";
expensesRect1.style.height = "503px";
expensesRect1.style.background = 'rgba(216,196,213,1)';

contentContainer.appendChild(expensesRect1);

var expensesRect2 = document.createElement("div");
expensesRect2.id = "expensesRect2";
expensesRect2.style.left = "1038px";
expensesRect2.style.opacity = "0.52999997138977";
expensesRect2.style.filter = "alpha(opacity='52.999997138977')";
expensesRect2.style.top = "286px";
expensesRect2.style.width = "343px";
expensesRect2.style.height = "503px";
expensesRect2.style.background = 'rgba(250.75,247.62,250.3,0.53)';

contentContainer.appendChild(expensesRect2);

var create = document.createElement("div");
create.innerHTML = "CREATE";
create.style.textAlign = "center";
create.id = "create";
create.style.left = "111px";
create.style.top = "338px";
create.style.width = "244px";
create.style.height = "103px";
create.style.fontFamily = "Radley";
create.style.fontSize = "48px";
create.style.textShadow = "0px 0px 1px #000000";
create.style.overflow = "hidden";
create.style.color = "#000000";

contentContainer.appendChild(create);

var write = document.createElement("div");
write.innerHTML = "WRITE";
write.style.textAlign = "center";
write.id = "write";
write.style.left = "697px";
write.style.top = "501px";
write.style.width = "244px";
write.style.height = "103px";
write.style.fontFamily = "Radley";
write.style.fontSize = "48px";
write.style.textShadow = "0px 0px 1px #000000";
write.style.overflow = "hidden";
write.style.color = "#000000";

contentContainer.appendChild(write);

var down = document.createElement("div");
down.innerHTML = "DOWN";
down.style.textAlign = "center";
down.id = "down";
down.style.left = "570px";
down.style.top = "615px";
down.style.width = "244px";
down.style.height = "103px";
down.style.fontFamily = "Radley";
down.style.fontSize = "48px";
down.style.textShadow = "0px 0px 1px #000000";
down.style.overflow = "hidden";
down.style.color = "#000000";

contentContainer.appendChild(down);

var personal = document.createElement("div");
personal.innerHTML = "PERSONAL";
personal.style.textAlign = "center";
personal.id = "personal";
personal.style.left = "632px";
personal.style.top = "729px";
personal.style.width = "301px";
personal.style.height = "103px";
personal.style.fontFamily = "Radley";
personal.style.fontSize = "48px";
personal.style.textShadow = "0px 0px 1px #000000";
personal.style.overflow = "hidden";
personal.style.color = "#000000";

contentContainer.appendChild(personal);

var notes = document.createElement("div");
notes.innerHTML = "NOTES";
notes.style.textAlign = "center";
notes.id = "notes";
notes.style.left = "572px";
notes.style.top = "843px";
notes.style.width = "244px";
notes.style.height = "103px";
notes.style.fontFamily = "Radley";
notes.style.fontSize = "48px";
notes.style.textShadow = "0px 0px 1px #000000";
notes.style.overflow = "hidden";
notes.style.color = "#000000";

contentContainer.appendChild(notes);

var your = document.createElement("div");
your.innerHTML = "YOUR";
your.style.textAlign = "center";
your.id = "your";
your.style.left = "249px";
your.style.top = "452px";
your.style.width = "244px";
your.style.height = "103px";
your.style.fontFamily = "Radley";
your.style.fontSize = "48px";
your.style.textShadow = "0px 0px 1px #000000";
your.style.overflow = "hidden";
your.style.color = "#000000";

contentContainer.appendChild(your);

var own = document.createElement("div");
own.innerHTML = "OWN";
own.style.textAlign = "center";
own.id = "own";
own.style.left = "80px";
own.style.top = "566px";
own.style.width = "244px";
own.style.height = "103px";
own.style.fontFamily = "Radley";
own.style.fontSize = "48px";
own.style.textShadow = "0px 0px 1px #000000";
own.style.overflow = "hidden";
own.style.color = "#000000";

contentContainer.appendChild(own);

var schedule = document.createElement("div");
schedule.innerHTML = "SCHEDULE";
schedule.style.textAlign = "center";
schedule.id = "schedule";
schedule.style.left = "160px";
schedule.style.top = "680px";
schedule.style.width = "302px";
schedule.style.height = "103px";
schedule.style.fontFamily = "Radley";
schedule.style.fontSize = "48px";
schedule.style.textShadow = "0px 0px 1px #000000";
schedule.style.overflow = "hidden";
schedule.style.color = "#000000";

contentContainer.appendChild(schedule);

var line16 = document.createElement("div");
line16.id = "line16";
line16.style.left = "322px";
line16.style.top = "371px";
line16.style.width = "139px";
line16.style.height = "1px";
line16.style.transform = "rotate(-180deg)";
line16.style.background = "#000000";

contentContainer.appendChild(line16);

var line20 = document.createElement("div");
line20.id = "line20";
line20.style.left = "581px";
line20.style.top = "537px";
line20.style.width = "150px";
line20.style.height = "1px";
line20.style.transform = "rotate(-180deg)";
line20.style.background = "#000000";

contentContainer.appendChild(line20);

var line17 = document.createElement("div");
line17.id = "line17";
line17.style.left = "118px";
line17.style.top = "485px";
line17.style.width = "180px";
line17.style.height = "1px";
line17.style.transform = "rotate(180deg)";
line17.style.background = "#000000";

contentContainer.appendChild(line17);

var line26 = document.createElement("div");
line26.id = "line26";
line26.style.left = "1038px";
line26.style.top = "717px";
line26.style.width = "72px";
line26.style.height = "1px";
line26.style.transform = "rotate(180deg)";
line26.style.background = "#000000";

contentContainer.appendChild(line26);

var line27 = document.createElement("div");
line27.id = "line27";
line27.style.left = "1254px";
line27.style.top = "599px";
line27.style.width = "127px";
line27.style.height = "1px";
line27.style.transform = "rotate(-180deg)";
line27.style.background = "#000000";

contentContainer.appendChild(line27);

var add = document.createElement("div");
add.innerHTML = "ADD";
add.style.textAlign = "center";
add.id = "add";
add.style.left = "1000px";
add.style.top = "338px";
add.style.width = "244px";
add.style.height = "103px";
add.style.fontFamily = "Radley";
add.style.fontSize = "48px";
add.style.textShadow = "0px 0px 1px #000000";
add.style.overflow = "hidden";
add.style.color = "#000000";

contentContainer.appendChild(add);

var your2 = document.createElement("div");
your2.innerHTML = "YOUR";
your2.style.textAlign = "center";
your2.id = "your2";
your2.style.left = "1169px";
your2.style.top = "452px";
your2.style.width = "244px";
your2.style.height = "103px";
your2.style.fontFamily = "Radley";
your2.style.fontSize = "48px";
your2.style.textShadow = "0px 0px 1px #000000";
your2.style.overflow = "hidden";
your2.style.color = "#000000";

contentContainer.appendChild(your2);

var weekly = document.createElement("div");
weekly.innerHTML = "WEEKLY";
weekly.style.textAlign = "center";
weekly.id = "weekly";
weekly.style.left = "1041px";
weekly.style.top = "566px";
weekly.style.width = "244px";
weekly.style.height = "103px";
weekly.style.fontFamily = "Radley";
weekly.style.fontSize = "48px";
weekly.style.textShadow = "0px 0px 1px #000000";
weekly.style.overflow = "hidden";
weekly.style.color = "#000000";

contentContainer.appendChild(weekly);

var expenses = document.createElement("div");
expenses.innerHTML = "EXPENSES";
expenses.style.textAlign = "center";
expenses.id = "expenses";
expenses.style.left = "1090px";
expenses.style.top = "680px";
expenses.style.width = "302px";
expenses.style.height = "103px";
expenses.style.fontFamily = "Radley";
expenses.style.fontSize = "48px";
expenses.style.textShadow = "0px 0px 1px #000000";
expenses.style.overflow = "hidden";
expenses.style.color = "#000000";

contentContainer.appendChild(expenses);

var line28 = document.createElement("div");
line28.id = "line28";
line28.style.left = "1174px";
line28.style.top = "371px";
line28.style.width = "207px";
line28.style.height = "1px";
line28.style.transform = "rotate(-180deg)";
line28.style.background = "#000000";

contentContainer.appendChild(line28);

var line29 = document.createElement("div");
line29.id = "line29";
line29.style.left = "1038px";
line29.style.top = "485px";
line29.style.width = "180px";
line29.style.height = "1px";
line29.style.transform = "rotate(180deg)";
line29.style.background = "#000000";

contentContainer.appendChild(line29);

var signUpRect = document.createElement("div");
signUpRect.id = "signUpRect";
signUpRect.style.left = "182px";
signUpRect.style.top = "1020px";
signUpRect.style.width = "1096px";
signUpRect.style.height = "96px";
signUpRect.style.background = 'rgba(216,196,213,1)';

contentContainer.appendChild(signUpRect);

var signUpText = document.createElement("div");
signUpText.innerHTML = "Sign up now and start creating your weekly planner!";
signUpText.style.textAlign = "center";
signUpText.id = "signUpText";
signUpText.style.left = "196px";
signUpText.style.top = "1034px";
signUpText.style.width = "1053px";
signUpText.style.height = "97px";
signUpText.style.fontFamily = "Sansation";
signUpText.style.fontSize = "40px";
signUpText.style.overflow = "hidden";
signUpText.style.color = "#000000";

contentContainer.appendChild(signUpText);
