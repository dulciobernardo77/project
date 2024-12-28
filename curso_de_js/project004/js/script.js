function Tabuada() {
    let txtn = window.document.querySelector('input#txtn');
    let seltab = window.document.getElementById('seltab');
    if (txtn.value.length == 0) {
        window.alert('por favor, digite um numero!');
    } else {
        let numero = Number(txtn.value);
        let i = 1;
        const selectTabuada = document.getElementById('seltab');
        seltab.innerHTML = '';
        while (i <= 10) {
            let option = document.createElement('option');
            option.text = `Tabuada do ${i} x ${numero} = ${i * numero}`;
            option.value = `seltab${i}`;
            seltab.appendChild(option);
            i++;
        }
    }
}
