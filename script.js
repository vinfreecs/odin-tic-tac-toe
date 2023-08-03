// const Gameboard = (() => {
//   let gameboardArray = [null, null, null, null, null, null, null, null, null];
//   const Player = (symbol) => {
//     const saySymbol = () => symbol;
//   };
//   function play(symbol) {
//     const cells = document.querySelectorAll(".cell");
//     cells.forEach((cell) => {
//       cell.addEventListener("click", () => {
//         cell.innerHTML = symbol;
//         gameboardArray[parseInt(cell.id)] = symbol;
//         console.log(gameboardArray);
//         console.log("clicked");
//       });
//     });
//     return()
//   }
//   const player1 = Player("X");
//   const player2 = Player("O");
//   console.log(gameboardArray);
//   while()
// })();

let gameboardArray = [null, null, null, null, null, null, null, null, null];
const ans = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];
const Player = (symbol) => {
  const saySymbol = () => symbol;
  let positions = [];
  const addPosition = (num) => {
    positions.push(num);
  };
  const showPos = () => positions;
  const clearPos = () => positions.splice(0,positions.length)
  return { saySymbol, addPosition, showPos, clearPos };
};
const player1 = Player("X");
const player2 = Player("O");
let currentPlayer = player1.saySymbol();
function reset(){
    player1.clearPos();
    player2.clearPos();
    cells.forEach((cell) => {
        cell.textContent = "";
    })
    gameboardArray = [null, null, null, null, null, null, null, null, null];
    currentPlayer = player1.saySymbol();
    console.log(currentPlayer)
}
function check(arr) {
  if (arr.length >= 3) {
    console.log("entered");
    ans.forEach((a) => {
        if(a.every(ele => arr.includes(ele))){
            console.log(`${currentPlayer} won`)
        }
    })
  }
}
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameboardArray[parseInt(cell.id)] == null) {
      cell.textContent = currentPlayer;
      console.log(currentPlayer)
      gameboardArray[parseInt(cell.id)] = currentPlayer;
      if (currentPlayer == player1.saySymbol()) {
        player1.addPosition(parseInt(cell.id));
        check(player1.showPos());
        currentPlayer = player2.saySymbol();
        console.log(player1.showPos());
      } else {
        player2.addPosition(parseInt(cell.id));
        check(player2.showPos());
        currentPlayer = player1.saySymbol();
        console.log(player2.showPos());
      }
    } else {
      alert("already used");
    }
    
    
  });
});

