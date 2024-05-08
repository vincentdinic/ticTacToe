// basic script for tic tac toe game vincent di nicolantonio

// function to make board
function createBoard(callback){
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
            const num = board[i][j];
            td.id = num;
            td.textContent = " ";
            // event listener to see what square is selected
            td.addEventListener('click', function(){
                makeMove(num)}
            );
            tr.appendChild(td);
                   
            
        }
        table.appendChild(tr);
    }
    return table;
}
// whose turn it is (x starts)
var player1 = true;


// change turn
function changeTurn(){
    player1 = !player1;
}

function makeMove(id){
    
    isValid(id);
    
    isWin(id);
    console.log("Works: ", id);
    console.log("Turn: ", player1)
}

// is valid square
function isValid(id){
    var cell = document.getElementById(id);
    
    if (cell.textContent !== " "){
        return false;
    }
    else{
        if (player1){
            cell.textContent = "X";
        }
        else{
            cell.textContent = "O";
        }
        changeTurn();
        return true;
    }
}

function isWin(id){
    return true;
}
// init
function init(){
    createBoard();
    
}







// check for win

// if true, show play again button

// boom done
