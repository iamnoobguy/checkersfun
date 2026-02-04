export function evaluate(board) {
  let s = 0
  for (let r of board)
    for (let p of r) {
      if (p === 'r') s+=100
      if (p === 'R') s+=175
      if (p === 'b') s-=100
      if (p === 'B') s-=175
    }
  return s
}
