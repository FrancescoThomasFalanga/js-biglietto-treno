/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
seguendo delle determinate regole.
*/

/*
x Chiedi all'utente il numero di chilometri che vuole percorrere e memorizzali
x Chiedi all'utente l'età del passeggero e memorizzala
x Il prezzo del biglietto è definito in base ai km (0.21 $ al km)
? SE il passeggero è minorenne
    applica uno sconto del 20%
:? ALTRIMENTI SE il passeggero ha un'età compresa tra i 18 e i 64 anni
    non applicare nessuno sconto
: ALTRIMENTI applica uno sconto del 40%
*/

let totaleKm = prompt("Quanti chilometri vuoi percorrere?");
let etàUtente = prompt("Qual è l'età del passeggero?");
let totaleEuro = (totaleKm * 0.21).toFixed(2);


if(etàUtente < 18) {

    document.writeln(`Hai scelto di percorrere ${totaleKm} km.
    Il passeggero risulta essere minorenne avendo ${etàUtente} anni.
    Quindi il subtotale da pagare sarebbe di ${totaleEuro} euro.
    Ma applicando lo sconto del 20% il totale sarà di ${(totaleEuro - ((totaleEuro * 20) / 100)).toFixed(2)} euro.`);

} else if(etàUtente >= 18 && etàUtente <= 64) {

    document.writeln(`Hai scelto di percorrere ${totaleKm} km.
    Il passeggero risulta avere un'età compresa fra i 18 e i 64 anni, avendo ${etàUtente} anni.
    Quindi il totale da pagare è di ${totaleEuro} euro.`);

} else {

    document.writeln(`Hai scelto di percorrere ${totaleKm} km.
    Il passeggero risulta essere Over 65 avendo ${etàUtente} anni.
    Quindi il subtotale da pagare sarebbe di ${totaleEuro} euro.
    Ma applicando lo sconto del 40% il totale sarà di ${(totaleEuro - ((totaleEuro * 40) / 100)).toFixed(2)} euro.`);

}