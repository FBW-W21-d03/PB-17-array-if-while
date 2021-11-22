let geradeZahlen = []; // leeres Array für gerade Zahlen (also 2, 4, 6, ...)
let ungeradeZahlen = []; // leeres Array für ungerade Zahlen (also 3, 5, 7, ...)
let aktuelleZahl = 2; // Startzahl

// < 100 anstatt <= weil Index bei 0 losgeht, "||" = Symbol für ODER
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

console.log(
  "Gerades Array:",
  geradeZahlen,
  "\nLänge des geraden Arrays:", // "\n" Sonderzeichen für neue Zeile
  geradeZahlen.length
);
console.log("--------------------"); // optischer Trenner
console.log(
  "Ungerades Array:",
  ungeradeZahlen,
  "\nLänge des ungeraden Arrays:",
  ungeradeZahlen.length
);
