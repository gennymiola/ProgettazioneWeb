var indiceFoto;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var numeroFoto;
var galleria;
var nodoTesto;
var nodoParagrafo;

/**/function gestoreLoad() {
/**/    try {
/**/        nodoAvanti = document.getElementById("go");
/**/        nodoIndietro = document.getElementById("back");
/**/        nodoFoto = document.getElementById("polaroidgalleria");
/**/        nodoTesto = document.getElementById("nome");
/**/        nodoParagrafo = document.getElementById("artista");
/**/        nodoAvanti.onclick = gestoreClickAvanti;
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
/**/    if (indiceFoto == numeroFoto) {
/**/        indiceFoto = 0;
/**/   }
/**/    if (indiceFoto < 0) {
/**/        indiceFoto = numeroFoto - 1;
/**/    }
/**/    nodoFoto.setAttribute("src", galleria[indiceFoto].foto);
    nodoTesto = document.createTextNode(galleria[indiceFoto].testi);
    if (nodoParagrafo.firstChild == null) {
        nodoParagrafo.appendChild(nodoTesto);
    } else {
        nodoParagrafo.replaceChild(nodoTesto, nodoParagrafo.firstChild);
    }
}


var galleria = [{
        foto: "img/polaroid1.jpg",
        testi: "John Lennon"
    },

    {
        foto: "img/polaroid2.jpg",
        testi: "Mick Jagger"
    },
    {
        foto: "img/polaroid3.jpg",
        testi: "Stevie Wonder "
    },
    {
        foto: "img/polaroid4.jpg",
        testi: "Francis Bacon "
    },
    {
        foto: "img/polaroid5.jpg",
        testi: "Roy Lichtenstein "
    },
    {
        foto: "img/polaroid7.jpg",
        testi: "Liza Minelli "
    },
    {
        foto: "img/polaroid8.jpg",
        testi: "Andy Warhol "
    },
    {
        foto: "img/polaroid9.jpg",
        testi: "Yves Saint-Laurent "
    }
]