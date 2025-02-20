let turn = 1; // Inicializamos el turno en 1 (círculo)

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

        function isThereWinner(currentTurn) {
            const color = currentTurn === 1 ? "#FF0035" : "#0000ff";
            
            return WINNING_COMBINATIONS.some(combination => {
                return combination.every(position => 
                    document.getElementById(position).style.backgroundColor === color
                );
            });
        }

        function pintarCelda(id) {
            const celda = document.getElementById(id);
            
            // Evitar pintar celdas ya marcadas
            if (celda.style.backgroundColor) return;

            if (turn === 1) {
                celda.style.backgroundColor = "#FF0035"; // Rojo para círculo
                if(isThereWinner(1)) {
                    alert("¡Ganó el círculo! ¡Felicidades!");
                    location.reload();
                    return;
                }
                turn = 2;
            } else {
                celda.style.backgroundColor = "#0000ff"; // Azul para X
                if(isThereWinner(2)) {
                    alert("¡Ganó la cruz! ¡Felicidades!");
                    location.reload();
                    return;
                }
                turn = 1;
            }
        }