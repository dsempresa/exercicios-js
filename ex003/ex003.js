function converter() {
    let fah = document.querySelector('#tempfah')
    let resultado = document.querySelector('#res')
    let num = Number(fah.value)
    let cels = (num - 32) * 5 / 9
    resultado.innerHTML = `A temperatura de ${num}°F, convertida em Celsius passará a ser ${cels}°C.`
}