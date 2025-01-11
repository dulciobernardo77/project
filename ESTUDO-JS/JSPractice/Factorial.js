function Factorial(number){
	let f = 1;
	for(let counter = 1;counter <= number;counter++){
		f *=counter;
		console.log(`${number}! = ${f}`);
	}
}
Factorial(5);