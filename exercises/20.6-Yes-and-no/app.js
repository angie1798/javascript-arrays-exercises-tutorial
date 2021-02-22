let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function loop(num){
    let numero = num;
        if(numero==1){
            return "wiki";
        }
        else{
            return "woko";
        }
    }
let newArray = theBools.map(loop);
console.log(newArray);