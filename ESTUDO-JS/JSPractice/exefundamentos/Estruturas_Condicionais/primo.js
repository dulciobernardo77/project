function ehprimo(number){
	if(number < 2){
		console.log('Nao e primo');
		return;
	}
	for(let counter = 2 ;counter * counter <= number;counter++){
		if(number % counter === 0){
			console.log('Nao e primo');
			return;
		}
	}
	console.log('primo');
}
ehprimo(2);
ehprimo(10);
ehprimo(9);
ehprimo(6);
ehprimo(5);

