

/*
ein array mit 200 zahlen, austeigend egal ub grade oder ungrade
*/

const array1 = [];
let counter = 1;
while( counter <= 203 ) {
    array1.push(counter);
    counter = counter + 2;
}
console.log(array1);

const array2 = [];
counter = 2;
while( counter <= 203 ) {
    array2.push(counter);
    counter = counter + 2;
}
console.log(array2);
