function download(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`
    if (hora >= 6 && hora < 12){
        //manhã
        img.src = 'Img/IMG_20241220_164431.png ';
        document.body.style.background = '#e2cd9f'
   
    }
    else if(hora >=12 && hora <18){
        //tarde
        img.src = 'Img/Tarde.png';
        document.body.style.background = '#b9846f'
    }
    else{
        //noite madrugada 
          img.src = 'Img/Noite.png';
          document.body.style.background = '#515156'
   
    } 
}
