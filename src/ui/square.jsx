export default function Square({dark,children,onClick}) {
  return (
    <div
      onClick={onClick}
      style={{
        width:60,height:60,
        background: dark ? "#444" : "#ddd",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
      {children}
    </div>
  )
}
