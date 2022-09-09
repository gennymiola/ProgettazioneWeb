var indiceFoto;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var numeroFoto;
var galleria;

/**/function gestoreLoad() {
/**/    try {
/**/        nodoAvanti = document.getElementById("avanti");
/**/        nodoIndietro = document.getElementById("indietro");
/**/        nodoFoto = document.getElementById("fotof");
/**/       nodoAvanti.onclick = gestoreClickAvanti;
/**/        nodoIndietro.onclick = gestoreClickIndietro;
/**/        numeroFoto = galleria.length;
/**/        indiceFoto = 0;
/**/        cambiaFoto(0);
/**/    } catch (e) {
/**/        alert("gestoreLoad" + e);
/**/    }
/**/}
/**/window.onload = gestoreLoad;

/**/function gestoreClickAvanti() {
/**/    try {
/**/        cambiaFoto(+1);
/**/    } catch (e) {
/**/        alert("gestoreClickAvanti" + e);
/**/    }
/**/}

/**/function gestoreClickIndietro() {
/**/    try {
/**/        cambiaFoto(-1);
/**/    } catch (e) {
/**/        alert("gestoreClickIndietro" + e);
/**/    }
/**/}

/**/function cambiaFoto(x) {
/**/    indiceFoto += x;
/**/    if (indiceFoto >= numeroFoto) {
/**/        indiceFoto = 0;
/**/    }
/**/    if (indiceFoto < 0) {
/**/        indiceFoto = numeroFoto - 1;
/**/    }
/**/    nodoFoto.setAttribute("src", galleria[indiceFoto]);
/**/}

var galleria = [
    "img/via.jpg",
    "img/serigrafie.jpg",
    "img/film2.jpg",
    "img/musica.jpg",
    "img/divano.jpg",
    "img/silver.jpg",
    "img/fotografia.jpg",
    "img/andyfoto.jpg",
    "img/gruppo.jpg"
]