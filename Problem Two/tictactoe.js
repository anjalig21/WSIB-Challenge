/* Applicant: Anjali Gupta

Thought Process:
- Create tic-tac-toe board with objects
- List out all winning combinations
- Print tic-tac-toe board each time player switches
- Need a function that alternates between players and takes in command line input
- Need winning function that checks for diagonal, vertical and horizontal wins 
- Need function that checks for a tie

Instructions:
This is a command-line tic-tac-toe game. 
Players X and O alternate and choose their positions on the following board:

1 2 3
------
4 5 6
------
7 8 9  

Coded in JavaScript */

var prompt = require("prompt");

var winComb = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

var board = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
};

function printBoard() {
  count = 1;
  s = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      s += `${board[count]}`;
      if (j !== 2) {
        s += " ";
      }
      count += 1;
    }
    console.log(s);
    s = "";
    if (i !== 2) {
      console.log("-----");
    }
  }
}

function validMove(pos) {
  if (board[`${pos}`] !== " " || pos > 9 || pos < 1) {
    return false;
  } else {
    return true;
  }
}

function makeMove(pos, move) {
  board[pos] = move.toUpperCase();
}

function isWinner(player) {
  for (let i = 0; i < winComb.length; i++) {
    let count = 0;
    for (let j = 0; j < winComb.length; j++) {
      if (board[winComb[i][j]] === player) {
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
  }
  return false;
}

function isTie() {
  for (let i = 0; i < Object.keys(board).length; i++) {
    if (board[i] === " ") {
      return false;
    }
  }
  return true;
}

function playGame(player) {
  console.log(`It is ${player}'s turn!`);
  prompt.start();
  prompt.get(["pos"], function (err, res) {
    if (validMove(parseInt(res.pos))) {
      makeMove(res.pos, player);
      console.log("\n");
      printBoard();
      console.log("\n");
      if (isWinner(player)) {
        console.log(`${player} Wins!`);
        return;
      }
      if (isTie()) {
        console.log("It's a tie game!");
        return;
      }
      if (player === "X") {
        playGame("O");
      } else if (player === "O") {
        playGame("X");
      }
    } else {
      console.log("\nThat is not a valid move! Try again!\n");
      playGame(player);
    }
  });
}

function gameStarted() {
  console.log(
    "\n" +
      "The game has started!\n" +
      "Please type the number according to the space in the board below that you want to play!\n\n" +
      " 1 2 3 \n" +
      " ----- \n" +
      " 4 5 6 \n" +
      " ----- \n" +
      " 7 8 9 \n"
  );
}

function startGame() {
    gameStarted();
    playGame("X");
}

startGame();
