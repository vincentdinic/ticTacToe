// basic script for tic tac toe game vincent di nicolantonio

// function to make board
function createBoard(){
    const board = [
        ["11", "12", "13"], 
        ["21", "22", "23"], 
        ["31", "32", "33"] 
        ];
    const table = document.getElementById("gameBoard");
    for (let i = 0; i < 3; i++){
        const tr = document.createElement('tr');
        for (let j = 0; j < 3; j++){
            const td = document.createElement('td');
            td.textContent = board[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

// init
function init(){
    createBoard();
    
}
// while ! hasWon

// whose turn it is (x starts)

// event listener to see what square is selected

// is valid square

// check for win

// if true, show play again button

// boom done
