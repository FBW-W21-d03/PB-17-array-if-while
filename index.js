
let grade = [];
let ungrade = [];
let ausgabe = 2;

/*
let i;
for (i = 0; i < 100; i++)
if ((i % 2) == 0)
console.log("grade"); 
*/


while ((grade.length<=100) && (ungrade.length<=100)) {

    grade.push(ausgabe);
    ungrade.push(ausgabe+1);
    ausgabe+=2;//ausgabe=ausgabe+2

    
};
console.log(grade,ungrade);
