var vel = 59
var limite = 60
console.log(`A velocidade do seu carro é ${vel}km/h.`)
if (vel >= limite){
    var multa = vel - limite
    console.log(`Você ultrapassou a velocidade permitida em ${multa}km/h. MULTADO!`)
}
console.log(`Diriga sempre usando cinto de segurança!`)