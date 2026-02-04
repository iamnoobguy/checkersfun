import { cloneBoard, RK, BK } from "./board.js"

export function applyMove(board, m) {
  let b = cloneBoard(board)
  let [x,y] = m.from
  let [nx,ny] = m.to
  let p = b[x][y]

  b[x][y] = 0
  b[nx][ny] = p

  if (m.cap) {
    let [cx,cy] = m.cap
    b[cx][cy] = 0
  }

  if (p === 'r' && nx === 0) b[nx][ny] = RK
  if (p === 'b' && nx === 7) b[nx][ny] = BK

  return b
}
