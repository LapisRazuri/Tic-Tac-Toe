
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



    function stringConverter (buttonId) {
        arrItem = String(buttonId)

        console.log(arrItem)

        return arrItem;
    }

    // function addSquareMarked () {
    //     markedSquares.push(arrItem);
    // }


    function splitArrItem () {
        cellIndex1 = Number(arrItem.charAt(0));
        cellIndex2 = Number(arrItem.charAt(1));

        return [cellIndex1, cellIndex2];
    };



    function removeIndexFromArray (){

        index = arrIndex.indexOf(arrItem);
        console.log(arrItem)
        console.log(index)
        if (index == -1) {

            console.log(arrItem)
        console.log(arrIndex)
        console.log(index)

        console.log(arrIndex)
        
           return false;
        }

        else {
            arrIndex.splice(index, 1);

            console.log(arrItem)
        console.log(arrIndex)
        console.log(index)

        console.log(arrIndex)

        return true;
        }
    }

  

     function computerMark () {
        
        (playerMark == "O")? compMark = "X" : compMark = "O";
        
        return compMark;
    };

    function computerSelectedSquare () {
        const randomIndex = Math.floor(Math.random() * arrIndex.length);
        arrItem = arrIndex[randomIndex];

        return arrItem;
    }

    function gameBoard () {
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
        let board = gameBoard();

        const markBoard = function (compOrPlayerMark) {
                board[cellIndex1][cellIndex2] = compOrPlayerMark;

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
          
                    compMark == "O"? displayResult.textContent = "Computer is the winner" : displayResult.textContent = "Player is the winner";
                    return displayResult.textContent;       
            }
        };

        const clearGame = function () {
            arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
            board = gameBoard();

            for (let i = 0; i < displayIndex.length; i ++) {
                const squares = displayIndex[i];
                
                squares.lastElementChild? squares.lastElementChild.remove() : null;

                console.log(squares)

              
                
            }
            console.log(board)
            console.log(arrIndex)
            }

        return {markBoard, threeStraightRowChecker, clearGame}

    })();

    function displayPlayerMark (buttonId) {
        const squarePlayer = document.getElementById(buttonId);
        let squarePlayerIndex = squarePlayer.id;

        

        if (playerMark == "X") {
            const cross = document.createElement("div");
            cross.className = "cross";
            document.getElementById(squarePlayerIndex).appendChild(cross);
          

        }
        else {
            const circle = document.createElement("div");
            circle.className = "circle";
            document.getElementById(squarePlayerIndex).appendChild(circle);
           
        }
        return squarePlayerIndex;
    }

    function displayCompMark () {
        for (let i = 0; i < displayIndex.length; i ++) {
            if (displayIndex[i].id == arrItem) {
               
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


    function allSquaresFull () {
        arrIndex == []? displayResult.textContent = "Draw" : null; 

    }

    function playerChoose (mark) {
        playerMark = String(mark);
        computerSelectedSquare();
        // addSquareMarked();
        removeIndexFromArray();
        splitArrItem();
        displayCompMark();
        boardModification.markBoard(compMark);
    }   

    function play (buttonId) {
            stringConverter(buttonId);

            if (removeIndexFromArray() == true) {
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
            else {
                return alert("That square is already selected");
            }

        }
            
        
    
       
    
    return {playerChoose, play, boardModification};
})();
