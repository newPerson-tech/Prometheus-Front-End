const colorsArr =  ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const allSpans = document.getElementsByTagName('span');

for(let i=0; i< allSpans.length; i++){
    for(let j =0; j<colorsArr.length; j++){
        allSpans[i] = colorsArr[j];
    }
    return allSpans;
}



