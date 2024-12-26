function Contador() {
    var txti = window.document.querySelector('input#txti');
    var txtf = window.document.querySelector('input#txtf');
    var txtp = window.document.querySelector('input#txtp');
    var res = window.document.querySelector('div#res');

    if (
        txti.value.length == 0 ||
        txtf.value.length == 0 ||
        txtp.value.length == 0
    ) {
        window.alert('[ERRO] Por favor, preencha os campos.');
    } else {
        var i = Number(txti.value);
        var f = Number(txtf.value);
        var pa = Number(txtp.value);
        if (pa == 0) {
            window.alert('[ERRO] Passo inválido! Considerando passo 1.');
            pa = 1;
        }
        res.innerHTML = 'Contando:<br>';
        var pelem = document.createElement('p');
        pelem.setAttribute('id', 'contar');

        if (i <= f) {
            while (i <= f) {
                pelem.innerHTML += `${i} \u{1F449} `;
                i += pa;
            }
        } else {
            while (i >= f) {
                pelem.innerHTML += `${i} \u{1F449} `;
                i -= pa;
            }
        }
        pelem.innerHTML += '\u{1F3C1}';
        res.appendChild(pelem);
    }
}
