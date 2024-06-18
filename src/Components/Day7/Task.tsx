import React, { useContext, useState } from 'react'
import { TaskContext } from './Context/TaskContext'
import { UserType } from './Context/taskReducerr';


const Task = () => {
    const contextData=useContext(TaskContext);
    const[user,setUser]=useState<UserType>(undefined);

    function handleAdd(user:UserType){
        contextData?.dispatch({
            type:"Added",
            task:user     
        }
       
)
    }
  return (
    <>
    <input type='text'
     onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({
            id:nextId++,
            name: event.target.value});
     }
     }
    
    />
    <button
    onClick={()=> handleAdd(user)}
    >Add</button>
    
    </>
  )
}
let nextId=3;
export default Task