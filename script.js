function togglemode() {
  // pegando o html
  const html = document.documentElement
// trocar o fundo 
  html.classList.toggle('light')
//pegar a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
// se tiver light mode, adicionar a img
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
  // se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if(html.classList.contains('light')){
    img.setAttribute('alt', 'on gay')
  } else {
    img.setAttribute('alt', 'on viado')
  }
}
