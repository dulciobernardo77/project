function NumeroNegativos (number){
	let counter = 0;

	for(counter = 0 ;counter < number.length; counter++){
		
		if(number[counter]  < 0 ){
			console.log(number[counter]);
			//return number[counter];
		}
	}
}
const numeros =[1,-2,8,9,10,11,-20];
//console.log(NumeroNegativos(numeros));
NumeroNegativos(numeros);
