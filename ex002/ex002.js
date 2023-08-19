function calcular() {
    let cx1 = document.querySelector('#num1')
    let resultado = document.querySelector('#res')
    let num = Number(cx1.value)
    let cubo = num ** 3 
    resultado.innerHTML = `O cubo do número ${num} é <strong>${cubo}!</strong>`
}