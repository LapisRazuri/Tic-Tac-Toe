
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
    let turn = 0;



    function stringConverter (buttonId) { 
        arrItem = String(buttonId)

        return arrItem;
    };

    function splitArrItem () {
        cellIndex1 = Number(arrItem.charAt(0));
        cellIndex2 = Number(arrItem.charAt(1));

        return [cellIndex1, cellIndex2];
    };

    function removeIndexFromArray (){
        index = arrIndex.indexOf(arrItem); //if the arrItem does not exist in the array indexOf will return -1
        console.log(arrItem)               //prevent putting mark when the player tries to select already selected square
        console.log(index)
        if (index == -1) { 
        
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
    };

    function computerMark () {
        
        (playerMark == "O")? compMark = "X" : compMark = "O";
        
        return compMark;
    };

    function computerSelectedSquare () {
        const randomIndex = Math.floor(Math.random() * arrIndex.length);
        arrItem = arrIndex[randomIndex];

        console.log(arrItem)

        return arrItem;
    };

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

                    compMark == "X"? displayResult.textContent = "Computer wins!" : displayResult.textContent = "Player wins!";
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
          
                    compMark == "O"? displayResult.textContent = "Computer wins!" : displayResult.textContent = "Player wins!";
                    return displayResult.textContent;       
            }
      
        };

        const clearGame = function () {
            arrIndex = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
            board = gameBoard();
            displayResult.textContent = "";
            turn = 0;

            for (let i = 0; i < displayIndex.length; i ++) {
                const squares = displayIndex[i];
                
                squares.lastElementChild? squares.lastElementChild.remove() : null; 
            }
          
        };

        return {markBoard, threeStraightRowChecker, clearGame}

    })();

    function displayPlayerMark (buttonId) {
        const squarePlayer = document.getElementById(buttonId);
        let squarePlayerIndex = squarePlayer.id;

        

        if (playerMark == "X") {
            const cross = document.createElement("div");
            cross.className = "cross";
            document.getElementById(squarePlayerIndex).appendChild(cross);
            delay(cross, 'drawn', 0)
            delay(cross, 'drawnLater', 0)

        }
        else {
            const circle = document.createElement("div");
            circle.className = "circle";
            document.getElementById(squarePlayerIndex).appendChild(circle);
            circle.classList.add('rightCircle');
        }
        return squarePlayerIndex;
    };

    function displayCompMark () {
        for (let i = 0; i < displayIndex.length; i ++) {
            if (displayIndex[i].id == arrItem) {
               
                if (computerMark() == "X") {
                    const cross = document.createElement("div");
                    cross.className = "cross";
                    document.getElementById(String(displayIndex[i].id)).appendChild(cross);
                    delay(cross, 'drawn', 500);
                    delay(cross, 'drawnLater', 850);
                                 
                }
                else {
                    const circle = document.createElement("div");
                    circle.className = "circle";
                    document.getElementById(String(displayIndex[i].id)).appendChild(circle);
                    delay(circle, 'topCircle', 100)
                    delay(circle, 'leftCircle', 180);
                    delay(circle, 'bottomCircle', 220);
                    delay(circle,'rightCircle', 300);
                }
            }
        }
    };

    function delay (element, className, sec) {
        setTimeout(function() {
            element.classList.add(className);
        }, sec); 
    };


    function allSquaresFull () {
        console.log(arrIndex)
        arrIndex.length === 0 ?displayResult.textContent = "Draw!": null;

    };

    function playerChoose (mark) {
        playerMark = String(mark);
        computerMark();
    }   

    function compGoFirst () {
        turn++;
        if (turn <= 1 ) {
            computerSelectedSquare();
            removeIndexFromArray();
            splitArrItem();
            displayCompMark();
            boardModification.markBoard(compMark);
        }
    };

    function play (buttonId) {
            stringConverter(buttonId);

        if (removeIndexFromArray() == true ) { //if the square is not selected by player before
            splitArrItem();
            displayPlayerMark(buttonId);
            boardModification.markBoard(playerMark);
            console.log(arrIndex)
        
    
            if (boardModification.threeStraightRowChecker() == displayResult.textContent) {
                return "" 
            }
            else {
                if (arrIndex.length === 0) {
                    allSquaresFull();
                    return displayResult.textContent
                } 
                else {
                computerSelectedSquare();
                removeIndexFromArray();
                splitArrItem();
                displayCompMark();
                boardModification.markBoard(compMark);
                boardModification.threeStraightRowChecker();
                allSquaresFull();
                }   
            }
            
        }
        else {
            return alert("That square is already selected");
        } 
    };
              
    
    return {playerChoose, compGoFirst, play, boardModification};
})();
