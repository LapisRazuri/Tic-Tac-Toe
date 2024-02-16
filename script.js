
const gameFunctions = (function () {
    const square1 = document.getElementById("00");
    const square2 = document.getElementById("01");
    const square3 = document.getElementById("02");
    const square4 = document.getElementById("10");
    const square5 = document.getElementById("11");
    const square6 = document.getElementById("12");
    const square7 = document.getElementById("20");
    const square8 = document.getElementById("21");
    const square9 = document.getElementById("22");
    const displayResult = document.getElementById("displayResult");
    let displayIndex = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
    let arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
    let arrItem = "";
    let playerMark = "O";
    let compMark = "";
    let index = "";
    let cellIndex1 = "";
    let cellIndex2 = "";



    const stringConverter = function (buttonId) {
        arrItem = String(buttonId)


        console.log(typeof arrItem)

        return arrItem;
    }

    const splitArrItem = function () {
        cellIndex1 = Number(arrItem.charAt(0));
        cellIndex2 = Number(arrItem.charAt(1));

        console.log(cellIndex1)
        console.log(cellIndex2)

        return [cellIndex1, cellIndex2];
    };


    const removeIndexFromArray = function (){
        index = arrIndex.indexOf(arrItem);
        arrIndex.splice(index, 1);

        console.log(arrItem)
        console.log(typeof arrItem)
        console.log(arrIndex)

        return arrItem
    }

    const computerMark = function () {
        
        (playerMark == "O")? compMark = "X" : compMark = "O";
        
        return compMark;
    };

    const computerSelectedSquare = function () {
        const randomIndex = Math.floor(Math.random() * arrIndex.length);
        arrItem = arrIndex[randomIndex];

        console.log(randomIndex)
        console.log(arrItem)

        return arrItem;
    }

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

    const boardModification = (function () {
        const board = gameBoard();

        const markBoard = function (compOrPlayerMark) {
            console.log(cellIndex1)
            console.log(cellIndex2)
            board[cellIndex1][cellIndex2] = compOrPlayerMark;

            console.log(compOrPlayerMark)
            console.log(board)
        };

        const threeStraightRowChecker = function () {
            if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X")  || 
                (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")  || 
                (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")  || 
                (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X")  || 
                (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")  || 
                (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")  || 
                (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")  || 
                (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")) {
                    console.log(board[0][0])
                    console.log(compMark)
                    console.log(playerMark)
                    compMark == "X"? displayResult.textContent = "Computer is the winner" : displayResult.textContent = "Player is the winner";
                    return displayResult.textContent;

                    
                } 
        
        else if ((board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")  || 
                 (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")  || 
                 (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")  || 
                 (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")  || 
                 (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")  || 
                 (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")  || 
                 (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")  || 
                 (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")) {
                    console.log(compMark)
                    console.log(playerMark)
                    compMark == "O"? displayResult.textContent = "Computer is the winner" : displayResult.textContent = "Player is the winner";
                    return displayResult.textContent;       
            }
        };

        return {markBoard, threeStraightRowChecker}

    })();

    const displayPlayerMark = function (buttonId) {
        const squarePlayer = document.getElementById(buttonId);
        let squarePlayerIndex = squarePlayer.id;
        

        if (playerMark == "X") {
            const cross = document.createElement("div");
            cross.className = "cross";
            document.getElementById(squarePlayerIndex).appendChild(cross);
            console.log(playerMark)

        }
        else {
            const circle = document.createElement("div");
            circle.className = "circle";
            document.getElementById(squarePlayerIndex).appendChild(circle);
            console.log(playerMark)
        }
        return squarePlayerIndex;
    }

    const displayCompMark = function () {
        for (let i = 0; i < displayIndex.length; i ++) {
            if (displayIndex[i].id == arrItem) {
                console.log(displayIndex[i])
                console.log(displayIndex[i].id)
                if (computerMark() == "X") {
                    const cross = document.createElement("div");
                    cross.className = "cross";
                    document.getElementById(String(displayIndex[i].id)).appendChild(cross);
                }
                else {
                    const circle = document.createElement("div");
                    circle.className = "circle";
                    document.getElementById(String(displayIndex[i].id)).appendChild(circle);
                }
            }
        }
    }

    const allSquaresFull = function () {
        arrIndex == []? displayResult.textContent = "Draw" : null; 

    }

    const clearGame = function () {
        arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
        gameBoard();
        turn = 0;
        }
   
    const chooseMark = (function () {

        const playerChooseO = function () {
            playerMark = "O";
            computerSelectedSquare();
            removeIndexFromArray();
            splitArrItem();
            displayCompMark();
            boardModification.markBoard("X");
        }
        
        const playerChooseX = function () {
            playerMark = "X";
            computerSelectedSquare();
            removeIndexFromArray();
            splitArrItem();
            displayCompMark();
            boardModification.markBoard("O");
        }

        return {playerChooseO, playerChooseX}

    })();

    const play = function (buttonId) {
        console.log(playerMark)
    
        stringConverter(buttonId);
        removeIndexFromArray();
        splitArrItem();
        displayPlayerMark(buttonId);//this is square selected by the player and puts the mark that player chose
        boardModification.markBoard(playerMark);
        allSquaresFull;

        if (boardModification.threeStraightRowChecker() == displayResult.textContent) {
            return ""
        }

        else {
        computerSelectedSquare();
        removeIndexFromArray();
        splitArrItem();
        displayCompMark();
        boardModification.markBoard(compMark);
        boardModification.threeStraightRowChecker();
        allSquaresFull;

        }

        

    }
    
    return {computerMark, computerSelectedSquare, allSquaresFull, 
            clearGame, displayCompMark, play, chooseMark, removeIndexFromArray, 
            stringConverter, splitArrItem, boardModification};
})();
