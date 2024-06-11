import './Profile.css'

type ImageProps={
   imageInfo:{
    id:number
    imageUrl:string,
    altInfo:string,
    isPicked:boolean,
    list:string[]
   }[],
}
const Profile = (props:ImageProps) => {
  return (
    <>
    <div className="container">
    {props.imageInfo.map((image)=>{
        return(
            <>
            <div key={image.id}className='containerInfo'>
            <img src={image.imageUrl} alt={image.altInfo}/>
            <ul>
             {image.list.map((list)=>{
               return <li> {list} {image.isPicked && '✔'}</li>
             })}
          
          </ul>
          </div>
          </>
        )
    })}
   </div>
    </>
  )
}

export default Profile