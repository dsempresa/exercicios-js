function calculaarea() {
    let base = document.querySelector('#baset')
    let altura = document.querySelector('#alturat')
    let res = document.querySelector('#resultado')
    let basenum = Number(base.value)
    let alturanum = Number(altura.value)
    area = (basenum * alturanum) / 2
    res.innerHTML = `A área do triângulo é ${area}!`
}