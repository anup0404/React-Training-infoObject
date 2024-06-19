import React from 'react'
import { deleteUsers } from '../Store/Slices/UserSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const DeleteAllUsers = () => {
const dispatch=useDispatch()

    const clearAll=(state)=>{
        dispatch(deleteUsers(state));
    }
  return (
    <div onClick={()=>clearAll()}>DeleteAllUsers</div>
  )
}

export default DeleteAllUsers