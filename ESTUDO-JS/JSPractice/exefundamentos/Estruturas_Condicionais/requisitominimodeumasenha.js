//requsitos minimo de uma senha
//Comprimento Mínimo:
//Pelo menos 8 caracteres.
//Recomendado: 12 ou mais caracteres.
//Complexidade:
//Deve incluir caracteres de diferentes categorias, como:
//Letras maiúsculas (A-Z).
//Letras minúsculas (a-z).
//Números (0-9).
//Caracteres especiais (!@#$%^&*() e similares)

let senha = 'Asdfghjklasadegalinha1@'

if(senha.match(/[!@#$%^&*]/) && senha.match(/[a-zA-Z]/) && senha.length >= 8){
	console.log('passworld compri com os requisitos');
}
else{
	console.log('Nao compri com os requisitos minimo');
}
