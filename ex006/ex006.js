function inverter() {
    let n = document.querySelector('#num')
    let resposta = document.querySelector('#res')
    let numero = Number(n.value)
    let numinv = numero.split("").reverse().join("")
    
    resposta.innerHTML += numinv
    
}

   
