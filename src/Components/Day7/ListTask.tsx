import { useContext, useState } from "react";
import { TaskContext } from "./Context/TaskContext";
import { UserType } from "./Context/taskReducerr";

const ListTask = () => {
  const contextData = useContext(TaskContext);
  const [isUpdatable, setIsUpdatable] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<UserType | null>(null);

  if (!contextData) {
    return <div>Loading...</div>;
  }

  function handleDelete(id: number | undefined) {
    contextData.dispatch({
      type: "Delete",
      id: id,
    });
  }

  function handleUpdate(updatedUser: UserType) {
    contextData.dispatch({
      type: "Update",
      task: updatedUser,
    });
  }

  let content;
  if (isUpdatable) {
    content = (
      <ul>
        {contextData.tasks.map((task) => (
          <li key={task?.id}>
            <input
              type="text"
              value={updatedUser?.id === task?.id ? updatedUser?.name : task?.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUpdatedUser({
                  id: task?.id,
                  name: event.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                if (updatedUser) {
                  handleUpdate(updatedUser);
                  setIsUpdatable(false);
                }
              }}
            >
              Save
            </button>
            <button onClick={() => handleDelete(task?.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = (
      <ul>
        {contextData.tasks.map((task) => (
          <li key={task?.id}>
            {task?.name}
            <button
              onClick={() => {
                setIsUpdatable(true);
                setUpdatedUser(task);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(task?.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
};

export default ListTask;
