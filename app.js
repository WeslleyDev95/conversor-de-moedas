
let valorDolar = document.getElementById("VDolar");
let valorEuro = document.getElementById("VEuro");
let valorLibra = document.getElementById("VLibra")

function converterDolar(){
   let valorConvertido = valorDolar.value / 5.65 
   alert(` O valor convertido é de ${valorConvertido.toFixed(2)} Dólar`)
}

function converterEuro(){
    let valorConvertido = valorEuro.value / 6.24
    alert(` O valor convertido é de ${valorConvertido.toFixed(2)} Euros`)
}

function converterLibra(){
    let valorConvertido = valorLibra.value / 7.40
    alert(` O valor convertido é de ${valorConvertido.toFixed(2)} Libras`)
}
