function duplicados(array){
	if(array == null){
		return false;
	}
	else{
	const resultado = [];
	const visto = {};
	   for(let counter = 0;counter < array.length;counter++){
		if(!visto[array[counter]]){
			resultado[resultado.length] = array[counter];
			visto[array[counter]]=true;
		}	
	   }
	  return resultado;
	}

}
const numeros = [1,2,2,3,3,6,6,7,8,9,9];
console.log(duplicados(numeros));
