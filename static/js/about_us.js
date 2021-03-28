var founder_pic = ["images/plaque1.png",
                     "images/plaque1.png",
                     "images/plaque1.png"];

var founder_info = ["Lorem Ipsum",
                      "Lorem Ipsum",
                      "Lorem Ipsum"];

var activity_pic = ["images/plaque1.png",
                     "images/plaque1.png",
                     "images/plaque1.png"];

var activity_info = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus obcaecati fuga quasi asperiores rerum soluta ut cum. Numquam magnam reiciendis ullam harum excepturi amet culpa mollitia ipsa rem cupiditate?",
                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus obcaecati fuga quasi asperiores rerum soluta ut cum. Numquam magnam reiciendis ullam harum excepturi amet culpa mollitia ipsa rem cupiditate?",
                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus obcaecati fuga quasi asperiores rerum soluta ut cum. Numquam magnam reiciendis ullam harum excepturi amet culpa mollitia ipsa rem cupiditate?"];

setFounders();
setActivities();

function setFounders() {
    for(var i=0; i<document.getElementsByClassName("founder").length; i++) {
        var photo = document.getElementsByClassName("founder")[i].childNodes[1];
        var info = document.getElementsByClassName("founder")[i].childNodes[3];
    
        photo.src = founder_pic[i];
        info.innerHTML = founder_info[i];
    }
}

function setActivities() {
    for(var i=0; i<document.getElementsByClassName("activity").length; i++) {
        var photo = document.getElementsByClassName("activity")[i].childNodes[1];
        var info = document.getElementsByClassName("activity")[i].childNodes[3];
    
        photo.src = activity_pic[i];
        info.innerHTML = activity_info[i];
    }
}

document.getElementById("volunteer_button").onclick = function() {
    location.href='volunteer.html';
}