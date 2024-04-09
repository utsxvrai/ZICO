
//  event listener for the button : it is listening for a click event

var button = document.getElementById("changeThemeBtn");
var body = document.getElementsByTagName("body")[0];


button.addEventListener("click", changeTheme);

function changeTheme(e){
    console.log(e)
    var theme = document.getElementById("theme");
    // check the current theme
    if(theme.getAttribute("href") == "darktheme.css"){
        console.log("Changing to dark theme");
        theme.setAttribute("href", "style.css");
    }
    else{
        theme.setAttribute("href", "darktheme.css");
    }
}