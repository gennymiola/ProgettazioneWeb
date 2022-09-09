function gestoreImmagini() {
    try {
        var testi = document.createTextNode(tabella[this.id]);
        nodoDescrizione.replaceChild(testi, nodoDescrizione.firstChild);
        var titoli = document.createTextNode(tab[this.id]);
        nodoTitolo.replaceChild(titoli, nodoTitolo.firstChild);
    } catch (e) {
        alert("gestoreImmagini" + e);
    }
}

var nodoTesto;
var nodoTitle;

function gestoreLoad() {
    try {
        for (var immagini in tabella) {
            var nodoImmagini = document.getElementById(immagini);
            nodoImmagini.onclick = gestoreImmagini;
        }
        nodoDescrizione = document.getElementById("descrizione1");
        nodoTitolo = document.getElementById("titolo");
        var messaggio = document.createTextNode("");
        nodoTitolo.appendChild(messaggio);
        nodoDescrizione.appendChild(messaggio);
    } catch (e) {
        alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;

var tabella = {
    immagine1: "Nel 1972 Warhol approcciò la figura di Mao Tse-Tung, accompagnando l'avvicinamento tra Stati Uniti e Cina. L'artista scelse l'immagine più stereotipata del Grande Timoniere, quella pubblicata sulla copertina del Libretto Rosso, trasformandola persino nell'elemento iconografico di una carta da parati. Il paradosso di questa operazione fu che il massimo rappresentante di un impero comunista come quello cinese divenne un'icona diffusa negli Stati Uniti, il paese simbolo del capitalismo avanzato: l'immagine ha il sopravvento sull'ideologia, la svuota dei suoi apparati retorici per renderla puro simulacro.",
    immagine2: "La serie su Marylin Monroe fu realizzata intorno al 1967 e Warhol decise di inserirla soltanto dopo la morte dell'attrice nel ciclo di dipinti Morti e Disastri, dedicato a persone che erano morte in vari modi. Marylin divenne così la quintessenza della poetica warholiana: diva del cinema ed insieme protagonista di una morte violenta e drammatica; era uno dei personaggi pubblici più noti del proprio tempo, ma nascondeva dietro la superficie del suo volto e del suo corpo l'inconoscibilità della tragedia; era un'icona del proprio tempo, ma la sua scomparsa la proiettava già in una dimesione atemporale.",
    immagine3: "La logica seriale che guida Warhol nella scelta delle immagini è utile per comprendere anche il suo slittare da un soggetto all'altro. Sebbene la pratica del distacco emotivo rappresenti una caratteristica fondamentale della poetica warholiana, è altrettanto vero che i soggetti non sono mai scelti casualmente. Gli incidenti d'auto, le sedie elettriche, i tredici criminali più ricercati, i coltelli e tutti gli altri strumenti di violenza quotidiana rappresentano la parte più oscura di quella stessa società che produce merci di consumo e le icone dello spettaolo. Warhol rivela anche in questa serie che il soggetto primario della sua arte è la natura dell'immagine riprodotta e proprio attraverso la ripetizione anche la tragedia più grande si svuota di senso e di pathos: diviene parte di un flusso indistinto di segni destinati a cadere rapidamente nel dimenticatoio, dove il quarto d'ora di celebrità può toccare persino al ricercato numero uno o allo sfortunato e anonimo protagonista di un incidente stradale.",
    immagine4: "Il potere dei dipinti più seriali di Warhol, quelli che si concentrano su una singola immagine, come la Campbell's Soup Cans, proviene dal loro carattere ripetitivo. Nell'immagine seriale l'unicità non è lo scopo, i dipinti sembrano simili e questa mancanza di gerarchia si riflette anche sulle scelte dei soggetti, per cui la scatoletta di minestra equivale all'immagine del grande attore o della sedia elettrica. La Pop Art di Warhol si traduce, quindi, nell'amore per gli oggetti e, oltre a consentire la trasposizione dell'arte alta nella cultura popolare, rappresenta una riflessione sui meccanismi di produzione e ricezione di quelle stesse immagini e dei prodotti che esse veicolano all'interno della società dei consumi e della comunicazione di massa.",
    immagine5: "Warhol ha sempre intrattenuto stretti rapporti con l'Italia, ma è soprattutto nel corso degli anni Ottanta che questo legame è divenuto più stretto, quando l'artista venne invitato da Lucio Amelio a tenere una mostra a Napoli. Proprio da questa occasione nacque la serie dedicata al Vesuvio, realizzata nel 1985 per la mostra Vesuvius by Warhol, alla quale seguì il trittico Fate Presto, voluto da Amelio come reazione alla catastrofe del terremoto che aveva colpito Napoli nel 1980. L'immagine del vulcano fu replicata da Warhol in diversi colori, con lo scopo di esaltarne il valore spettacolare in occasione di un'improvvisa eruzione. Il Vesuvio divenne per l'artista un'ulteriore parte di una raccolta di immagini stereotipate che si prestano alla replica infinita: è un autentico luogo comune, che, inoltre, porta con sé quel senso di morte che rappresenta una parte importante della poetica warholiana.",
    immagine6: "Conclusa la fase pop, alla fine degli anni Settanta Warhol iniziò una serie di opere sorprendenti. Il ciclo delle Shadows, compiuto ne 1978, porta alla luce un artista inedito, che si misura con la pittura astratta, spostando l'attenzione dall'icona ai procedimenti di creazione ed elaborazione della forma. L'origine dell'opera è una fotografia ('immagine da cui nasce la serie delle ombre astratte è quella di un'ombra portata su sagome realizzate in studio e poi fotografate), a conferma della continuità di un procedimento che è ben più di un espediente tecnico, ma è un autentico fondamento concettuale."
}
var tab = {
    immagine1: "I volti della politica",
    immagine2: "Le icone",
    immagine3: "The dark side of America",
    immagine4: "Pop Art",
    immagine5: "Vesuvius by Warhol",
    immagine6: "Abstract Warhol"
}