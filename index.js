const geradeZahlen = [];
const ungeradeZahlen= [];
let i = 2;


while ((geradeZahlen.length <= 100) && (ungeradeZahlen.length <= 100)) {
    geradeZahlen.push(i);
    ungeradeZahlen.push(i + 1);
     i +=2; 
    
    
 
}
console.log(geradeZahlen ,ungeradeZahlen)
