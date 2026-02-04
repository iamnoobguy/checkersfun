export const EMPTY = 0
export const R = 'r'
export const B = 'b'
export const RK = 'R'
export const BK = 'B'

export function initialBoard() {
  return [
    [0,'b',0,'b',0,'b',0,'b'],
    ['b',0,'b',0,'b',0,'b',0],
    [0,'b',0,'b',0,'b',0,'b'],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    ['r',0,'r',0,'r',0,'r',0],
    [0,'r',0,'r',0,'r',0,'r'],
    ['r',0,'r',0,'r',0,'r',0],
  ]
}

export function cloneBoard(b) {
  return b.map(r => r.slice())
}

export function countPieces(board, player) {
  let c = 0
  for (let r of board)
    for (let p of r)
      if (p && p.toLowerCase() === player) c++
  return c
}
