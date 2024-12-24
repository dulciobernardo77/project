function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados  e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade > 0 && idade <= 10) {
                //KIDS
                img.setAttribute('src', 'img/4anosmen.png');
            } else if (idade < 21) {
                //YOUNG
                img.setAttribute('src', 'img/19men.png');
            } else if (idade < 50) {
                //ADULT
                img.setAttribute('src', 'img/44men.png');
            } else {
                //OLD
                img.setAttribute('src', 'img/60men.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade > 0 && idade <= 10) {
                //KIDS
                img.setAttribute('src', 'img/4anos.png');
            } else if (idade < 21) {
                //YOUNG
                img.setAttribute('src', 'img/19woman.png');
            } else if (idade < 50) {
                //ADULT
                img.setAttribute('src', 'img/44woman.png');
            } else {
                //OLD
                img.setAttribute('src', 'img/60woman.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
