/**
 * Abstract class representing a generic chess piece.
 * - Stores position (row, col) and color ("White" or "Black").
 * - Defines the interface `getPossibleMoves(board)` to be implemented by subclasses.
 * - Prevents direct instantiation (acts like an interface/abstract class).
 */
export class Piece {
  constructor(color, row, col) {
    if (this.constructor === Piece) {
      throw new Error("Abstract class 'Piece' cannot be instantiated directly.");
    }
    this.color = color; // "White" or "Black"
    this.row = row;
    this.col = col;
    this.value = 0; // default value (should be overridden)
  }

  getImageName() {
    return `${this.color}${this.constructor.name}.png`; // e.g., WhiteQueen.png
  }

  getPossibleMoves(board) {
    throw new Error("Method 'getPossibleMoves()' must be implemented.");
  }
}
