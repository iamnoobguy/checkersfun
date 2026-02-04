import React, { useState } from "https://esm.sh/react@18"
import Board from "./ui/board.js"
import { initialBoard } from "./engine/board.js"
import { generateMoves } from "./engine/moves.js"
import { applyMove } from "./engine/applyMove.js"

export default function App() {
  const [board, setBoard] = useState(initialBoard())
  const [sel, setSel] = useState(null)
  const [turn, setTurn] = useState("r")

  function click(i, j) {
    if (!sel) {
      if (board[i][j]?.toLowerCase() === turn) setSel([i, j])
    } else {
      const moves = generateMoves(board, turn)
      const m = moves.find(
        (x) =>
          x.from[0] === sel[0] &&
          x.from[1] === sel[1] &&
          x.to[0] === i &&
          x.to[1] === j
      )
      if (m) {
        setBoard(applyMove(board, m))
        setTurn(turn === "r" ? "b" : "r")
      }
      setSel(null)
    }
  }

  return React.createElement(Board, { board, onSquare: click })
}