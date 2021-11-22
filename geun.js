const ger=[];
const unger=[];
let varhilf=2;


while ((ger.length<=100) && (unger.length<=100)) {

    ger.push(varhilf);
    unger.push(varhilf+1);
    varhilf+=2;//varhilf=varhilf+2

    
};
console.log(ger,unger);