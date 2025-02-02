//aula
const listadetarefas =[
        "Arrumar o cama",
        "correr ou caminha",
        "Eviar email",
        "Estudar"
]

//console.log(listadetarefas.length);
//console.log(listadetarefas.push("Formatarcomputador"));
//console.log(listadetarefas);

//const ultimo = listadetarefas.pop();
//console.log(ultimo,listadetarefas);

const primeiro = listadetarefas.shift();
//console.log(primeiro,listadetarefas);

//console.log(listadetarefas);
//listadetarefas.splice(1,1);
//console.log(listadetarefas);



const itens =[1,"computador",0.89];

/*console.log(
    typeof(itens)
);*/

//console.log(
//    Array.isArray(itens)
//);

const ordenar = ["c","a","d","b","e"];
//console.log(ordenar);
//console.log(ordenar.sort());
//console.log(ordenar.concat(['f','g','h','i']));
//console.log(ordenar.join(','));



/*
//Crie um array chamado numeros que contenha os números de 1 a 5.

let num =[1,2,3,4,5];

console.log(num);

/**Acessando Elementos:
Dado o array const cores = ["vermelho", "azul", "verde"];, exiba o segundo elemento no console. 

let color = [
    'Red',
    'Blue',
    'green'
]; 

console.log(color[2]);

//basic
*/
/**
 * Modificando Elementos:
 * Dado let frutas = ["maçã", "banana", "uva"];, 
 * substitua "banana" por "laranja".
 */

let fruit = [
        "apple",
        "banana",
        "uva"
];
//console.log(fruit);
//console.log(
//        fruit.splice(1,1),
//        fruit.splice(1,0, "laranja")
//);
//console.log(fruit);
//fruit.push("morango");
//fruit.shift();
//console.log(fruit);

//Intermediário (6-15)

//  Percorrendo um Array:
//    Use um loop for para exibir cada elemento do array [10, 20, 30, 40, 50] no console.

let num = [10, 20, 30, 40, 50];

//for(let counter = 0;counter <= num.length;counter++){
//      console.log(num[counter]);
//};

//Crie um array de números e filtre apenas os maiores que 10.

/*let numarray =[1,2,3,4,5,20,48];

let double = numarray.map(function(doub){
        return doub*2;
})

console.log(double);


//

let number =[1,2,3,4,5];

let str = number.map(function(string){
    return string.toString();
});
console.log(str);*/

///const nomes = ["Carlos", "Ana", "Pedro"];
// Saída esperada: ["Sr./Sra. Carlos", "Sr./Sra. Ana", "Sr./Sra. Pedro"]


//const nomes = ["Carlo", "Ana", "pedro"];

//const nomeprex = nomes.map(function(nome){
//    return `Sr./Sra. ${nome}`
//});

//console.log(nomeprex);

//const palavras = ["olá", "mundo", "javascript"];
// Saída esperada: ["OLÁ", "MUNDO", "JAVASCRIPT"]

//const palavras = ["ola","mundo","javascript"];

//const PALAVRAS = palavras.map(function(string){
//  return string.toUpperCase();
//});

//console.log(PALAVRAS);


//const nomes = ["Alice", "Bruno", "Camila"];
// Saída esperada: [{ nome: "Alice" }, { nome: "Bruno" }, { nome: "Camila" }]

//const nomes = ["Alice","Bruno","Camila"];

//const objtes =nomes.map(function(subnome){
//        return `{ nome: "${subnome}" }`;
//});

//console.log(objtes);

//const numeros = [3, 4, 5];
// Saída esperada: [9, 16, 25]

///const numeros = [3, 4, 5];

//console.log(numeros);
//const auquadrado = numeros.map(function(elevado){
 //       return elevado**2;
//});

//console.log(auquadrado);


//const precos = [5, 12.5, 30, 99.99];
// Saída esperada: ["R$ 5.00", "R$ 12.50", "R$ 30.00", "R$ 99.99"]

const precos = [5,12.5,30,99.99];

const decimal = precos.map(function(float){
        return `R$ ${float.toFixed(2)}`;
});

console.log(decimal)