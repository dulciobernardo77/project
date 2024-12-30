let nomes = ['Dulcio', 'Netilson', 'Lisboa', 'Bernardo'];
/*let i = 0;

while (i < a.length) {
    console.log(a[i]);
    i++;
}*/

for (let i in nomes) {
    console.log(nomes[i]);
}
//const frutas = ['maçã', 'banana', 'laranja'];

for (let nome of nomes) {
    console.log(`O nome é: ${nome}`);
}
