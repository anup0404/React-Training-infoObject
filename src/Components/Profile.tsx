import './Profile.css'

type ImageProps={
   imageInfo:{
    id:number
    imageUrl:string,
    altInfo:string,
    isPicked:boolean
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
            <li>Improve the videophone {image.isPicked && '✔'}</li>
            <li>Prepare aeronautics lectures {image.isPicked && '✔'}</li>
            <li>Work on the alcohol-fuelled engine {image.isPicked && '✔'}</li>
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