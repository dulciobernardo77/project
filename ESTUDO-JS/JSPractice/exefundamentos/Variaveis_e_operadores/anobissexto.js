//Determine se um ano é bissexto.

let ano = 2080;

if((ano % 100 !== 0 || ano % 400 === 0) && ano % 4 === 0 ){
	console.log('Ano e bissexto');
}
else{
	console.log('Ano nao  e bissexto');

}
