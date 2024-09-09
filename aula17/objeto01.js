let amigo = {
    nome:'José', 
    sexo:'M', 
    peso: 85.4, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
console.log('--------------------------')
amigo.engordar(10)
console.log(`${amigo.nome} engordou. Agora pesa ${amigo.peso}Kg.`)