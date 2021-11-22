const oddNumbers=[];
const evenNumbers=[];
let lastNumber =2;
while ((oddNumbers.length<=100)&&(evenNumbers.length<=100)){
    oddNumbers.push(lastNumber);
    evenNumbers.push(lastNumber+1);
    lastNumber+=2;
}
console.log(oddNumbers,evenNumbers);
