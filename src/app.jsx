import { useState } from "react"
import Board from "./ui/Board"
import { initialBoard } from "./engine/board"
import { generateMoves } from "./engine/moves"
import { applyMove } from "./engine/applyMove"

export default function App() {
  const [board,setBoard] = useState(initialBoard())
  const [sel,setSel] = useState(null)
  const [turn,setTurn] = useState('r')

  function click(i,j) {
    if (!sel) {
      if (board[i][j]?.toLowerCase()===turn) setSel([i,j])
    } else {
      let moves = generateMoves(board,turn)
      let m = moves.find(
        x=>x.from[0]===sel[0] && x.from[1]===sel[1] &&
           x.to[0]===i && x.to[1]===j
      )
      if (m) {
        setBoard(applyMove(board,m))
        setTurn(turn==='r'?'b':'r')
      }
      setSel(null)
    }
  }

  return <Board board={board} onSquare={click}/>
}
