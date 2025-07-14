import { Piece } from './Piece.js';

/**
 * Pawn piece — moves forward 1 square, or 2 from its starting position.
 * Captures diagonally (not yet implemented).
 */
export class Pawn extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.value = 1;
  }
  
  getPossibleMoves(board) {
    const moves = [];
    const direction = this.color === "White" ? -1 : 1;
    const startRow = this.color === "White" ? 6 : 1;

    // One square forward
    const oneStep = this.row + direction;
    if (board.isInBounds(oneStep, this.col)) {
      moves.push([oneStep, this.col]);
    }

    // Two squares forward from starting position
    const twoStep = this.row + 2 * direction;
    if (this.row === startRow && board.isInBounds(twoStep, this.col)) {
      moves.push([twoStep, this.col]);
    }

    // Diagonal captures 
    for (const dy of [-1, 1]) {
      const diagRow = this.row + dir;
      const diagCol = this.col + dy;
      if (board.isInBounds(diagRow, diagCol)) {
        const target = board.grid[diagRow][diagCol];
        if (target && target.color !== this.color) {
          moves.push([diagRow, diagCol]);
        }
      }
    }

    return moves;
  }
}