let c = document.getElementById("c");
let cpp = document.getElementById("cpp");
let js = document.getElementById("js");
let html = document.getElementById("html");
let css = document.getElementById("css");

let hideC = function(target) {
    c.style.color = "red";
    target.hidden = true;
    document.getElementById("rep-c").hidden = false;
}

let showC = function(target) {
    target.hidden = false;
    document.getElementById("rep-c").hidden = true;
    c.style.color = "red";
}

c.addEventListener("mouseover", hideC);
c.addEventListener("mouseout", showC);

    document.getElementById("welcome").innerHTML = "DAMN!";
