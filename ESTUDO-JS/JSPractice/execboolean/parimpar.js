//13. Crie uma função que receba um número e retorne true se for par e false se for ímpar.

function Parimpar(number){
    if(number % 2 === 0){
        return true;
    }
    return false;
}
console.log(
    Parimpar(2)
);
console.log(
    Parimpar(3)
);

function parimpar(numero){
    return numero % 2 === 0 ? true : false
}
console.log(
    parimpar(2)
);