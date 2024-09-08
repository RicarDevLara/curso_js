function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //para pegar 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/bebe.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/menino.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else {
                // Idoso
                img.setAttribute('src', 'img/velho.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/bebe.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/menina.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/mulher.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            } else {
                // Idoso
                img.setAttribute('src', 'img/velha.jpg')
                img.style.width = '300px'
                img.style.height = '300px'
                img.style.borderRadius = '50%'
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}