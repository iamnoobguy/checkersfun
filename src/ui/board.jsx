import Square from "./Square"
import Piece from "./Piece"

export default function Board({board,onSquare}) {
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(8,60px)"
    }}>
      {board.map((row,i)=>
        row.map((cell,j)=>(
          <Square
            key={`${i}-${j}`}
            dark={(i+j)%2===1}
            onClick={()=>onSquare(i,j)}
          >
            {cell && <Piece piece={cell}/>}
          </Square>
        ))
      )}
    </div>
  )
}
