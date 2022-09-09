var nodoTitolo;
var nodoScritta;

function gestoreClicca() {
    try {
        nodoScritta.style.display = "block";
        nodoTitolo.style.display = "none";
    } catch (e) {
        alert("gestoreClicca" + e);
    }
}

function gestoreLoad() {
    try {
        nodoScritta = document.getElementById("s");
        nodoTitolo = document.getElementById("tito");
        nodoTitolo.style.display = "block";
        nodoScritta.style.display = "none";
        nodoTitolo.onclick = gestoreClicca;
        nodoScritta.onclick = gestoreClicca;
    } catch (e) {
        alert("gestoreLoad" + e);

    }
}
window.onload = gestoreLoad;