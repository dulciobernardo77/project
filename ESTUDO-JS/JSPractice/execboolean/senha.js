//21. Verifique se uma senha (string) tem pelo menos 8 caracteres e contém o caractere "@".

let Passworld = "Asadegalinha1@";



	if(Passworld.length >= 8 && Passworld.match(/@/)){
		console.log(
			'Passworld permitida'
		);
		
	}
	else{
		console.log('nao permitida');
	}

