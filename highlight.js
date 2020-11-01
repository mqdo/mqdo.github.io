let welcome = document.getElementById("welcome");

function highlight() {
    welcome.style.color = "red";
    welcome.innerHTML = "I know you will point to me";
}
function normal() {
    welcome.style.color = "black";
    welcome.innerHTML = "Welcome to my personal site. Please enjoy!";
}

welcome.onmouseover = highlight;
welcome.onmouseout = normal;
