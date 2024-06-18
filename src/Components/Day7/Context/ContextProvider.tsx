import React, { ReactNode, useReducer } from 'react'
import {  TaskContext } from './TaskContext';
import { Action, UserType, taskReducerr } from './taskReducerr';


  type props={
    children:ReactNode
  }


  const INITIAL_ARTIST: UserType[] = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson"},
  ];

const ContextProvider = ({children}:props) => {
   const[tasks,dispatch]= useReducer<React.Reducer<UserType[],Action>>(taskReducerr,INITIAL_ARTIST);
  return (
    <TaskContext.Provider value={{tasks,dispatch}}>
     {children}
    </TaskContext.Provider>
  )
}

export default ContextProvider