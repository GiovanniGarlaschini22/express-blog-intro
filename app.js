// importo il server dell'express //
import express from "express";

// invoco la funzione express //
const app = express();

// creo la porta di accesso //
const port = 3000;

// rendo accessibile la cartella immagini //
app.use(express.static("public"));

// ROTTE DELLE API //
// rotta che ritorna la stringa "Server del mio blog" //
app.get("/", (req, res) => {
    const resString = {
        data: "Server del mio blog"
    };
    res.json(resString);
});

// rotta bacheca //
app.get("/bacheca", (req, res) => {
    // array di oggetti con i dettagli dei post //
    const post = [
        {
            titolo: "Claude Monet",
            contenuto: "Claude Monet (1840-1926) è considerato il padre dell’Impressionismo, un movimento artistico che ha rivoluzionato la pittura nel XIX secolo. La sua opera è caratterizzata da un uso magistrale della luce e del colore, con pennellate rapide e vibranti che catturano l’essenza fugace di un momento.",
            immagine: "public/imgs/Claude-Monet.jpg",
            tags: ["Arte", "Impressionismo", "Luce", "Impression, soleil levant"]
        },
        {
            titolo: "Édouard Manet",
            contenuto: "Édouard Manet (1832-1883) è una figura chiave nella storia dell’arte, spesso considerato il precursore dell’Impressionismo pur non essendone pienamente parte. La sua opera ha segnato una svolta fondamentale nella pittura occidentale, ponendo le basi per l’arte moderna.",
            immagine: "public/imgs/Édouard-Manet.jpg",
            tags: ["Arte", "Realismo", "Controversia", "Olympia"]
        },
        {
            titolo: "Rembrandt Harmenszoon van Rijn",
            contenuto: "Rembrandt Harmenszoon van Rijn (1606-1669) è uno dei più grandi pittori e incisori dell’età d’oro olandese, noto per la sua straordinaria capacità di rappresentare l’animo umano con profondità e verità. La sua arte si distingue per l'uso sapiente della luce e dell’ombra (chiaroscuro), tecnica che utilizza per esaltare espressioni, emozioni e atmosfere intime.",
            immagine: "public/imgs/Rembrandt.jpg",
            tags: ["Arte", "Impressionismo", "Introspezione", "La ronda di notte"]
        },
        {
            titolo: "Pierre Auguste Renoir",
            contenuto: "Pierre-Auguste Renoir (1841-1919) è uno dei più celebri pittori francesi e una figura centrale del movimento impressionista. La sua arte è un inno alla bellezza, alla luce e alla vitalità. Renoir ha saputo cogliere la leggerezza e l’eleganza della vita quotidiana, trasformando momenti ordinari in scene poetiche.",
            immagine: "public/imgs/Renoir.jpg",
            tags: ["Arte", "Impressionismo", "Sensualità", "Il ballo al Moulin de la Galette"]
        },
        {
            titolo: "Vincent Van Gogh",
            contenuto: "Vincent van Gogh (1853-1890) è uno degli artisti più iconici e intensi della storia dell’arte. La sua pittura, caratterizzata da colori vibranti, pennellate energiche e una profonda carica emotiva, ha rivoluzionato il modo di rappresentare il mondo interiore e la realtà esterna.",
            immagine: "public/imgs/Vincent-Van-Gogh.jpg",
            tags: ["Arte", "Colore", "Solitudine", "Notte stellata"]
        }
    ];


    const resBacheca = {
        listPost: post,
        countPost: post.length
    }

    res.json(resBacheca);
});

/*
ho configurato gli asset statici sull’applicazione in modo che si possono visualizzare le immagini associate ad ogni post;
infatti in postman, all'interno del json, ci sono tutti i percorsi delle immagini e inserendo il percoso dell'immagine le visualizzo
*/


// metto il server in ascolto //
app.listen(port, () => {
    console.log("Server avviato");  
});

