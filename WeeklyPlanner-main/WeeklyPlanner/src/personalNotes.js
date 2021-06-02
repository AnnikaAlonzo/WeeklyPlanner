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
notesListRect.style.top = "167px";
notesListRect.style.width = "470px";
notesListRect.style.height = "778px";
notesListRect.style.background = 'rgba(225,221,221,1)';
notesListRect.style.overflow = "hidden";
notesListRect.style.overflowY = "auto";
notesListRect.style.overflowX = "hidden";

contentContainer.appendChild(notesListRect);

var notesViewerRect = document.createElement("div");
notesViewerRect.id = "notesViewerRect";
notesViewerRect.style.left = "552px";
notesViewerRect.style.top = "167px";
notesViewerRect.style.width = "847px";
notesViewerRect.style.height = "778px";
notesViewerRect.style.background = 'rgba(225,221,221,1)';
notesViewerRect.style.overflowX = "hidden";
notesViewerRect.style.overflowY = "auto";

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
image_3.addEventListener("click", closeNav);
image_3.addEventListener("click", closeAboutUs);
image_3.addEventListener("click", closeHelp);

contentContainer.appendChild(image_3);

var saveRect = document.createElement("div");
saveRect.id = "headerRect";
saveRect.style.left = "552px";
saveRect.style.top = "74px";
saveRect.style.width = "847px";
saveRect.style.height = "93px";
saveRect.style.background = 'rgba(248,229,229,1)';

contentContainer.appendChild(saveRect);

var editButton = document.createElement("img");
editButton.id = "image_3";
editButton.style.left = "1250px";
editButton.style.top = "92px";
editButton.style.width = "60px";
editButton.style.height = "60px";
editButton.style.cursor = "pointer";
editButton.src = "skins/editSave.png";
editButton.addEventListener("click", displaySave);

contentContainer.appendChild(editButton);

var deleteButton = document.createElement("img");
deleteButton.id = "image_3";
deleteButton.style.left = "1325px";
deleteButton.style.top = "92px";
deleteButton.style.width = "55px";
deleteButton.style.height = "55px";
deleteButton.style.cursor = "pointer";
deleteButton.src = "skins/delete.png";
deleteButton.addEventListener("click", deleteNode);

contentContainer.appendChild(deleteButton);

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
image_4.addEventListener("click", closeNote);
image_4.addEventListener("click", closeAboutUs);
image_4.addEventListener("click", closeHelp);

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

var notesArray = [];
var descrArr = [];
var i = 0;
var index = 0;
var display;
var selected;
var currentUser;

function getUser(){
    $(onload).ready(function(){
        currentUser = sessionStorage.getItem('currentUser');
        console.log(currentUser);
    })
}

function notesLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "personalNotesLoad.php",
            data: {currentUser: currentUser},
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



function descLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "personalNotesDescLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                if(data.length != 0){
                    var descTemp = data.split(",");
                    updateDesc(descTemp);
                }
            }
        })
    })
}

$(document).ready(function(){
    getUser();
    notesLoad();
    descLoad();
    $('#saveButton').click("click",function() {
        notesArray.push(document.getElementById("titleInp").value);
        descrArr.push(document.getElementById("descInp").value);
        if(notesArray.length != 0){
            var row = document.createElement("li");
            row.innerHTML = notesArray[i];
            row.style.border = "1px solid #d17b7b";
            row.style.width = "468px";
            row.style.height = "50px";
            row.style.textAlign = "center";
            row.style.paddingTop = "25px";
            row.style.listStyle = "none";
            row.style.fontStyle = "Sansation";
            row.style.cursor = "pointer";
            row.addEventListener("click", function(){
                while(notesViewerRect.hasChildNodes()){
                    notesViewerRect.removeChild(notesViewerRect.lastChild);
                }
                displayDesc(row.innerHTML);
            });
            notesListRect.appendChild(row);
            i++;
        } 

        addToDB();

    })
})

function addToDB(){
    $.ajax({
        type: "POST",
        url: "personalNotes.php",
        data: {
            currentUser: currentUser,
            title: JSON.stringify(notesArray),
            descriptions: JSON.stringify(descrArr)
        },
        success:function(result) {
            
        }
    })
}

function displayDesc(name) {
    display = document.createElement("div");
    index = notesArray.indexOf(name);
    selected = name;
    console.log(name);
    display.innerHTML = descrArr[index];
    display.contentEditable = "true";
    display.style.width = "847px";
    display.style.height = "750px";
    display.style.display = "block";
    display.style.padding = "2px";
    display.style.fontStyle = "Sansation";
    document.execCommand("defaultParagraphSeparator", false, "p");
    notesViewerRect.append(display);
}

function displaySave(){
    descrArr[index] = display.innerHTML;

        $.ajax({
            type: "POST",
            url: "updatedDescr.php",
            data: {
                title: JSON.stringify(notesArray),
                descriptions: JSON.stringify(descrArr)
            },
            success:function(result) {
                
            }
        })
}

function list(data) {
    var tempI;
    for(tempI = 0; tempI < data.length; tempI++){  
        var temp = data[tempI];
        (function(){
            notesArray.push(temp);
            var row = document.createElement("li");
            row.innerHTML = notesArray[i];
            row.style.border = "1px solid #d17b7b";
            row.style.width = "468px";
            row.style.height = "50px";
            row.style.textAlign = "center";
            row.style.paddingTop = "25px";
            row.style.listStyle = "none";
            row.style.fontStyle = "Sansation";
            row.style.cursor = "pointer";
            row.addEventListener("click", function(){
                while(notesViewerRect.hasChildNodes()){
                    notesViewerRect.removeChild(notesViewerRect.lastChild);
                }
                displayDesc(row.innerHTML);
            });
            notesListRect.appendChild(row);
            i++;
        })();
    }
    
    
}

function deleteNode(){
    console.log("MADE CHANGES");
    var k;
    k = notesArray.indexOf(selected);
    notesListRect.removeChild(notesListRect.childNodes[k]);
    notesViewerRect.removeChild(notesViewerRect.lastChild);
    deleteFromArray();
    deleteFromDB();
}

function deleteFromArray(){
    var j;

    for(j = 0; j < notesArray.length; j++){
        if(notesArray[j] == selected){
            notesArray.splice(j,1);
            descrArr.splice(j,1);
            i--;
        }
    }
}

function deleteFromDB(){
    $.ajax({
        type: "POST",
        url: "personalNotesDelete.php",
        data: {
            title: selected
        },
        success:function(result) {
            
        }
    })
}

function updateDesc(data){
    var k;
    for(k = 0; k < data.length; k++){
        descrArr.push(data[k]);
    } 
}

function openAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "595px";
    document.getElementById("aboutUsOverlay").style.height = "766px";
}
  
function closeAboutUs() {
    document.getElementById("aboutUsOverlay").style.width = "0";
    document.getElementById("aboutUsOverlay").style.height = "0";
}

function openHelp() {
    document.getElementById("helpOverlay").style.width = "595px";
    document.getElementById("helpOverlay").style.height = "766px";
}
  
function closeHelp() {
    document.getElementById("helpOverlay").style.width = "0";
    document.getElementById("helpOverlay").style.height = "0";
}