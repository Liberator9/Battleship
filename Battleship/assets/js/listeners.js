///Author: Nnamdi Nwanze
//Purpose: create a listeners that listens for clicks for a Battleship game

//addEventListeners to listen for user clicks on the game board and then take the appropriate actions.
document.querySelector("#gametable").addEventListener('click', e => {
    const tableElement = e.target;
console.log(hasClass(e.target, "vessel"));
    if ((tableElement !== null) && (tableElement.tagName.toLowerCase() === "td")) {
        if (e.target.innerHTML === "" ) {
            var style = gamePlay.Battleship.makeMove([e.target.parentNode.rowIndex-1,e.target.cellIndex]);
            addClass(e.target,style);
            if (style === "missed")
                changeText(tableElement, style);
            else changeText(tableElement, style[0].toUpperCase());
            gamePlay.isGameOver();
        }else {
            addMessage("You already clicked there");
        }
    }
});

//addEventListeners to listen for restart button which restarts the game.
document.querySelector("#resetButton").addEventListener('click', e => {
    //Reset Game
    gamePlay.reset();
});
