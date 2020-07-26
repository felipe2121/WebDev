var altura, largura, posicaoX, posicaoY
var vidas = 1
var tempo = 15

var criaMoscaTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
	criaMoscaTempo = 2000
}else if(nivel === 'normal') {
	criaMoscaTempo = 1000
} else if(nivel === 'dificil') {
	criaMoscaTempo = 500
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0 ) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

	document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function posicaoRandomica(){

	//remover mosca anterior, caso exista
	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}

	posicaoX = Math.floor(Math.random() * largura) - 90
	posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//cirar o elemento html
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamannhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'

	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca)
}

function tamannhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}