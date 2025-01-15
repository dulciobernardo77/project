//23. Combine operadores lógicos para verificar se um número está entre 50 e 100, mas não é divisível por 10.

let number = 55;

if((number >= 50 && number <= 100) || number % 10 !== 0){
	console.log('esta no intervalo');
}
else{
	console.log('nao esta no intervalo');
}
