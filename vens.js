
const gerade = [];
const ungerade = [];

let hilfe = 2;

while ((gerade.length <= 100) && (ungerade.length <= 100)) {
      
      gerade.push(hilfe);
      ungerade.push(hilfe + 1);
      hilfe += 2;
if((gerade.length == 100) && (ungerade.length == 100)){
    console.log(gerade, ungerade);
}
    }


