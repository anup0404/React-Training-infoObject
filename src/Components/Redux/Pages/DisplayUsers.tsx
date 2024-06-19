import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Store/Slices/UserSlice'
import { Dispatch } from '@reduxjs/toolkit'

const DisplayUsers = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users
    })
    const deleteUser=(id)=>{
  dispatch(removeUser(id))
    }
  return (
  <>
  {
    data.map((user,id)=>{
        return <li key={id}>{user}
        <button onClick={()=>deleteUser(id)}>Delete</button>
        </li>
    })
  }
  </>
  )
}

export default DisplayUsers