import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function Loginn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customAlert, setCustomAlert] = useState(false);

  const {setUser} = useContext(UserContext)

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setUser({name, email, password})
    if (name === "" || email === "" || password === "") {
      setCustomAlert(true);
    } else {
      navigate("/main");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <form className="flex flex-col bg-white w-96 gap-10 px-5 py-10 sm:px-10 rounded tracking-wider">
        {customAlert && (
          <p className="text-red-500">Please fill out the empty fields.</p>
        )}

        <input
          type="text"
          placeholder="Name *"
          className={`border-b p-1 focus:outline-none focus:border-b-blue-500 ${
            customAlert && !name ? "border-b-red-500" : "border-b-gray-200"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email *"
          className={`border-b p-1 focus:outline-none focus:border-b-blue-500 ${
            customAlert && !email ? "border-b-red-500" : "border-b-gray-200"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password *"
          className={`border-b p-1 focus:outline-none focus:border-b-blue-500 ${
            customAlert && !password ? "border-b-red-500" : "border-b-gray-200"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white font-medium py-2 text-center rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginn;
