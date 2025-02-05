colores = ["#FF0035", "#175F6C"];
const WINNING_COMBINATIONS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function pintarCelda(turn, id){
    let celda = document.getElementById(id);
    if (turn === 1 || turn === undefined){
        celda.style.backgroundColor = "#FF0035";
        turn = 2;
        if(isThereWinner(1, celda)){
            alert("Ganó el circulo! Felicidades!");
            location.reload();
        }
    } else {
        celda.style.backgroundColor = "#0000ff";
        turn = 1;
        if(isThereWinner(2, id)){
            alert("Ganó la cruz! Felicidades!");
            location.reload();
        }
    }
    return turn;
}

function isThereWinner(turn){
    let color = turn === 1 ? "#FF0035" : "#0000ff";
    
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++){
        let [a, b, c] = WINNING_COMBINATIONS[i];
        if (document.getElementById(a).style.backgroundColor === color &&
            document.getElementById(b).style.backgroundColor === color &&
            document.getElementById(c).style.backgroundColor === color){
            return true;
        }
    }
    return false;
}