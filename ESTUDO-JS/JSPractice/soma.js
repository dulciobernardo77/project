//7. Verifique se a soma de 5 + 5 é maior que 10.

let n1 = 5;
let n2 = 5;

let soma = n1 + n2;

console.log(soma > 10);


//8. Teste se "" (string vazia) é um valor "falsy".

let str = "";
console.log(Boolean(str));


//10. Teste se NaN é igual a ele mesmo.

console.log(
    NaN === NaN
);

//9. Crie uma expressão que verifica se um número está entre 10 e 20 (inclusive).

let number = 16;

if(number >= 10 && number <= 20){

    console.log('O valor está dentro do intervalo permitido.');


}else{
    console.log('O valor fornecido não está entre 10 e 20.');
}