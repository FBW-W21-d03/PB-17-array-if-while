// Gerade Zahlen -> 2, 4, 6, 8, 10, ...
// Ungerade Zahlen -> 1, 3, 5, 7, 9, ...

let geradeZahlen = []; // leeres Array für gerade Zahlen
let ungeradeZahlen = []; // leeres Array für ungerade Zahlen
let aktuelleZahl = 2; // Startzahl

// < 100 anstatt <= weil Index bei 0 losgeht
// "||" = Symbol für ODER
while (geradeZahlen.length < 100 || ungeradeZahlen.length < 100) {
  // Bei Division mit 2 gibt es keinen Rest, d.h. Zahl ist gerade
  if (aktuelleZahl % 2 == 0) {
    geradeZahlen.push(aktuelleZahl);
    // Wenn die Zahl nicht gerade ist, dann ist sie automatisch ungerade
  } else {
    ungeradeZahlen.push(aktuelleZahl);
  }
  // Aktuelle Zahl um 1 erhöhen und die Schleife von vorne beginnen
  aktuelleZahl++;
}

// AUSGABE
console.log("Gerades Array:", geradeZahlen);
console.log("Länge des geraden Arrays:", geradeZahlen.length);
console.log("--------------------"); // optischer Trenner
console.log("Ungerades Array:", ungeradeZahlen);
console.log("Länge des ungeraden Arrays:", ungeradeZahlen.length);
