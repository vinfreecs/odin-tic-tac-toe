const Gameboard = (() => {
  let gameboardArray = [null, null, null, null, null, null, null, null, null];
  const status = document.querySelector(".status p");
  let game = true;
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
    const clearPos = () => positions.splice(0, positions.length);
    return { saySymbol, addPosition, showPos, clearPos };
  };
  const player1 = Player("X");
  const player2 = Player("O");
  let currentPlayer = player1.saySymbol();
  function check(arr) {
    if (arr.length >= 3 && arr.length < 5) {
      ans.forEach((a) => {
        if (a.every((ele) => arr.includes(ele))) {
          let winner = currentPlayer;
          status.textContent = `${winner} is the winner`;
          game = false;
        }
      });
    } else if (arr.length == 5) {
      ans.forEach((a) => {
        if (a.every((ele) => arr.includes(ele))) {
          let winner = currentPlayer;
          status.textContent = `${winner} is the winner`;
          game = false;
        } else {
          console.log("entered");
          game = false;
          status.textContent = "this game is a tie";
        }
      });
    }
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (gameboardArray[parseInt(cell.id)] == null && game) {
        cell.textContent = currentPlayer;
        console.log(currentPlayer);
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
      }
    });
  });
  function reset() {}
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    player1.clearPos();
    player2.clearPos();
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    gameboardArray = [null, null, null, null, null, null, null, null, null];
    currentPlayer = player1.saySymbol();
    console.log(currentPlayer);
    status.textContent = "";
    game = true;
  });
})();
