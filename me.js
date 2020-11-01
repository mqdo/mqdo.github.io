let me = document.getElementById("me");
let emo = [":)", ":(", ":D", ":))))", ":'("];


function emotion() {
    let rand = Math.floor(Math.random() * 5);
    document.querySelector("figcaption").innerHTML = emo[rand];
}
me.onclick = emotion;
