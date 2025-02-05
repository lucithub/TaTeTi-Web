function pintarCelda(turn, id){
    let celda = document.getElementById(id);
    if (turn === 1 || turn === undefined){
        celda.style.backgroundColor = "#FF0035";
        turn = 2;
    }
    else {
        celda.style.backgroundColor ="#0000ff";
        turn = 1;
    }
    return turn;
}