import { useState } from "react"

type pointerObj={
    x:number,
    y:number
}
const PointerMove = () => {
    const [position,setPosition]=useState<pointerObj>({
        x:0,
        y:0
    })
  return (<>
 <div

 onPointerMove={(e)=>{
    setPosition({
        x:e.clientX,
        y:e.clientY
    })
 }}
 style={{
position:"relative",
width: '100vw',
height:'100vh',
backgroundColor:'black'
 }}
 >
    <div 
    style={
        {   position:'absolute',
            backgroundColor:'red',
            borderRadius:'50%',
            transform:`translate(${position.x}px,${position.y}px)`,
            width:40,
            height:40,
            left:-10,
            top:-10,
        }
    }>

    </div>
 </div>
 </>

  )
}

export default PointerMove