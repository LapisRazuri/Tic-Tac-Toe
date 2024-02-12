
const gameFunctions = (function () {

    //Indices of the board
    let arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
    let turn = 0;



    const computerMark = function (playerSelection) {
        (playerSelection == "O")? compMark = "X" : compMark = "O";

        console.log(compMark)
        console.log(playerSelection)
        
        return compMark;
    };

    const gameBoard = function () {
        const row = [];
        for (let i = 0; i < 3; i++) {
            row[i] = [];
            
            for (let j = 0; j < 3; j++) {
                row[i][j] = 0;
            }
        }
        return row;
    };

    const cellIndexFunction = function () {

        //Takes random item from arrIndex and passes the random index of the board
        const cellIndex = Math.floor(Math.random() * arrIndex.length);
        const cellItem = arrIndex[cellIndex];
        const cellIndex1 = Number(cellItem.charAt(0));
        const cellIndex2 = Number(cellItem.charAt(1));

        arrIndex.splice(cellIndex, 1)

        console.log(cellItem);
        console.log(cellIndex);
        console.log(cellIndex1)
        console.log(cellIndex2)
        console.log(arrIndex)

        return [cellIndex1, cellIndex2];
    };

    const currentMark = function() {
        const compMark = computerMark();

        turn++;
        let currentMark = "";
        (turn % 2 == 0 )? currentMark = playerMark : currentMark = compMark;

        console.log(currentMark)

        return currentMark;
    };

    const clearTheGame = function () {
        arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
        gameBoard();
        turn = 0;

        }

    const checkMarksInARowFunction = function (board) {
        if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X")  || 
            (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")  || 
            (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")  || 
            (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X")  || 
            (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")  || 
            (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")  || 
            (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")  || 
            (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")) {
                compMark == "X"? console.log("Computer is the winner") : console.log("Player is the winner") 
            }
    
    else if ((board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")  || 
             (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")  || 
             (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")  || 
             (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")  || 
             (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")  || 
             (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")  || 
             (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")  || 
             (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")) {
                compMark == "O"? console.log("Computer is the winner") : console.log("Player is the winner")         
        }

    };

    const allSquaresFull = function () {
        arrIndex == []? console.log("Draw") : null; 
    }

    const changeMarkComputer = (function(playerSelection){
        const board = gameBoard();
        const computerMark = computerMark(playerSelection);
        
    
        const changeMarkFunction = function (){
    
            
            
            console.log(board);
            
            
            const cellIndex = cellIndexFunction();
            const mark = currentMark();
            let no1CellIndex =  cellIndex[0];
            let no2CellIndex =  cellIndex[1];
        
            console.log(no1CellIndex)
            console.log(no2CellIndex)
            console.log(mark)
            
            board[no1CellIndex][no2CellIndex] = mark;
        
            
        
            console.log(board);

            return [no1CellIndex, no2CellIndex]
        }
    
        
    
        return {changeMarkFunction};
    })();
   
    return {computerMark, gameBoard, checkMarksInARowFunction, cellIndexFunction, currentMark, allSquaresFull, clearTheGame, changeMarkComputer};

})();