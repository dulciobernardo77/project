//17. Escreva uma função que verifica se uma pessoa pode votar com base na idade (idade >= 18).

//operador ternario
let idade = 18;

let resposta = idade >= 18 ? "Você pode votar." : "Você ainda não pode votar.";

console.log(
    resposta
);

//ifelse

let idd = 17;

if(idd >= 18){
    console.log(
        `Com ${idd} anos você pode votar.`
    );
}else{
    console.log(
        `Com ${idd} você ainda não pode votar.`
    );
}