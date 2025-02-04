function numero_maior(array){
    if(array == null){
        console.log(`array invalido`);
    }else{
        let menor = array[0]
        let maior = array[0];
        for(numero = 0; numero <= array.length;numero++){
            if(array[numero] > maior){
                maior = array[numero];
            }
        }
        return maior;
    }
}
let numeros = [1,2,3,4,5,6,7];
console.log(numero_maior(numeros));
