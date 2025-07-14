import { Piece } from './Piece.js';

/**
 * Rook piece — moves horizontally or vertically any number of squares until blocked.
 */
export class Rook extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.value = 5;
  }

  getPossibleMoves(board) {
    const moves = [];
    const directions = [
      [-1, 0], [1, 0], // vertical
      [0, -1], [0, 1], // horizontal
    ];
    for (const [dx, dy] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = this.row + dx * i;
        const newCol = this.col + dy * i;
        if (!board.isInBounds(newRow, newCol)) break;
        moves.push([newRow, newCol]);

        const target = board.grid[newRow][newCol];
        if (target === null) {
          moves.push([newRow, newCol]);
        } else {
          if (target.color !== this.color) {
            moves.push([newRow, newCol]);
          }
          break;
        }
      }
    }
    return moves;
  }
}