import { useDispatch } from "react-redux"
import { fakeUserData } from "../API"
import DeleteAllUsers from "./DeleteAllUsers"
import { addUser } from "../Store/Slices/UserSlice"
import DisplayUsers from "./DisplayUsers"

const UsersDetails = () => {

  const dispatch=useDispatch();
    const addNewUser=(payload)=>{
     dispatch(addUser(payload))
    }
  return (
    <div>
        <div>
            <div>List Of user details</div>
            <button onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
        </div>
        <ul>
           <DisplayUsers/>
        </ul>
        <hr/>
        <DeleteAllUsers/>
    </div>
  )
}

export default UsersDetails