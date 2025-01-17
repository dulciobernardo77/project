let number1 = 2;
let number2 = 4;
let calcular;
let sinal = '*';
switch(sinal){
	case '+':
		calcular = number1 + number2;	
		console.log(calcular);
		break;
	case '-':
                calcular = number1 - number2;
                console.log(calcular);
                break;
	case '*':
                calcular = number1 * number2;
                console.log(calcular);
                break;
	case '/':
                calcular = number1 / number2;
                console.log(calcular);
                break;
	default:
		console.log('sinal invalido')
}
