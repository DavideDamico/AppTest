# Parole Chiave Tipizzate di SQL

## Parole Chiave di Manipolazione dei Dati (DML - Data Manipulation Language)

- **SELECT**: Recupera dati da una tabella.
- **INSERT**: Aggiunge nuovi dati a una tabella.
- **UPDATE**: Modifica dati esistenti in una tabella.
- **DELETE**: Rimuove dati da una tabella.

## Parole Chiave di Definizione dei Dati (DDL - Data Definition Language)

- **CREATE**: Crea oggetti nel database, come tabelle, indici, viste, ecc.
- **ALTER**: Modifica la struttura di oggetti esistenti nel database.
- **DROP**: Elimina oggetti dal database.
- **TRUNCATE**: Rimuove tutti i record da una tabella, resettando contatori di identità.

## Parole Chiave di Controllo dei Dati (DCL - Data Control Language)

- **GRANT**: Concede permessi agli utenti.
- **REVOKE**: Revoca permessi agli utenti.

## Parole Chiave di Controllo delle Transazioni (TCL - Transaction Control Language)

- **COMMIT**: Conferma una transazione.
- **ROLLBACK**: Annulla una transazione.
- **SAVEPOINT**: Imposta un punto di salvataggio all'interno di una transazione.
- **SET TRANSACTION**: Imposta le caratteristiche della transazione.

## Parole Chiave per la Creazione e Gestione delle Tabelle

- **PRIMARY KEY**: Definisce una chiave primaria per una tabella.
- **FOREIGN KEY**: Definisce una chiave esterna che fa riferimento a una chiave primaria in un'altra tabella.
- **UNIQUE**: Garantisce che tutti i valori in una colonna siano unici.
- **NOT NULL**: Garantisce che una colonna non possa contenere valori nulli.
- **DEFAULT**: Imposta un valore predefinito per una colonna.
- **SERIAL**: Definisce una colonna come auto-incrementante, assegnando automaticamente valori univoci crescenti a ogni nuova riga inserita (utilizzata in PostgreSQL).
- **VARCHAR**: Definisce una colonna per stringhe di lunghezza variabile fino a un massimo specificato di caratteri.

## Parole Chiave di Gestione degli Indici

- **CREATE INDEX**: Crea un indice su una tabella.
- **DROP INDEX**: Elimina un indice da una tabella.

## Parole Chiave per le Viste

- **CREATE VIEW**: Crea una vista.
- **DROP VIEW**: Elimina una vista.

## Parole Chiave per le Funzioni e Procedure

- **CREATE FUNCTION**: Crea una funzione.
- **CREATE PROCEDURE**: Crea una procedura memorizzata.
- **EXECUTE**: Esegue una funzione o procedura memorizzata.

## Parole Chiave di Controllo del Flusso

- **IF**: Esegue un'istruzione condizionale.
- **ELSE**: Specifica un'alternativa in un'istruzione condizionale.
- **CASE**: Esegue un'istruzione condizionale multipla.

## Parole Chiave di Gestione degli Utenti e Sicurezza

- **CREATE USER**: Crea un nuovo utente del database.
- **DROP USER**: Elimina un utente del database.
- **ALTER USER**: Modifica le proprietà di un utente.

## Parole Chiave di Funzioni di Aggregazione

- **COUNT**: Restituisce il numero di righe in un set di risultati.
- **SUM**: Restituisce la somma dei valori in una colonna numerica.
- **AVG**: Restituisce la media dei valori in una colonna numerica.
- **MIN**: Restituisce il valore minimo in una colonna.
- **MAX**: Restituisce il valore massimo in una colonna.

## Parole Chiave per la Gestione delle Query

- **JOIN**: Combina righe da due o più tabelle basate su una condizione correlata.
- **INNER JOIN**: Restituisce righe quando c'è una corrispondenza in entrambe le tabelle.
- **LEFT JOIN (o LEFT OUTER JOIN)**: Restituisce tutte le righe dalla tabella di sinistra, con le corrispondenze della tabella di destra.
- **RIGHT JOIN (o RIGHT OUTER JOIN)**: Restituisce tutte le righe dalla tabella di destra, con le corrispondenze della tabella di sinistra.
- **FULL JOIN (o FULL OUTER JOIN)**: Restituisce righe quando c'è una corrispondenza in una delle tabelle.
- **UNION**: Combina i risultati di due query selezionando solo i valori distinti.
- **UNION ALL**: Combina i risultati di due query selezionando tutti i valori, compresi i duplicati.

## Altre Parole Chiave Utili

- **DISTINCT**: Seleziona solo valori distinti.
- **GROUP BY**: Raggruppa i risultati in base a una o più colonne.
- **ORDER BY**: Ordina i risultati in base a una o più colonne.
- **HAVING**: Filtra i gruppi di risultati.
- **LIMIT**: Limita il numero di righe restituite.
- **OFFSET**: Specifica il punto di partenza delle righe restituite.
- **AS**: Assegna un alias a una tabella o una colonna.
- **LIKE**: Utilizzato con WHERE per cercare un modello specifico.
- **IN**: Specifica più valori in una condizione WHERE.
- **BETWEEN**: Filtra i risultati entro un intervallo specificato.
- **EXISTS**: Verifica l'esistenza di righe in una subquery.
