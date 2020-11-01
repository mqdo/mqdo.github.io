let repC = document.getElementById("rep-c");
let repCpp = document.getElementById("rep-cpp");
let repJS = document.getElementById("rep-js");
let repHTML = document.getElementById("rep-html");
let repCSS = document.getElementById("rep-css");
repC.hidden = true;
repCpp.hidden = true;
repJS.hidden = true;
repHTML.hidden = true;
repCSS.hidden = true;

let c = document.getElementById("c");
let cpp = document.getElementById("cpp");
let js = document.getElementById("js");
let html = document.getElementById("html");
let css = document.getElementById("css");

function showC() {
    c.hidden = true;
    repC.hidden = false;
}

function hideC() {
    c.hidden = false;
    repC.hidden = true;
}

repC.onmouseout = hideC;
c.onmouseover = showC;

function showCpp() {
    cpp.hidden = true;
    repCpp.hidden = false;
}

function hideCpp() {
    cpp.hidden = false;
    repCpp.hidden = true;
}

repCpp.onmouseout = hideCpp;
cpp.onmouseover = showCpp;

function showJS() {
    js.hidden = true;
    repJS.hidden = false;
}

function hideJS() {
    js.hidden = false;
    repJS.hidden = true;
}

repJS.onmouseout = hideJS;
js.onmouseover = showJS;

function showHTML() {
    html.hidden = true;
    repHTML.hidden = false;
}

function hideHTML() {
    html.hidden = false;
    repHTML.hidden = true;
}

repHTML.onmouseout = hideHTML;
html.onmouseover = showHTML;

function showCSS() {
    css.hidden = true;
    repCSS.hidden = false;
}

function hideCSS() {
    css.hidden = false;
    repCSS.hidden = true;
}

repCSS.onmouseout = hideCSS;
css.onmouseover = showCSS;

