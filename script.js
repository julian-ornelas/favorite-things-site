var isDarkMode = false;

function dark_mode() {
    isDarkMode = !isDarkMode;
    
    var obj = document.getElementsByClassName("basis");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = isDarkMode ? "#0F080B" : ""; // Set back to original or dark mode color
    }

    var obj = document.getElementsByClassName("body-bg");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = isDarkMode ? "#000A11" : ""; // Set back to original or dark mode color
    }

    var obj = document.getElementsByClassName("primary");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.color = isDarkMode ? "#DBE1B1" : ""; // Set back to original or dark mode color
    }

    var obj = document.getElementsByClassName("secondary");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.color = isDarkMode ? "#FE9F9B" : ""; // Set back to original or dark mode color
    }
}

console.log("Nothing's here. :)");