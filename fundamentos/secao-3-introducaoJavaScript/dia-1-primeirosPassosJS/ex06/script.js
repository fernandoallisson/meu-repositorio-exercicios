/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer. */


let rainha;


switch(rainha){
    case up:{
        return res = "A rainha poderá subir x casas"
    } break
    case down:{
        return res = "A rainha poderá descer x casas"
    } break
    case diagonalLeftUp:{
        return res = "A rainha poderá ir a dianonal esquerda pra cima x casas"
    } break
    case diagonalRightUp:{
        return res = "A rainha poderá ir a diagonal esquerda pra cima x casas"
    } break
    case diagonalLeftDown:{
        return res = "A rainha poderá ir a dianonal esquerda pra baixo x casas"
    } break
    case diagonalRightDown:{
        return res = "A rainha poderá ir a diagonal esquerda pra baixo x casas"
    } break

    default: "Movimento inválido"
}