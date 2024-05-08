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
            td.id = board[i][j];
            td.textContent = " ";
            // event listener to see what square is selected
            td.addEventListener('click',function(evt){
                isValid(td.id);
                isWin(td.id);
            })
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

// is valid square
function isValid(id){
    if (id.textContent !== " "){
        return false;
    }
    else{
        if (player1){
            id.textContent = "X";
        }
        else{
            id.textContent = "O";
        }
        return true;
    }
}

function isWin(id){
    // FIXME

}
// init
function init(){
    createBoard();
    
}


// whose turn it is (x starts)




// check for win

// if true, show play again button

// boom done
