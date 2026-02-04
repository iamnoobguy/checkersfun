import Square from "./Square"

export default function Board({board,onSquare}) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(8,60px)"}}>
      {board.map((r,i)=>r.map((c,j)=>(
        <Square
          key={i+j}
          dark={(i+j)%2}
          onClick={()=>onSquare(i,j)}>
          {c && <div style={{
            width:40,height:40,
            borderRadius:"50%",
            background:c.toLowerCase()==='r'?"red":"black",
            border:c===c.toUpperCase()?"3px solid gold":"none"
          }}/>}
        </Square>
      )))}
    </div>
  )
}
