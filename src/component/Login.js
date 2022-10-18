import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

//useDispatch used to modify the value of the state
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            //it is from action.payload
            login({ name: "AAA", age: 20, email: "2668084184gn@gmail.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(
            //it is from action.payload
            logout()
          );
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
