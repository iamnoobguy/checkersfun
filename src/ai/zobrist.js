const PIECES = ['r','R','b','B']
const TABLE = {}
let INIT = false

function rand64() {
  return BigInt.asUintN(
    64,
    (BigInt(Math.floor(Math.random()*1e9)) << 32n) ^
    BigInt(Math.floor(Math.random()*1e9))
  )
}

export function initZobrist() {
  if (INIT) return
  for (let i=0;i<8;i++)
    for (let j=0;j<8;j++)
      for (let p of PIECES)
        TABLE[`${i}${j}${p}`] = rand64()
  TABLE.turnR = rand64()
  INIT = true
}

export function zobristHash(board, player) {
  initZobrist()
  let h = 0n
  for (let i=0;i<8;i++)
    for (let j=0;j<8;j++) {
      let p = board[i][j]
      if (p) h ^= TABLE[`${i}${j}${p}`]
    }
  if (player === 'r') h ^= TABLE.turnR
  return h.toString()
}
