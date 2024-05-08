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
            td.textContent = num;
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


function makeMove(id){
    isValid(id);
    isWin(id);
    console.log("Works: ", id);
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
    const table = createBoard();
    // makeClickable(table);
}


// whose turn it is (x starts)




// check for win

// if true, show play again button

// boom done
