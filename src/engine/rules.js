export function isPlayerPiece(piece, player) {
  return piece && piece.toLowerCase() === player
}

export function isOpponentPiece(piece, player) {
  return piece && piece.toLowerCase() !== player
}

export function isKing(piece) {
  return piece === piece?.toUpperCase()
}

export function opponent(player) {
  return player === 'r' ? 'b' : 'r'
}
