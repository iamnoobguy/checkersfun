import React from "https://esm.sh/react@18"
import Square from "./square.js"
import Piece from "./piece.js"

export default function Board({ board, onSquare }) {
  const squares = []
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const cell = board[i][j]
      squares.push(
        React.createElement(
          Square,
          {
            key: `${i}-${j}`,
            dark: (i + j) % 2 === 1,
            onClick: () => onSquare(i, j),
          },
          cell ? React.createElement(Piece, { piece: cell }) : null
        )
      )
    }
  }

  return React.createElement(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(8,60px)",
      },
    },
    squares
  )
}