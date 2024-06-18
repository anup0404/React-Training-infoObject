import { createContext } from "react";
import { User } from "../Login";

type UserContextType = {
    user: User,
    setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
    user: {
        userName: "",
        password: "" 
    },
    setUser: () => {} 
});

export default UserContext;
