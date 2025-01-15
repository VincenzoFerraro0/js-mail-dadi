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
    -  Crea una condizione all'interno del ciclo che controlla se la mail dell'utente è presente nella listaInvitati = listaInvitati[i] === emailUtente
    -  Se si verifica la variabile "accessoConcesso" passa da false a true
    -  interrompi il ciclo
    - Crea una condizione fuori dal ciclo che verifica la variabile accessoConcesso 
        se è vera stampa: Accesso consentito! Benvenuto alla festa.
            altrimenti stampa: Mi dispiace, non sei nella lista degli invitati.
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
let emailUtente = prompt("Inserisci la tua email:", "paola@example.com");

// Variabile di  verifica con valore 0
let accessoConcesso = false;

// Ciclo attraverso la lista di email
for (let i = 0; i < listaInvitati.length && !accessoConcesso; i++) { //i < 3 (true) && !accessoConcesso=(true)
    // Se troviamo una corrispondenza
    if (emailUtente ===  listaInvitati[i]) {
        accessoConcesso = true
    }
}

// Messaggio appropriato in base al risultato
if (accessoConcesso) {
    alert("Accesso consentito! Benvenuto alla festa.")
} else {
    alert("Mi dispiace, non sei nella lista degli invitati.")
}


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

/*
    MINI TASK
    1. Generare un numero casuale da 1 a 6 per il giocatore e per il computer
    Utilizziamo Math.random() per ottenere un numero casuale
    
    2. Confrontare i due numeri per determinare il vincitore
    Se il numero del giocatore è maggiore, il giocatore vince
    Se il numero del computer è maggiore, il computer vince
    Se i numeri sono uguali, è un pareggio
*/

// Genera un numero casuale per il giocatore
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale per il computer
let numeroComputer = Math.floor(Math.random() * 6) + 1;

console.log(numeroGiocatore, numeroComputer)

if (numeroGiocatore > numeroComputer) {
    console.log(`Il giocatore ha vinto! Giocatore: ${numeroGiocatore}, Computer: ${numeroComputer}`);
} else if (numeroGiocatore < numeroComputer) {
    console.log(`Il computer ha vinto! Giocatore: ${numeroGiocatore}, Computer: ${numeroComputer}`);
} else {
    console.log(`Pareggio! Giocatore: ${numeroGiocatore}, Computer: ${numeroComputer}`);
}

