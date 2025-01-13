//21. Verifique se uma senha (string) tem pelo menos 8 caracteres e contém o caractere "@".

let Passworld = "Asadegalinha1";

/*for(let counter = 0; Passworld.length;counter++){

	if(Passworld.length >= 8 || Passworld[counter] === '@'){
		console.log(
			'Passworld permitida'
		);
		break;
	}
	else{
		console.log('nao permitida');
	}
}*/

if(Passworld.length >= 8 || Passworld === '@'){
		console.log(
			'Passworld permitida'
		);
		
	}
else{
		console.log('nao permitida');
}