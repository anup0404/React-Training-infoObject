import React, { useReducer, useState } from "react";
import taskReducer, { Action, Task } from "./taskReducer";
import TaskList from "./TaskList";

type props = {
  id: number;
  name: string;
};
const INITIAL_ARTIST: props[] = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
const Reducer = () => {
  const [task, dispatch] = useReducer<React.Reducer<Task[], Action>>(
    taskReducer,
    INITIAL_ARTIST
  );
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<number>(3);

  function handleAdd(name: string, id: number) {
    dispatch({
      type: "added",
      name: name,
      id: id,
    });
  }
  function handleDelete(id: number) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }
  function handleUpdate(task: Task) {
    dispatch({
      type: "update",
      task: task,
    });
  }
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="write your name here"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setId(id + 1);
          handleAdd(name, id);
          setName("");
        }}
      >
        Add
      </button>
      <div>
        <ul>
          {task.map((task: Task) => (
            <li key={task.id}>
              <TaskList
                task={task}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reducer;
