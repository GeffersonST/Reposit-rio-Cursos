function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {img.src ='manhã1.png' 
document.body.style.background = '#ee9d5f'}

else if (hora >= 12 && hora < 18) {

  img.src ='tarde1.png'
  document.body.style.background = '#024b55'
}
else {

  img.src ='noite1.png'
  document.body.style.background = '#495279'
}







}
