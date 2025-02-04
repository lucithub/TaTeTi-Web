function pintarCelda(turn, id){
    let celda = document.getElementById(id);
    if (turn === 1 || turn === 0){
        celda.style.backgroundColor = "#FF0035";
        turn = 2;
    }
    else {
        celda.style.backgroundColor =rgb(25, 0, 255);
        turn = 1;
    }
    return turn;
}