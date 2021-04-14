
var content_container = document.createElement("div");
content_container.style.width = "595px";
content_container.id = "content_container";
content_container.style.position = "relative";
content_container.style.display = "block";
content_container.style.margin = "0 auto";
document.body.appendChild(content_container);

var bgAddTask = document.createElement("div");
bgAddTask.id = "bgAddTask";
bgAddTask.style.left = "0px";
bgAddTask.style.top = "0px";
bgAddTask.style.width = "595px";
bgAddTask.style.height = "790px";
bgAddTask.style.background = 'rgba(253.94,238.52,199.98,1)';

content_container.appendChild(bgAddTask);

var taskNameText = document.createElement("div");
taskNameText.innerHTML = "TASK NAME:<br/>";
taskNameText.style.textAlign = "left";
taskNameText.id = "taskNameText";
taskNameText.style.left = "38px";
taskNameText.style.top = "63px";
taskNameText.style.width = "237px";
taskNameText.style.height = "62px";
taskNameText.style.fontFamily = "Sansation";
taskNameText.style.fontSize = "30px";
taskNameText.style.overflow = "hidden";
taskNameText.style.color = "#000000";

content_container.appendChild(taskNameText);

var taskNameTextbox = document.createElement("div");
taskNameTextbox.id = "taskNameTextbox";
taskNameTextbox.style.left = "37px";
taskNameTextbox.style.top = "115px";
taskNameTextbox.style.width = "524px";
taskNameTextbox.style.height = "48px";
taskNameTextbox.style.border = "1px solid #000000";
taskNameTextbox.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(taskNameTextbox);

var dayOfTheWeekText = document.createElement("div");
dayOfTheWeekText.innerHTML = "DAY OF THE WEEK:";
dayOfTheWeekText.style.textAlign = "left";
dayOfTheWeekText.id = "dayOfTheWeekText";
dayOfTheWeekText.style.left = "38px";
dayOfTheWeekText.style.top = "434px";
dayOfTheWeekText.style.width = "360px";
dayOfTheWeekText.style.height = "64px";
dayOfTheWeekText.style.fontFamily = "Sansation";
dayOfTheWeekText.style.fontSize = "30px";
dayOfTheWeekText.style.overflow = "hidden";
dayOfTheWeekText.style.color = "#000000";

content_container.appendChild(dayOfTheWeekText);

var monRect = document.createElement("div");
monRect.id = "monRect";
monRect.style.left = "37px";
monRect.style.top = "486px";
monRect.style.width = "68px";
monRect.style.height = "55px";
monRect.style.border = "1px solid #000000";
monRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(monRect);

var sunRect = document.createElement("div");
sunRect.id = "sunRect";
sunRect.style.left = "433px";
sunRect.style.top = "486px";
sunRect.style.width = "68px";
sunRect.style.height = "55px";
sunRect.style.border = "1px solid #000000";
sunRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(sunRect);

var satRect = document.createElement("div");
satRect.id = "satRect";
satRect.style.left = "367px";
satRect.style.top = "486px";
satRect.style.width = "68px";
satRect.style.height = "55px";
satRect.style.border = "1px solid #000000";
satRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(satRect);

var friRect = document.createElement("div");
friRect.id = "friRect";
friRect.style.left = "301px";
friRect.style.top = "486px";
friRect.style.width = "68px";
friRect.style.height = "55px";
friRect.style.border = "1px solid #000000";
friRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(friRect);

var thursRect = document.createElement("div");
thursRect.id = "thursRect";
thursRect.style.left = "235px";
thursRect.style.top = "486px";
thursRect.style.width = "68px";
thursRect.style.height = "55px";
thursRect.style.border = "1px solid #000000";
thursRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(thursRect);

var wedRect = document.createElement("div");
wedRect.id = "wedRect";
wedRect.style.left = "169px";
wedRect.style.top = "486px";
wedRect.style.width = "68px";
wedRect.style.height = "55px";
wedRect.style.border = "1px solid #000000";
wedRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(wedRect);

var tuesRect = document.createElement("div");
tuesRect.id = "tuesRect";
tuesRect.style.left = "103px";
tuesRect.style.top = "486px";
tuesRect.style.width = "68px";
tuesRect.style.height = "55px";
tuesRect.style.border = "1px solid #000000";
tuesRect.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(tuesRect);

var taskDescriptionText = document.createElement("div");
taskDescriptionText.innerHTML = "TASK DESCRIPTION:<br/>";
taskDescriptionText.style.textAlign = "left";
taskDescriptionText.id = "taskDescriptionText";
taskDescriptionText.style.left = "38px";
taskDescriptionText.style.top = "200px";
taskDescriptionText.style.width = "360px";
taskDescriptionText.style.height = "62px";
taskDescriptionText.style.fontFamily = "Sansation";
taskDescriptionText.style.fontSize = "30px";
taskDescriptionText.style.overflow = "hidden";
taskDescriptionText.style.color = "#000000";

content_container.appendChild(taskDescriptionText);

var taskDescriptionTextbox = document.createElement("div");
taskDescriptionTextbox.id = "taskDescriptionTextbox";
taskDescriptionTextbox.style.left = "37px";
taskDescriptionTextbox.style.top = "252px";
taskDescriptionTextbox.style.width = "524px";
taskDescriptionTextbox.style.height = "145px";
taskDescriptionTextbox.style.border = "1px solid #000000";
taskDescriptionTextbox.style.background = 'rgba(255,255,255,1)';

content_container.appendChild(taskDescriptionTextbox);

var m = document.createElement("div");
m.innerHTML = "M";
m.style.textAlign = "center";
m.id = "m";
m.style.left = "43px";
m.style.top = "494px";
m.style.width = "58px";
m.style.height = "61px";
m.style.fontFamily = "Sansation";
m.style.fontSize = "30px";
m.style.textShadow = "1px 1px 1px #000000";
m.style.overflow = "hidden";
m.style.color = "#000000";

content_container.appendChild(m);

var su = document.createElement("div");
su.innerHTML = "Su";
su.style.textAlign = "center";
su.id = "su";
su.style.left = "434px";
su.style.top = "494px";
su.style.width = "71px";
su.style.height = "61px";
su.style.fontFamily = "Sansation";
su.style.fontSize = "30px";
su.style.textShadow = "0px 0px 1px #000000";
su.style.overflow = "hidden";
su.style.color = "#E1DDDD";

content_container.appendChild(su);

var s = document.createElement("div");
s.innerHTML = "S";
s.style.textAlign = "center";
s.id = "s";
s.style.left = "374px";
s.style.top = "494px";
s.style.width = "58px";
s.style.height = "61px";
s.style.fontFamily = "Sansation";
s.style.fontSize = "30px";
s.style.textShadow = "0px 0px 1px #000000";
s.style.overflow = "hidden";
s.style.color = "#E1DDDD";

content_container.appendChild(s);

var f = document.createElement("div");
f.innerHTML = "F";
f.style.textAlign = "center";
f.id = "f";
f.style.left = "308px";
f.style.top = "494px";
f.style.width = "58px";
f.style.height = "61px";
f.style.fontFamily = "Sansation";
f.style.fontSize = "30px";
f.style.textShadow = "0px 0px 1px #000000";
f.style.overflow = "hidden";
f.style.color = "#E1DDDD";

content_container.appendChild(f);

var h = document.createElement("div");
h.innerHTML = "H";
h.style.textAlign = "center";
h.id = "h";
h.style.left = "242px";
h.style.top = "494px";
h.style.width = "58px";
h.style.height = "61px";
h.style.fontFamily = "Sansation";
h.style.fontSize = "30px";
h.style.textShadow = "0px 0px 1px #000000";
h.style.overflow = "hidden";
h.style.color = "#E1DDDD";

content_container.appendChild(h);

var w = document.createElement("div");
w.innerHTML = "W";
w.style.textAlign = "center";
w.id = "w";
w.style.left = "176px";
w.style.top = "494px";
w.style.width = "58px";
w.style.height = "61px";
w.style.fontFamily = "Sansation";
w.style.fontSize = "30px";
w.style.textShadow = "0px 0px 1px #000000";
w.style.overflow = "hidden";
w.style.color = "#E1DDDD";

content_container.appendChild(w);

var t = document.createElement("div");
t.innerHTML = "T";
t.style.textAlign = "center";
t.id = "t";
t.style.left = "110px";
t.style.top = "494px";
t.style.width = "58px";
t.style.height = "61px";
t.style.fontFamily = "Sansation";
t.style.fontSize = "30px";
t.style.textShadow = "0px 0px 1px #000000";
t.style.overflow = "hidden";
t.style.color = "#E1DDDD";

content_container.appendChild(t);

var add_schedule = document.createElement("div");
add_schedule.id = "add_schedule";
add_schedule.style.width = "294px";
add_schedule.style.height = "67px";
add_schedule.style.left = "151px";
add_schedule.style.top = "687px";
add_schedule.style.position = "absolute";
content_container.appendChild(add_schedule);

var rectangle_15 = document.createElement("div");
rectangle_15.id = "rectangle_15";
rectangle_15.style.left = "0px";
rectangle_15.style.top = "0px";
rectangle_15.style.width = "296px";
rectangle_15.style.height = "69px";
rectangle_15.style.borderRadius = "50px";
rectangle_15.style.border = "1px solid #000000";
rectangle_15.style.background = 'rgba(233.75,233.75,233.75,1)';

add_schedule.appendChild(rectangle_15);

var submit = document.createElement("div");
submit.innerHTML = "SUBMIT";
submit.style.textAlign = "center";
submit.id = "submit";
submit.style.left = "44px";
submit.style.top = "14px";
submit.style.width = "212px";
submit.style.height = "63.5px";
submit.style.fontFamily = "Sansation";
submit.style.fontSize = "35px";
submit.style.overflow = "hidden";
submit.style.color = "#000000";

add_schedule.appendChild(submit);

var image_8 = document.createElement("img");
image_8.id = "image_8";
image_8.style.left = "543px";
image_8.style.top = "11px";
image_8.style.width = "43px";
image_8.style.height = "43px";
image_8.src = "skins/image_8.png";

content_container.appendChild(image_8);

