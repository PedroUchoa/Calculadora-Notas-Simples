function adicionandonumeros(){
    let numeroUm = Number(document.querySelector(".notaUm").value)
    let numeroDois = Number(document.querySelector(".notaDois").value)
    verificandoValores(numeroUm, numeroDois)
}
function adicionandoNaTela(media){
    const lista = document.querySelector(".lista")
    const itemLista = document.createElement("li")
    itemLista.className = "item-lista"
    const button = document.createElement("button")
    button.innerHTML = "Apagar"
    button.className = "button-new"
    lista.appendChild(itemLista)
    style(button, lista, media, itemLista)
}

function style(button, lista, media, itemLista){
    button.addEventListener("click", () => {
        lista.removeChild(itemLista)
    })
    if (media >= 8 && media <= 10) {
        itemLista.style.backgroundColor = "green"
    } else if (media >= 5 && media < 8) {
        itemLista.style.backgroundColor = "orange"
    } else {
        itemLista.style.backgroundColor = "red"
    }
    itemLista.innerHTML = (`A media das duas notas é: ${media}`)
    button.innerHTML = "Apagar"
    itemLista.appendChild(button)
}

const verificandoValores = (numeroUm, numeroDois) => {
    if(numeroUm <=10 && numeroDois <=10){
        let media = ((numeroUm + numeroDois) / 2)
        adicionandoNaTela(media)
    }else{
        alert("Notas Invalidas")
    }
}