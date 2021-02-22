var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var newArr = [];
    for(let i=0; i<people.length;i++){
       if(people[i]!=personName){
           newArr.push(people[i]);
       }
    }
    return newArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));