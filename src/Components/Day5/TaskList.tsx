import React, { useState } from "react";
import { Task } from "./taskReducer";

type props = {
  task: Task;
  handleDelete: (id:number) => void;
  handleUpdate: (task:Task) => void;
};
const TaskList = ({ task, handleDelete, handleUpdate }: props) => {
    const[isUpdatable,setIsUpdatable]=useState(false);
  let content;
  if(isUpdatable) {
        content = (
      <>
        <input
          value={task.name}
          onChange={(e :React.ChangeEvent<HTMLInputElement>) => {
           handleUpdate({
              ...task,
              name: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsUpdatable(false)}>Save</button>
      </>
    );
  }
  else{
    content = (
        <>
          {task.name}
          <button onClick={() => setIsUpdatable(true)}>Edit</button>
        </>
      );
  }
  return(
    <>
      <label>
      {content}
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </label>
  </>
  )
};

export default TaskList;
