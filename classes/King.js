import { Piece } from './Piece.js';

/**
 * Class representing the King piece.
 * - Inherits from Piece.
 * - Implements the possible moves: 1 square in any direction.
 */
export class King extends Piece {

  getPossibleMoves(board) {
    const moves = [];
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    for (const [dx, dy] of directions) {
      const newRow = this.row + dx;
      const newCol = this.col + dy;
      if (board.isInBounds(newRow, newCol)) {
        moves.push([newRow, newCol]);
      }
    }
    return moves;
  }
  
}
