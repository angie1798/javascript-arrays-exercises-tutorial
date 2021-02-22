let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(numbers){
    let vari= numbers;
    let odd=[];
    let even=[];
    let merge=[];
    for(let i=0; i<vari.length; i++){
        if(vari[i]%2==0){
            even.push(vari[i]);
        }
        else{
            odd.push(vari[i]);
        }
    }

    for(let i=0; i<odd.length;i++){
        merge.push(odd[i]);
    }
    for(let i=0; i<even.length;i++){
        merge.push(even[i]);
    }

    return merge;
}

console.log(mergeTwoList(list_of_numbers))
