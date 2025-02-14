/*function numero_maior(array){
    if(array == null){
        console.log(`array invalido`);
    }else{
        let maior = array[0];
        for(numero = 0; numero <= array.length;numero++){
            if(array[numero] > maior){
                maior = array[numero];
            }
        }
        return maior;
    }
}
let numeros = [1,2,3,4,5,6,7,10];
console.log(numero_maior(numeros));

//Ordenar um array de números em ordem crescente.

let array1 = [5,1,6,9];

console.log(array1);
console.log(array1.sort());*/

//Criar uma função que retorna o número de vogais em uma string.


function numero_de_vogais(){
    let str = 'asa'
    let vogais = "aeiou";
    let total = 0;
    for(let counter = 0 ; counter < str.length;counter++){
        if(vogais.includes(str[counter])){
            total++;
        }
    }
    return total;
}
console.log(numero_de_vogais());
