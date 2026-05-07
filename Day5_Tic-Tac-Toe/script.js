let cells = document.querySelectorAll(".cell");
let status = document.getElementById("status");
let reset = document.getElementById("reset-btn");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
console.log(board);

let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  let index = e.target.dataset.index;

  if (gameOver === true) {
    return;
  }

  if (board[index] !== "") {
    return;
  }

  board[index] = currentPlayer;
  e.target.innerText = currentPlayer;
  console.log(index);

  checkWinner();

  if (gameOver === false) {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

status.innerText = "Player " + currentPlayer + "'s Turn";

}
}

function checkWinner() {
   for (let i = 0; i < winPatterns.length; i++) {
     let a = winPatterns[i][0];
    let b = winPatterns[i][1];
    let c = winPatterns[i][2];

   if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      status.innerText = "Player " + board[a] + " Wins! 🎉";
      gameOver = true;
      return;
    }
   }
}


