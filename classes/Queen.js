import { Piece } from './Piece.js';

/**
 * Queen piece — combines rook and bishop movements.
 */
export class Queen extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.value = 9;
  }

  getPossibleMoves(board) {
    const moves = [];
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],     // Rook-like moves
      [-1, -1], [-1, 1], [1, -1], [1, 1],   // Bishop-like moves
    ];
    for (const [dx, dy] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = this.row + dx * i;
        const newCol = this.col + dy * i;
        if (!board.isInBounds(newRow, newCol)) break;

        moves.push([newRow, newCol]); const target = board.grid[newRow][newCol];
        if (target === null) {
          moves.push([newRow, newCol]);
        } else {
          if (target.color !== this.color) {
            moves.push([newRow, newCol]); // capture
          }
          break; // stop in all cases if there's a piece
        }
      }
    }
    return moves;
  }
}