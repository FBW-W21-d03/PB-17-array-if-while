let geradeZahlen = []; // leeres Array
let ungeradeZahlen = []; // leeres Array
let aktuelleZahl = 2; // geht das auch mit const? Nein!

// "||" das Zeichen für ODER. Wir benutzen ODER damit *beide* Arrays
// am Ende 100 Elemente haben.
// Auf Tastatur: "ALT GR" + "<"
while (geradeZahlen.length < 100 || ungeradeZahlen.length < 100) {
  if (aktuelleZahl % 2 == 0) {
    // % - (ganzzahliger) Rest einer Division
    // 2 % 2 = 0 -> gerade / even
    // 3 % 2 = 1 -> ungerade / odd
    // 4 % 2 = 0 -> gerade / even
    // 5 % 2 = 1 -> ungerade / odd
    // 6 % 2 = 1 -> gerade / even
    geradeZahlen.push(aktuelleZahl);
    // fügt aktuelleZahl dem Array geradeZahlen hinzu
  } else {
    // Andernfalls fügt aktuelleZahl dem Array ungeradeZahlen hinzu
    ungeradeZahlen.push(aktuelleZahl);
  }
  aktuelleZahl++; // entspricht aktuelleZahl = aktuelleZahl + 1;
}

console.log("Array von geraden Zahlen:", geradeZahlen);
console.log("Länge von geraden Zahlen:", geradeZahlen.length);
console.log("---------");
console.log("Array von ungeraden Zahlen:", ungeradeZahlen);
console.log("Länge von ungeraden Zahlen:", ungeradeZahlen.length);
