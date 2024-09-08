let num = [5, 8, 2, 9, 3]
num.push(7)
num.length //diz quantos elementos o array tem
num.sort() //organiza os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
//console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não existe!')
} else {
    console.log(`O valor está na posição ${pos}.`)
}

