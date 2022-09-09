function inizializza() {
    try {
        nodoFoto1.style.display = "block";
        nodoFoto2.style.display = "block";
        nodoFoto3.style.display = "block";
        nodoFoto4.style.display = "block";
        nodoFoto5.style.display = "block";
        nodoFoto6.style.display = "block";
    } catch (e) {
        alert("inizializza" + e);
    }
}

function gestoreStampa() {
    try {
        nodoFoto1.style.display = "none";
        nodoFoto2.style.display = "none";
        nodoFoto3.style.display = "none";
        nodoFoto4.style.display = "none";
        nodoFoto5.style.display = "none";
        nodoFoto6.style.display = "none";
    } catch (e) {
        alert("gestoreStampa" + e);
    }

}
var nodoFoto1;
var nodoFoto2;
var nodoFoto3;
var nodoFoto4;
var nodoFoto5;
var nodoFoto6;

function gestoreLoad() {
    nodoFoto1 = document.getElementById("foto1");
    nodoFoto2 = document.getElementById("foto2");
    nodoFoto3 = document.getElementById("foto3");
    nodoFoto4 = document.getElementById("foto4");
    nodoFoto5 = document.getElementById("foto5");
    nodoFoto6 = document.getElementById("foto6");
    nodoFoto1.onclick = gestoreStampa;
    nodoFoto2.onclick = gestoreStampa;
    nodoFoto3.onclick = gestoreStampa;
    nodoFoto4.onclick = gestoreStampa;
    nodoFoto5.onclick = gestoreStampa;
    nodoFoto6.onclick = gestoreStampa;
    inizializza();
}
window.onload = gestoreLoad;