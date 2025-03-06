let array = [10,1,2,4,5];

let maior = "";
for(let counter = 0 ;counter < array.length;counter++){
    if(array[counter] > maior){
        maior = array[counter];
    }
}
console.log(maior);