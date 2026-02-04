export default function Piece({piece}) {
  const color = piece.toLowerCase() === 'r' ? 'red' : 'black'
  const king = piece === piece.toUpperCase()

  return (
    <div style={{
      width:40,
      height:40,
      borderRadius:"50%",
      background: color,
      border: king ? "4px solid gold" : "none",
      boxSizing:"border-box"
    }}/>
  )
}
