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
console.log(primeiro,listadetarefas);

console.log(listadetarefas);
listadetarefas.splice(1,1);
console.log(listadetarefas);



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

*/
/**
 * Modificando Elementos:
 * Dado let frutas = ["maçã", "banana", "uva"];, 
 * substitua "banana" por "laranja".
 */
/*
let fruit = [
        "apple",
        "banana",
        "oragen"
];
*/