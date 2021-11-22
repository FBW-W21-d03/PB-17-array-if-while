var geradeZahlen = [];
const ungeradeZahlen = [];
let aktuelleZahl = 2; // geht das auch mit const? Nein!

while (geradeZahlen.length < 100 || ungeradeZahlen.length < 100) {
  if (aktuelleZahl % 2 == 0) {
    // % - (ganzzahliger) Rest einer Division
    // 3 % 2 = 1
    // 4 % 2 = 0
    // 5 % 2 = 1
    // 6 % 2 = 0
    geradeZahlen.push(aktuelleZahl);
  } else {
    ungeradeZahlen.push(aktuelleZahl);
  }
  aktuelleZahl++;
}

console.log("Array von geraden Zahlen:", geradeZahlen);
console.log("Länge von geraden Zahlen:", geradeZahlen.length);
console.log("---------");
console.log("Array von ungeraden Zahlen:", ungeradeZahlen);
console.log("Länge von ungeraden Zahlen:", ungeradeZahlen.length);
