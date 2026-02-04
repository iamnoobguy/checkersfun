import { generateMoves } from "../engine/moves"
import { applyMove } from "../engine/applyMove"
import { evaluate } from "./evaluate"

export function minimax(board, depth, alpha, beta, maxP) {
  if (depth === 0) return evaluate(board)
  let player = maxP ? 'r' : 'b'
  let moves = generateMoves(board, player)

  if (maxP) {
    let best = -1e9
    for (let m of moves) {
      let v = minimax(applyMove(board,m), depth-1, alpha, beta, false)
      best = Math.max(best,v)
      alpha = Math.max(alpha,v)
      if (beta <= alpha) break
    }
    return best
  } else {
    let best = 1e9
    for (let m of moves) {
      let v = minimax(applyMove(board,m), depth-1, alpha, beta, true)
      best = Math.min(best,v)
      beta = Math.min(beta,v)
      if (beta <= alpha) break
    }
    return best
  }
}
