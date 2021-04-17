
var contentContainer = document.createElement("div");
contentContainer.style.width = "1440px";
contentContainer.id = "contentContainer";
contentContainer.style.position = "relative";
contentContainer.style.display = "block";
contentContainer.style.margin = "0 auto";
document.body.appendChild(contentContainer);

var bgPersonalNotes = document.createElement("div");
bgPersonalNotes.id = "bgPersonalNotes";
bgPersonalNotes.style.left = "0px";
bgPersonalNotes.style.top = "0px";
bgPersonalNotes.style.width = "1440px";
bgPersonalNotes.style.height = "1024px";
bgPersonalNotes.style.background = 'rgba(181,212,235,1)';

contentContainer.appendChild(bgPersonalNotes);

var notesListRect = document.createElement("div");
notesListRect.id = "notesListRect";
notesListRect.style.left = "59px";
notesListRect.style.top = "79px";
notesListRect.style.width = "470px";
notesListRect.style.height = "866px";
notesListRect.style.background = 'rgba(225,221,221,1)';

contentContainer.appendChild(notesListRect);

var notesViewerRect = document.createElement("div");
notesViewerRect.id = "notesViewerRect";
notesViewerRect.style.left = "552px";
notesViewerRect.style.top = "74px";
notesViewerRect.style.width = "847px";
notesViewerRect.style.height = "871px";
notesViewerRect.style.background = 'rgba(247.56,229,229,1)';

contentContainer.appendChild(notesViewerRect);

var headerRect = document.createElement("div");
headerRect.id = "headerRect";
headerRect.style.left = "59px";
headerRect.style.top = "74px";
headerRect.style.width = "470px";
headerRect.style.height = "93px";
headerRect.style.background = 'rgba(248,229,229,1)';

contentContainer.appendChild(headerRect);

var image_3 = document.createElement("img");
image_3.id = "image_3";
image_3.style.left = "461px";
image_3.style.top = "99px";
image_3.style.width = "43px";
image_3.style.height = "43px";
image_3.style.cursor = "pointer";
image_3.src = "skins/image_3.png";
image_3.addEventListener("click", addNote);

contentContainer.appendChild(image_3);

function addNote() {
    document.getElementById("myOverlay").style.width = "600px";
    document.getElementById("myOverlay").style.height = "600px";
    document.getElementById("mainOverlay").style.marginLeft = "250px";
}
  
function closeNote() {
    document.getElementById("myOverlay").style.width = "0";
    document.getElementById("myOverlay").style.height = "0";
    document.getElementById("mainOverlay").style.marginLeft = "0";
}

var image_4 = document.createElement("img");
image_4.id = "image_4";
image_4.style.left = "75px";
image_4.style.top = "96px";
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



function clearInput() {

    document.getElementById("titleInp").value = "";
    document.getElementById("descInp").value = "";
}