

let key = "e10b679863656c37ee97276726f6cd05"

function colocarDadosNaTela(dados){
    console.log(dados)
  document.querySelector(".cidade").innerHTML="tempo em" + dados.name
  document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) +  "°C"
  document.querySelector(".texto-previão").innerHTML = dados.weater[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src = 'https://openweathermap.org/img/wn/$(dados.weather[0]).icon.png'
}

async function buscarCidade(cidade){

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").valor

    buscarCidade(cidade)
}




