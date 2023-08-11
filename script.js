function dark_mode() {
    var obj = document.getElementsByClassName("basis");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = "#0F080B";
    }

    var obj = document.getElementsByClassName("body-bg");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = "#000A11";
    }

    var obj = document.getElementsByClassName("primary");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.color = "#DBE1B1";
    }

    var obj = document.getElementsByClassName("secondary");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.color = "#FE9F9B";
    }
}


console.log("Nothing's here. :)");