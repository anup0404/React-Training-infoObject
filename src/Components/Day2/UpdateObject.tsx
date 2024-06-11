import React, { useState } from 'react'

type  Obj={
  name:string,
  artWork:{
    title:string,
    city:string,
    image:string
  }
}

const UpdateObject = () => {
  const [objectData,setObjectData]=useState<Obj>(
    {
      name:'Anup',
      artWork:{
        title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCW-Jx7WpULfSFUcjMjoQSclEhay44yYJ_w&s',
      }
    }
      );
  return (
   <>
   <form onSubmit={(e)=>{
    e.preventDefault();
alert("data successfully updated.....")
   }}>
   <label htmlFor="name">Name :  
    <input type="text" 
    value={objectData.name}
     onChange={(e)=>{
      setObjectData({
        ...objectData,
        name:e.target.value
      })

     }}
    />
   </label>
   <br/>
   <label htmlFor="title">Title :  
    <input type="text"
    value={objectData. artWork.title} 
     onChange={(e)=>{
      setObjectData({
        ...objectData,
        artWork:{
          ...objectData.artWork,
          title:e.target.value
        }
      })

     }}
    />
   </label>
   <br/>
   <label htmlFor="city">City :  
    <input type="text"
    value={objectData.artWork.city} 
     onChange={(e)=>{
      setObjectData({
        ...objectData,
        artWork:{
          ...objectData. artWork,
          city:e.target.value
        }
      })

     }}
    />
   </label>
   <br/>
   <label htmlFor="Image">Image :  
    <input type="text"
    value={objectData.artWork.image}
     onChange={(e)=>{
      setObjectData({
        ...objectData,
        artWork:{
          ...objectData. artWork,
          image:e.target.value
        } 
      })
     }}
    />
   </label>
   <br/>
   <button type="submit">Update</button>
   </form>
   <div>

   <h2>Name: {objectData.name}</h2>
   <h2>title : {objectData.artWork.title}</h2>
   <h2>city : {objectData.artWork.city}</h2>
   <h2><img src={objectData.artWork.image} alt='this is a picture'/></h2>

   </div>
   </>
  )
}

export default UpdateObject