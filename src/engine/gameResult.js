import { countPieces } from "./board.js"
import { generateMoves } from "./moves.js"

export function gameResult(state) {
  const { board, player, reps, noCap } = state

  if (countPieces(board, player) === 0) return "LOSS"
  if (generateMoves(board, player).length === 0) return "LOSS"

  const key = JSON.stringify(board)+player
  reps[key] = (reps[key]||0)+1
  if (reps[key] === 3) return "DRAW"

  if (noCap >= 100) return "DRAW"
  return "ONGOING"
}
