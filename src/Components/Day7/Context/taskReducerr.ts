export type Action = {
  type: "Added";
  task:UserType
}|{
  type:"Delete";
  id:number|undefined
}|{
  type:'Update'
  task:UserType
}
;

export type UserType = {
    id: number|undefined;
    name: string;
  }|undefined;

export function taskReducerr(state:UserType[], action: Action) {
  switch (action.type) {
    case "Added": {
      return [...state, action.task];
    }
    case "Delete": {
      return state.filter((task:UserType)=>task?.id!==action.id)
    }
    case "Update": {
      return [...state, action.task];
    }
    default:return state;
  }
}
