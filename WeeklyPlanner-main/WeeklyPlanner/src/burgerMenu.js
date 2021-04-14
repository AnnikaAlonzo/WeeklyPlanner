
var contentContainer = document.createElement("div");
contentContainer.style.width = "632px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgBurgerMenu = document.createElement("div");
bgBurgerMenu.id = "bgBurgerMenu";
bgBurgerMenu.style.left = "0px";
bgBurgerMenu.style.top = "0px";
bgBurgerMenu.style.width = "632px";
bgBurgerMenu.style.height = "1024px";
bgBurgerMenu.style.background = 'rgba(160.44,146.4,158.19,1)';

contentContainer.appendChild(bgBurgerMenu);

var borger_menu = document.createElement("div");
borger_menu.id = "borger_menu";
borger_menu.style.width = "632px";
borger_menu.style.height = "1024px";
borger_menu.style.left = "0px";
borger_menu.style.top = "0px";
borger_menu.style.position = "absolute";
contentContainer.appendChild(borger_menu);

var rectangle_19 = document.createElement("div");
rectangle_19.id = "rectangle_19";
rectangle_19.style.left = "0px";
rectangle_19.style.top = "0px";
rectangle_19.style.width = "638px";
rectangle_19.style.height = "170px";
rectangle_19.style.border = "3px solid #000000";
rectangle_19.style.background = 'rgba(181,212,235,1)';

borger_menu.appendChild(rectangle_19);

var image_5 = document.createElement("img");
image_5.id = "image_5";
image_5.style.left = "26px";
image_5.style.top = "39px";
image_5.style.width = "43px";
image_5.style.height = "43px";
image_5.src = "skins/image_5.png";

borger_menu.appendChild(image_5);

var rectangle_29 = document.createElement("div");
rectangle_29.id = "rectangle_29";
rectangle_29.style.left = "0px";
rectangle_29.style.top = "916px";
rectangle_29.style.width = "632px";
rectangle_29.style.height = "108px";
rectangle_29.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(rectangle_29);

var _rectangle_28 = document.createElement("div");
_rectangle_28.id = "_rectangle_28";
_rectangle_28.style.left = "0px";
_rectangle_28.style.top = "808px";
_rectangle_28.style.width = "632px";
_rectangle_28.style.height = "108px";
_rectangle_28.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(_rectangle_28);

var rectangle_27 = document.createElement("div");
rectangle_27.id = "rectangle_27";
rectangle_27.style.left = "0px";
rectangle_27.style.top = "702px";
rectangle_27.style.width = "632px";
rectangle_27.style.height = "108px";
rectangle_27.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(rectangle_27);

var rectangle_26 = document.createElement("div");
rectangle_26.id = "rectangle_26";
rectangle_26.style.left = "0px";
rectangle_26.style.top = "594px";
rectangle_26.style.width = "632px";
rectangle_26.style.height = "108px";
rectangle_26.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(rectangle_26);

var rectangle_25 = document.createElement("div");
rectangle_25.id = "rectangle_25";
rectangle_25.style.left = "0px";
rectangle_25.style.top = "486px";
rectangle_25.style.width = "632px";
rectangle_25.style.height = "108px";
rectangle_25.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(rectangle_25);

var _rectangle_24 = document.createElement("div");
_rectangle_24.id = "_rectangle_24";
_rectangle_24.style.left = "0px";
_rectangle_24.style.top = "380px";
_rectangle_24.style.width = "632px";
_rectangle_24.style.height = "108px";
_rectangle_24.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(_rectangle_24);

var _rectangle_30 = document.createElement("div");
_rectangle_30.id = "_rectangle_30";
_rectangle_30.style.left = "0px";
_rectangle_30.style.top = "164px";
_rectangle_30.style.width = "632px";
_rectangle_30.style.height = "108px";
_rectangle_30.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(_rectangle_30);

var _rectangle_31 = document.createElement("div");
_rectangle_31.id = "_rectangle_31";
_rectangle_31.style.left = "0px";
_rectangle_31.style.top = "272px";
_rectangle_31.style.width = "632px";
_rectangle_31.style.height = "108px";
_rectangle_31.style.background = 'rgba(215.69,195.92,213.36,1)';

borger_menu.appendChild(_rectangle_31);

var weekly_planner = document.createElement("div");
weekly_planner.innerHTML = "WEEKLY<br/>                 PLANNER";
weekly_planner.style.textAlign = "center";
weekly_planner.id = "weekly_planner";
weekly_planner.style.left = "39px";
weekly_planner.style.top = "49px";
weekly_planner.style.width = "484px";
weekly_planner.style.height = "100px";
weekly_planner.style.fontFamily = "Sansation";
weekly_planner.style.fontSize = "50px";
weekly_planner.style.textShadow = "0px 4px 1px rgba(0,0,0,0.25)";
weekly_planner.style.overflow = "hidden";
weekly_planner.style.color = "#000000";

contentContainer.appendChild(weekly_planner);

var schedule = document.createElement("div");
schedule.innerHTML = "SCHEDULE";
schedule.style.textAlign = "center";
schedule.id = "schedule";
schedule.style.left = "61px";
schedule.style.top = "192px";
schedule.style.width = "533px";
schedule.style.height = "87px";
schedule.style.fontFamily = "Sansation";
schedule.style.fontSize = "50px";
schedule.style.overflow = "hidden";
schedule.style.color = "#000000";

contentContainer.appendChild(schedule);

var expenses = document.createElement("div");
expenses.innerHTML = "EXPENSES";
expenses.style.textAlign = "center";
expenses.id = "expenses";
expenses.style.left = "61px";
expenses.style.top = "408px";
expenses.style.width = "533px";
expenses.style.height = "87px";
expenses.style.fontFamily = "Sansation";
expenses.style.fontSize = "50px";
expenses.style.overflow = "hidden";
expenses.style.color = "#000000";

contentContainer.appendChild(expenses);

var about_us = document.createElement("div");
about_us.innerHTML = "ABOUT US";
about_us.style.textAlign = "center";
about_us.id = "about_us";
about_us.style.left = "61px";
about_us.style.top = "514px";
about_us.style.width = "533px";
about_us.style.height = "87px";
about_us.style.fontFamily = "Sansation";
about_us.style.fontSize = "50px";
about_us.style.overflow = "hidden";
about_us.style.color = "#000000";

contentContainer.appendChild(about_us);

var help = document.createElement("div");
help.innerHTML = "HELP";
help.style.textAlign = "center";
help.id = "help";
help.style.left = "61px";
help.style.top = "622px";
help.style.width = "533px";
help.style.height = "87px";
help.style.fontFamily = "Sansation";
help.style.fontSize = "50px";
help.style.overflow = "hidden";
help.style.color = "#000000";

contentContainer.appendChild(help);

var log_out = document.createElement("div");
log_out.innerHTML = "LOG OUT";
log_out.style.textAlign = "center";
log_out.id = "log_out";
log_out.style.left = "61px";
log_out.style.top = "836px";
log_out.style.width = "533px";
log_out.style.height = "87px";
log_out.style.fontFamily = "Sansation";
log_out.style.fontSize = "50px";
log_out.style.overflow = "hidden";
log_out.style.color = "#000000";

contentContainer.appendChild(log_out);

var personal_notes = document.createElement("div");
personal_notes.innerHTML = "PERSONAL NOTES";
personal_notes.style.textAlign = "center";
personal_notes.id = "personal_notes";
personal_notes.style.left = "61px";
personal_notes.style.top = "300px";
personal_notes.style.width = "533px";
personal_notes.style.height = "87px";
personal_notes.style.fontFamily = "Sansation";
personal_notes.style.fontSize = "50px";
personal_notes.style.overflow = "hidden";
personal_notes.style.color = "#000000";

contentContainer.appendChild(personal_notes);

