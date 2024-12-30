function calculadora() {
    let alt = window.document.querySelector('input#txta');
    let pe = window.document.querySelector('input#txtp');
    let resposta = window.document.querySelector('p#res');
    if (alt.value.length == 0 || pe.value.length == 0) {
        alert('[ERROR] Prencha os campos vazios');
    } else {
        let altura = Number(alt.value) / 100;
        let peso = Number(pe.value);
        let imc = peso / altura ** 2;

        if (imc < 18.5) {
            resposta.innerHTML = 'Magreza';
            resposta.style.color = '#fcbd16';
            resposta.style.fontSize = '20px';
            resposta.style.fontWeight = 'bolder';
        } else if (imc >= 18.5 && imc < 25) {
            resposta.innerHTML = 'Normal';
            resposta.style.color = '#80bf66';
            resposta.style.fontSize = '20px';
            resposta.style.fontWeight = 'bolder';
        } else if (imc >= 25 && imc < 30) {
            resposta.innerHTML = 'Sobrepeso I';
            resposta.style.color = '#f18815';
            resposta.style.fontSize = '20px';
            resposta.style.fontWeight = 'bolder';
        } else if (imc >= 30 && imc < 40) {
            resposta.innerHTML = 'Obesidade II';
            resposta.style.color = '#b21d17';
            resposta.style.fontSize = '20px';
            resposta.style.fontWeight = 'bolder';
        } else if (imc >= 40) {
            resposta.innerHTML = 'Obesidade Grave III';
            resposta.style.color = '#801711';
            resposta.style.fontSize = '20px';
            resposta.style.fontWeight = 'bolder';
        }
    }
}
