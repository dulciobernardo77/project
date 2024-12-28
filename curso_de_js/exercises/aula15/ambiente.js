let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort();
console.log(num);
console.log(`O vator tem ${num.length} posicoes`);
console.log(`o primeiro valor do vetor e ${num[0]}`);
let pos = num.indexOf(10);
if (pos == -1) {
    console.log(`valor nao encontrado`);
} else {
    console.log(`O valor 8 esta na posicao ${pos}`);
}
