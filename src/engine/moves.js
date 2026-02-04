const DIRS = {
  r: [[-1,-1],[-1,1]],
  b: [[1,-1],[1,1]],
  R: [[-1,-1],[-1,1],[1,-1],[1,1]],
  B: [[-1,-1],[-1,1],[1,-1],[1,1]],
}

export function generateMoves(board, player) {
  let caps = [], norms = []

  for (let i=0;i<8;i++)
    for (let j=0;j<8;j++) {
      let p = board[i][j]
      if (!p || p.toLowerCase() !== player) continue

      for (let [dx,dy] of DIRS[p]) {
        let ni=i+dx, nj=j+dy
        let ci=i+2*dx, cj=j+2*dy

        if (board[ni]?.[nj] &&
            board[ni][nj].toLowerCase() !== player &&
            board[ci]?.[cj] === 0)
          caps.push({from:[i,j],to:[ci,cj],cap:[ni,nj]})

        else if (board[ni]?.[nj] === 0)
          norms.push({from:[i,j],to:[ni,nj]})
      }
    }
  return caps.length ? caps : norms
}
