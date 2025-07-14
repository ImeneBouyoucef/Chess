import { Piece } from './Piece.js';

/**
 * Knight piece — moves in an "L" shape: 2 squares in one direction, then 1 perpendicular.
 */
export class Knight extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.value = 3;
  }

  getPossibleMoves(board) {
    const moves = [];
    const offsets = [
      [-2, -1], [-2, 1],
      [-1, -2], [-1, 2],
      [1, -2], [1, 2],
      [2, -1], [2, 1],
    ];
    for (const [dx, dy] of offsets) {
      const newRow = this.row + dx;
      const newCol = this.col + dy;
      if (board.isInBounds(newRow, newCol)) {
        moves.push([newRow, newCol]);
      }
    }
    return moves;
  }
}