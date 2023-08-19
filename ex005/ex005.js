//C = 2 * π * r calcular o perímetro
//(A = π r²) calcular a area
//Raio é sempre a metade do diâmetro
//Diâmentro é o tamanho da linha que cruza o círculo de uma ponta a outra


function calculando() {
    let raio = document.querySelector('#raiocirculo')
    let resultado = document.querySelector('#res')
    let raionum = Number(raio.value)
    let perimetro = 2 * 3.14 * raionum
    let area = 3.14 * (raionum ** 2)
    resultado.innerHTML = `A área do círculo será ${area} e o perímetro será ${perimetro}!`
}