//26. Escreva uma função que verifica se um número é primo.

function numeroPrimo(number){
	if(number < 2){
		console.log("Nao e primo");
		return;
	}
	for(let counter  = 2 ;counter * counter <= number;counter++){
		if( number % counter === 0){
			console.log("Nao e primo");
			return;
		}
	}
	console.log("E primo");
}
numeroPrimo(9);  
numeroPrimo(7);  
numeroPrimo(1);  
numeroPrimo(2);  
