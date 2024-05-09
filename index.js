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
        tr.id = i+1
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
    
    const row = id.substring(0,1);
    const col = id.substring(1, 2);
    if (checkRow(row) || checkCol(col) ||
    checkDiagLR() || checkDiagRL()){
        
        showModal();
        
        return true;
    }

    return false;

}

function checkRow(row){
    const left = document.getElementById(row + 1);
    const mid = document.getElementById(row + 2);
    const right = document.getElementById(row + 3);

    const leftCell = left.textContent;
    const midCell = mid.textContent;
    const rightCell = right.textContent;
    
    // if row is all X or O
    if (leftCell == "X" && midCell == "X" && rightCell == "X" ||
        leftCell == "O" && midCell == "O" && rightCell == "O"
    ){
        console.log("WIN");
        left.style.backgroundColor = "green";
        mid.style.backgroundColor = "green";
        right.style.backgroundColor = "green";
        return true;
    }
    else{
        return false;
    }
}

function checkCol(col){
    // gets data from col cells
    const left = document.getElementById(1 + col);
    const mid = document.getElementById(2 + col);
    const right = document.getElementById(3 + col);
    
    const leftCell = left.textContent;
    const midCell = mid.textContent;
    const rightCell = right.textContent;
    
    // if col is all X or O
    if (leftCell == "X" && midCell == "X" && rightCell == "X" ||
        leftCell == "O" && midCell == "O" && rightCell == "O"
    ){
        console.log("WIN");
        left.style.backgroundColor = "green";
        mid.style.backgroundColor = "green";
        right.style.backgroundColor = "green";
        return true;
    }
    else{
        return false;
    }
}
function checkDiagLR(){
    // data from diagonals
    const left = document.getElementById(11);
    const mid = document.getElementById(22);
    const right = document.getElementById(33);
    
    const leftCell = left.textContent;
    const midCell = mid.textContent;
    const rightCell = right.textContent;
    
    
    // if diag is all X or O
    if (leftCell == "X" && midCell == "X" && rightCell == "X" ||
        leftCell == "O" && midCell == "O" && rightCell == "O"
    ){
        console.log("WIN");
        left.style.backgroundColor = "green";
        mid.style.backgroundColor = "green";
        right.style.backgroundColor = "green";
        return true;
    }
    else{
        return false;
    }
}

function checkDiagRL(){
    const left = document.getElementById(13);
    const mid = document.getElementById(22);
    const right = document.getElementById(31);
    
    const leftCell = left.textContent;
    const midCell = mid.textContent;
    const rightCell = right.textContent;
    
    // if diag is all X or O
    if (leftCell == "X" && midCell == "X" && rightCell == "X" ||
        leftCell == "O" && midCell == "O" && rightCell == "O"
        ){
        console.log("WIN");
        left.style.backgroundColor = "green";
        mid.style.backgroundColor = "green";
        right.style.backgroundColor = "green";
        return true;
    }
    else{
        return false;
    }
}

function showModal(){
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const closeModalBtn = document.querySelector(".btn-close");
    const newGameBtn = document.querySelector(".btn-new")
    
    
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    
    const closeModal = function(){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    
    newGameBtn.addEventListener("click", function(){
        clearGame();
        createBoard();
        closeModal();
    });
}   
function clearGame(){
    document.querySelector("tr").remove();
    document.querySelector("tr").remove();
    document.querySelector("tr").remove();
}

// init
function init(){
    createBoard();
    
}








// boom done
