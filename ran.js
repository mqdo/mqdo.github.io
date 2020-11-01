let ran = Math.floor(Math.random() * 3);
let tip = document.getElementById("tip");
switch (ran) {
    case 0:
        break;
    case 1:
        tip.innerHTML = "Tip: check out my skills one by one";
        break;
    case 2:
        tip.innerHTML = "Tip: check out my welcoming";
        break;
}
;
