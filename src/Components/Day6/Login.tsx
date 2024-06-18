import React, { useContext, useState } from "react";
import UserContext from "./Context/UserContext";

export type User = { userName: string; password: string };

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userContext = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const newUser: User = { userName, password };
      userContext.setUser(newUser);
      setPassword('');
      setUserName('');
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
