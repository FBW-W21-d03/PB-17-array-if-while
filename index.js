let geradeZahlen =[];
let unGeradeZahlen =[];
let nummer = 2;

while ((geradeZahlen.length<=100) && (unGeradeZahlen.length<=100)) {
    geradeZahlen.push(nummer);
    unGeradeZahlen.push(nummer+1);
    nummer+=2;
}
console.log(geradeZahlen,unGeradeZahlen);

