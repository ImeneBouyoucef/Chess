const board = document.getElementById("chessboard");

const initialPosition = [
  ["BlackRook", "BlackKnight", "BlackBishop", "BlackQueen", "BlackKing", "BlackBishop", "BlackKnight", "BlackRook"],
  Array(8).fill("BlackPawn"),
  ...Array(4).fill(Array(8).fill(null)),
  Array(8).fill("WhitePawn"),
  ["WhiteRook", "WhiteKnight", "WhiteBishop", "WhiteQueen", "WhiteKing", "WhiteBishop", "WhiteKnight", "WhiteRook"],
];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Alternating colors: (row + collar) even → white, odd → black
    square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");

    const pieceName = initialPosition[row][col];
    if (pieceName) {
      const img = document.createElement("img");
      img.src = `images/${pieceName}.png`;  // ex: images/WhiteKnight.png
      img.alt = pieceName;
      square.appendChild(img);
    }
    
    board.appendChild(square);
  }
}
