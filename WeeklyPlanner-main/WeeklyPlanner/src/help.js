
var contentContainer = document.createElement("div");
contentContainer.style.width = "595px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgHelp = document.createElement("div");
bgHelp.id = "bgHelp";
bgHelp.style.left = "0px";
bgHelp.style.top = "0px";
bgHelp.style.width = "595px";
bgHelp.style.height = "766px";
bgHelp.style.background = 'rgba(241.19,210.03,236.51,1)';

contentContainer.appendChild(bgHelp);

var notSureText = document.createElement("div");
notSureText.innerHTML = "NOT SURE WHAT TO DO?<br/><br/>IT\'S EASY. JUST CLICK ON ANY OF THE OPTIONS ABOVE AND IT WILL TAKE YOU TO THE RESPECTIVE PAGE. <br/><br/>CLICK ON \'WEEKLY PLANNER\' ABOVE TO RETURN TO THE MAIN PAGE.<br/><br/>START YOUR WEEKLY PLANNER JOURNEY NOW. ";
notSureText.style.textAlign = "justified";
notSureText.id = "notSureText";
notSureText.style.left = "39px";
notSureText.style.top = "117px";
notSureText.style.width = "522px";
notSureText.style.height = "570.5px";
notSureText.style.fontFamily = "Sansation";
notSureText.style.fontSize = "35px";
notSureText.style.overflow = "hidden";
notSureText.style.color = "#000000";

contentContainer.appendChild(notSureText);

var image_6 = document.createElement("img");
image_6.id = "image_6";
image_6.style.left = "543px";
image_6.style.top = "9px";
image_6.style.width = "43px";
image_6.style.height = "43px";
image_6.src = "skins/image_6.png";

contentContainer.appendChild(image_6);

