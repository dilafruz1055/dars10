let son1 = Number(prompt("Son kiriting: "));
let son2 = Number(prompt("2 - sonni kiriting: "));

function kattami() {
    if(son1 > son2){
        alert(son1 + " katta");
    } else {
        alert(son2 + " katta");
    }
}

kattami();