window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    audio.autoplay();
  });

function computer() {
    Math.floor(Math.random() * (3 - 1 + 1)) + 1
    var radNum = Math.floor(Math.random() * 3) + 1
    if (radNum === 1) {
        document.getElementById('computerP').src = 'img/pedra1.png'
        document.getElementById('imgComputer').style.animation = 'slide-in-blurred-right3 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
        param2 = 'pedra'
    }else if (radNum === 2) {

        document.getElementById('computerP').src = 'img/papel.jpeg'
        document.getElementById('imgComputer').style.animation = 'slide-in-blurred-right2 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
        param2 = 'papel'
    }else if (radNum === 3) {


        document.getElementById('computerP').src = 'img/tesoura.jpeg'
        document.getElementById('imgComputer').style.animation = 'slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
        param2 = 'tesoura'
    }
resultado()

    }

    function choose(param) {

        if (param === 'pedra') {
            document.getElementById('imgPlayer').style.animation = null
            document.getElementById('imgP').src = 'img/pedra1.png'
            document.getElementById('imgPlayer').style.animation = 'slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
            computer()
        } else if (param === 'papel') {
            document.getElementById('imgP').src = 'img/papel.jpeg'
            document.getElementById('imgPlayer').style.animation = 'slide-in-blurred-left2 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
            computer()
        }
        else if (param === 'tesoura') {
            document.getElementById('imgP').src = 'img/tesoura.jpeg'
            document.getElementById('imgPlayer').style.animation = 'slide-in-blurred-left3 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both'
            computer()
        }
        resultado(param)


    }
    var placarP = 0
    var placarC = 0

function resultado(param){

    if(param == 'pedra'){

        if(param2 == 'tesoura'){
            document.getElementById('text').innerHTML = 'Player Ganhou!'
            placarP += 1
        }else if(param2 == 'papel'){
            document.getElementById('text').innerHTML = 'Computador Ganhou!'
            placarC += 1
        }else if(param2 == 'pedra'){
            document.getElementById('text').innerHTML = 'Empate'
        }
        scoreAndChange()
    }
else if(param == 'tesoura'){

    if(param2 == 'papel'){
        document.getElementById('text').innerHTML = 'Player Ganhou!'
        placarP += 1
    }else if(param2 == 'pedra'){
        document.getElementById('text').innerHTML = 'Computador Ganhou!'
        placarC += 1
    }else if(param2 == 'tesoura'){
        document.getElementById('text').innerHTML = 'Empate'
    }
    scoreAndChange()
}else if(param == 'papel'){

    if(param2 == 'pedra'){
        document.getElementById('text').innerHTML = 'Player Ganhou!'
        placarP += 1
        
    }else if(param2 == 'tesoura'){
        document.getElementById('text').innerHTML = 'Computador Ganhou!'
        placarC += 1
    }else if(param2 == 'papel'){
        document.getElementById('text').innerHTML = 'Empate'
    }
    scoreAndChange()
}
}

function scoreAndChange(){
    document.getElementById('score').innerHTML = placarP +"X"+placarC
}

