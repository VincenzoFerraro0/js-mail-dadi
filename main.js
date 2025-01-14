/* 
Mail:
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/
/*
    MINI TASK
    -  Crea un array con le mail della lista degli invitati
    -  Chiedi all'utente di inserire la sua email con la funzione prompt
    -  Crea  una variabile per il controllo di accesso con valore booleano  false/o
    -  Utilizza un ciclo for per iterare attraverso l'array listaInvitati
    -
*/

// Lista delle email degli invitati
const listaInvitati = [
    "mario@example.com",
    "lucia@example.com",
    "giorgio@example.com",
    "anna@example.com",
    "paola@example.com"
];

// Chiediamo all'utente la sua email
let emailUtente = prompt("Inserisci la tua email:");

// Variabile di  verifica con valore 0
let accessoConcesso = false;

// Ciclo attraverso la lista di email
for (let i = 0; i < listaInvitati.length; i++) {
    // Se troviamo una corrispondenza
    if (listaInvitati[i] === emailUtente) {
        accessoConcesso = true;
        break; // Esci dal ciclo, non è necessario continuare
    }
};

// Messaggio appropriato in base al risultato
if (accessoConcesso) {
    alert("Accesso consentito! Benvenuto alla festa.");
} else {
    alert("Mi dispiace, non sei nella lista degli invitati.");
};














/*
Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :slightly_smiling_face
*/