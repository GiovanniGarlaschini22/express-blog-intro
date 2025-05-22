// importo il server dell'express //
import express from "express";

// invoco la funzione express //
const app = express();

// creo la porta di accesso //
const port = 3000;

// rendo accessibile la cartella immagini //
app.use(express.static("public"));

// metto il server in ascolto //
app.listen(port, () => {
    console.log("server in ascolto");  
});