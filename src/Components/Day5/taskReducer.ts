
export type Task={
    id:number,
    name:string
}

export type Action={type:"added",id:number,name:string} 
|{type:"deleted",id:number}
|{type:"update",task:Task}
|{type:"Wrong selection"}


export default function taskReducer(task:Task[], action:Action) {
  switch (action.type) {
    case "added": {
      return [
        ...task,
        {
          id: action.id,
          name: action.name,
        },
      ];
    }
    case "deleted": {
      return task.filter((task:Task) => task.id !== action.id);
    }
    case "update": {
      return task.map((task:Task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    }
    default: {
      throw Error("Unknown action  : " + action.type);
    }
  }
}
