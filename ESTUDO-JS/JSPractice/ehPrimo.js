/*Funcao*/  
function ehprimo(number){
    if(number < 2){
        return false;
    }
    for(let counter = 0;counter * counter <= number;counter++){
        if(number === 0){
            return false;
        }
    }
    return true;
}
console.log(ehprimo(7));



/*Sem funcao*/
let  number = 5;
let counter = 0;

for(counter = 0 ; counter * counter <= number; counter++){
    if(number === 0){
        console.log(`O ${number} nao e primo`);
    }
    else{
        console.log(`O ${number} e primo`);
        break;
    }
}
