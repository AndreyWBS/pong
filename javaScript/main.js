
const tela = {
    elemento: document.getElementById("tela"),

    comecoy: 51,
    finaly: 551,

    comecox: 188,
    finalx: 1152,
    veloPlay: 10


}


var bola = {
    elemento: document.getElementById("bola"),
    posicaoX: 0,
    posicaoY: 0,

    velx: 5,
    vely: 5


}

var player1 = {
    elemento: document.getElementById("jog1"),
    marginUp: 210,
    marginDown: 210,

    paracima: false,
    parabaixo: false
}

var player2 = {
    elemento: document.getElementById("jog2"),
    marginUp: 210,
    marginDown: 210,

    paracima: false,
    parabaixo: false
}





function reset(teste) {
    bola.posicaoY = 250;
    bola.posicaoX = 482;
    tela.veloPlay = 10;

    gerador = Math.floor(Math.random() * 10)
    if (gerador < 5) {
        gerador = gerador+3
    }

    if (teste) {
        bola.velx = -gerador;
        bola.vely = -gerador;
    } else {
        bola.velx = gerador;
        bola.vely = gerador;
    }


    bola.elemento.style = ` 
    top: ${250 + tela.comecoy}px;
    bottom: auto;
    left : ${482 + tela.comecox}px;
    right: auto; `;

}

reset()



function bolinhandandO() {

    vrifTocou();

    bola.elemento.style = ` 
    top: ${bola.posicaoY + tela.comecoy}px;
    bottom: auto;
    left: ${bola.posicaoX + tela.comecox}px;
    right: auto; `;

    bola.posicaoY = bola.posicaoY + bola.vely

    bola.posicaoX = bola.posicaoX + bola.velx

}


function vrifTocou() {
    if (bola.posicaoY + tela.comecoy > tela.finaly) {
        //console.log("bateu em baixo")
        bola.vely = -bola.vely;


    }
    if (bola.posicaoY + tela.comecoy < tela.comecoy) {
        //console.log("bateu em cima")
        bola.vely = bola.vely * -1;

    }





    if (bola.posicaoX + tela.comecox > tela.finalx - 35 &
        bola.posicaoY < player2.marginUp + 100 &
        bola.posicaoY > player2.marginUp) {

        tela.veloPlay = tela.veloPlay + 2
        bola.velx = bola.velx + 5;
        bola.velx = -bola.velx;
    }


    if (bola.posicaoX + tela.comecox < tela.comecox + 35 &
        bola.posicaoY < player1.marginUp + 100 &
        bola.posicaoY > player1.marginUp) {

        tela.veloPlay = tela.veloPlay + 2
        bola.velx = bola.velx - 5;
        bola.velx = bola.velx * -1;

    }


    if (bola.posicaoX + tela.comecox > tela.finalx) {
        //console.log("bateu no lado direito")
        bola.velx = -bola.velx;
        reset(true)
        
    }
    if (bola.posicaoX + tela.comecox < tela.comecox) {
       
        bola.velx = bola.velx * -1;
        reset(false)
    }
}

function freme() {


    verificarjogador()
    bolinhandandO()

}

function comecar() {
    if (bola.posicaoX == 482) {
        setInterval(freme, 37)
    }


}

function verificarjogador() {
    if (player1.paracima & player1.marginUp > 0) {
        player1.marginUp = player1.marginUp - tela.veloPlay
        player1.marginDown = player1.marginDown + tela.veloPlay

        player1.elemento.style = `
            margin-top: ${player1.marginUp}px;
            margin-bottom:  ${player1.marginDown}px;
            `

    }

    if (player1.parabaixo & player1.marginDown > 0) {
        player1.marginUp = player1.marginUp + tela.veloPlay
        player1.marginDown = player1.marginDown - tela.veloPlay

        player1.elemento.style = `
            margin-top: ${player1.marginUp}px;
            margin-bottom:  ${player1.marginDown}px;
            `
    }



    if (player2.paracima & player2.marginUp > 0) {
        player2.marginUp = player2.marginUp - tela.veloPlay
        player2.marginDown = player2.marginDown + tela.veloPlay

        player2.elemento.style = `
            margin-top: ${player2.marginUp}px;
            margin-bottom:  ${player2.marginDown}px;
            `

    }

    if (player2.parabaixo & player2.marginDown > 0) {
        player2.marginUp = player2.marginUp + tela.veloPlay
        player2.marginDown = player2.marginDown - tela.veloPlay

        player2.elemento.style = `
            margin-top: ${player2.marginUp}px;
            margin-bottom:  ${player2.marginDown}px;
            `
    }

}






tela.elemento.addEventListener("keydown", function (evento) {
    if (evento.code == "KeyW") {
        player1.paracima = true
        player1.parabaixo = false

    }
    if (evento.code == "KeyS") {
        player1.paracima = false
        player1.parabaixo = true

    }

    if (evento.code == "ArrowUp") {
        player2.paracima = true
        player2.parabaixo = false

    }
    if (evento.code == "ArrowDown") {
        player2.paracima = false
        player2.parabaixo = true

    }

})


tela.elemento.addEventListener("keyup", function (evento) {
    if (evento.code == "KeyW") {
        player1.paracima = false
        player1.parabaixo = false

    }
    if (evento.code == "KeyS") {
        player1.paracima = false
        player1.parabaixo = false

    }

    if (evento.code == "ArrowUp") {
        player2.paracima = false
        player2.parabaixo = false

    }
    if (evento.code == "ArrowDown") {
        player2.paracima = false
        player2.parabaixo = false

    }
})

