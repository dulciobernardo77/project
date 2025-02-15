/*const num = 3;

if(null == 0){
    console.log(`O numero ${num} nao e primo`);
}else{
    for(let counter = 2; counter * counter <= num ; counter++){
            if(num % 2 === 0){
                console.log(`O numero ${num} nao e primo`);
                break
            }
    }
    console.log(`O numero ${num}  e primo`);
}


function numero_negativos(){
        const array_negativo = [-1,-2,0,1,2,3,4,-100,-2,-3,-737];

        for(let negativo = 0;negativo <= array_negativo.length;negativo++){
                if(array_negativo[negativo] < 0){
                    console.log(array_negativo[negativo]);
                }
        }
}

console.log(numero_negativos());


let nume = 5;
let fatorial = 1;

for(let counter = 1;counter <= nume; counter++){
    fatorial *= counter;
    console.log(`${counter}! = ${fatorial}`);
}


//cria uma funcao que inverte o valor de um array

function invert_array(array){
    if(array == null){
        console.log(`array invalido`);
    }else{
        for(let counter = array.length; counter >= 0;counter--){
                console.log(array[counter]);
        }
    }
}
let numero = [1,2,3,4,5,6,7];
invert_array(numero);
*/

function reverse(s) {
    // Write code here
   // let counter = s.length;
    //while(counter < 0){
      //  consle.log(s[counter]);
        //counter--;
    //}
    let reserva = '';
    for(let counter = s.length -1; counter > 0;counter--){
            reserva += s[counter];
    }
    return reserva;
}
console.log(reverse('Hello'));