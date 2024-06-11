


type EventProps={
    handleClick:()=>void,
   
}
const Event = (props:EventProps) => {
  return (
    <>
    <button onClick={props.handleClick}>Play Movie</button>
    </>
  )
}

export default Event