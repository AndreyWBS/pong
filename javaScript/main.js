
const tela ={
    comecoy :51 ,
    finaly : 551 ,

    comecox : 188 ,
    finalx : 1152,
    dif : 3
}

var bola ={
    elemento :document.getElementById("bola"),
    posicaoX:0,
    posicaoY:0,


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

function reset() {
    bola.posicaoY = 250;
    bola.posicaoX = 482;
    tela.dif = 1

    bola.elemento.style = ` 
    top: ${250+ tela.comecoy}px;
    bottom: auto;
    left : ${482+tela.comecox}px;
    right: auto; `;
    
}

reset()







function bolinhandandO() {
        if(bola.posicaoY +  tela.comecoy == tela.finaly){

        }


    bola.elemento.style = ` 
    top: ${bola.posicaoY + tela.comecoy}px;
    bottom: auto;
    left: ${bola.posicaoX + tela.comecox}px;
    right: auto; `;

    bola.posicaoY= bola.posicaoY + tela.dif
    bola.posicaoX = bola.posicaoX + tela.dif

    
}

function freme() {
   bolinhandandO()

}
function nivel() {
    tela.dif++
    console.log(tela.dif)
    
}
function comecar() {
    setInterval(nivel,2000)
    setInterval(freme,37)
    
}

