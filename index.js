//Variables
const title = document.getElementById('title');
const bodyofnote = document.getElementById('body-conflict');
const addbtn = document.getElementById("btn");
const notesdiv = document.getElementById('notesdiv');
if (JSON.parse(localStorage.getItem("titleinstorage")) == null) {
    var titles = [];
    var bodies = [];
} else {
    var titles = JSON.parse(localStorage.getItem("titleinstorage"));
    var bodies = JSON.parse(localStorage.getItem("bodiesinstorage"));
}
    var i = 0;
var color = ["#9370db", "mediumaquamarine", "mediumorchid", "mediumslateblue", "mediumturquoise", "mediumvioletred", "mediumseagreen", "#c41e3a","midnightblue","mediumpurple"];
//EventListners
addbtn.addEventListener("click", addnote);
if (JSON.parse(localStorage.getItem("titleinstorage")) == null) {
    console.log("No new Notes")
} else {
    displaynote();
}
const deletebtn = document.getElementById('delete-btn');
//deletebtn.addEventListener("click", deletenote);
//Functions
function addnote() {
    var header = title.value;
    var notebody = bodyofnote.value;
    titles.push(header);
    bodies.push(notebody);
    localStorage.setItem("titleinstorage", JSON.stringify(titles));
    localStorage.setItem("bodiesinstorage", JSON.stringify(bodies));
    location.reload();
    //localStorage.clear();
}
function displaynote() {
    for (i = 0; i < titles.length; i++){
        var random  = color[parseInt(Math.floor(Math.random() *   10 ))]
        var html = ['<div class="titleofnote"><h4>', titles[i], ,'<i class="fas fa-trash-alt" title = "Delete this Note" onclick="localStorage.setItem(\'todelete\',' + titles.indexOf(titles[i])+ '); deletenote(); "></i>', '</h4></div>', '<div class="notebody">', ' <p style="font-size: 12px">', bodies[i], '</p>', '</div>', '</div>'].join('');
        var div = document.createElement('div');
        div.className = "notecontainer";   
        div.innerHTML = html;
        div.style.background = random   ;
        notesdiv.appendChild(div);
    }
    
}

function deletenote() {
    var deletenumber = parseInt(localStorage.getItem("todelete"));
    localStorage.clear();
    titles.splice(deletenumber, 1);
    bodies.splice(deletenumber, 1);
    localStorage.setItem("titleinstorage", JSON.stringify(titles));
    localStorage.setItem("bodiesinstorage", JSON.stringify(bodies));
    location.reload();

}