


function reset() {
    bola.elemento
    
}


const tela ={
    comecoy :51 ,
    finaly : 551 ,

    comecox : 188 ,
    finalx : 1152
}

var bola ={
    elemento :document.getElementById("bola"),
    posicaoX:0,
    posicaoy:0


}

var player1 ={ 
    elemento :document.getElementById("jog1"),
    marginUp: 226,
    marginDown: 226,
}

var player2 ={ 
    elemento :document.getElementById("jog1"),
    marginUp: 226,
    marginDown: 226,
}






function bolinhandandO() {
    bola.elemento.style = ` 
    top: ${bola.posicaoy + tela.comecoy}px;
    bottom: auto;
    left: ${bola.posicaoX + tela.comecox}px;
    right: auto; `;

    bola.posicaoX++;
    bola.posicaoy++;
}


function freme() {
   // bolinhandandO()

}

setInterval(freme,37)

