import { King } from './King.js';
import { Queen } from './Queen.js';
import { Rook } from './Rook.js';
import { Bishop } from './Bishop.js';
import { Knight } from './Knight.js';
import { Pawn } from './Pawn.js';

/**
 * Represents the chessboard and manages the state of all pieces.
 */
export class Board {
  constructor() {
    this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    this.initPieces();
  }

  /**
   * Initializes all pieces on their starting squares.
   */
  initPieces() {
    // Black pieces
    this.grid[0][0] = new Rook("Black", 0, 0);
    this.grid[0][1] = new Knight("Black", 0, 1);
    this.grid[0][2] = new Bishop("Black", 0, 2);
    this.grid[0][3] = new Queen("Black", 0, 3);
    this.grid[0][4] = new King("Black", 0, 4);
    this.grid[0][5] = new Bishop("Black", 0, 5);
    this.grid[0][6] = new Knight("Black", 0, 6);
    this.grid[0][7] = new Rook("Black", 0, 7);
    for (let col = 0; col < 8; col++) {
      this.grid[1][col] = new Pawn("Black", 1, col);
    }

    // White pieces
    this.grid[7][0] = new Rook("White", 7, 0);
    this.grid[7][1] = new Knight("White", 7, 1);
    this.grid[7][2] = new Bishop("White", 7, 2);
    this.grid[7][3] = new Queen("White", 7, 3);
    this.grid[7][4] = new King("White", 7, 4);
    this.grid[7][5] = new Bishop("White", 7, 5);
    this.grid[7][6] = new Knight("White", 7, 6);
    this.grid[7][7] = new Rook("White", 7, 7);
    for (let col = 0; col < 8; col++) {
      this.grid[6][col] = new Pawn("White", 6, col);
    }
  }

  /**
   * Checks if a square is inside the board boundaries.
   */
  isInBounds(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  /**
   * Renders the board and pieces inside the given HTML container.
   * @param {string} containerId - The ID of the container element.
   */
  render(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");

        const piece = this.grid[row][col];
        if (piece) {
          const img = document.createElement("img");
          img.src = `images/${piece.getImageName()}`; 
          img.alt = piece.constructor.name;
          square.appendChild(img);
        }

        container.appendChild(square);
      }
    }
  }
}