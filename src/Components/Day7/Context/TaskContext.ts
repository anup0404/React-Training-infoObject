import { createContext } from "react";
import { Action, UserType } from "./taskReducerr";



type TaskContextType={
    tasks:UserType[],
    dispatch:React.Dispatch<Action>
}
export const TaskContext=createContext<TaskContextType>({
    tasks:[],
    dispatch:()=>null
});
export const TaskDispatchContext=createContext(null);