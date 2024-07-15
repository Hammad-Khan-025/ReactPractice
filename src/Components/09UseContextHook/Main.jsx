import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Main() {

  const {user} = useContext(UserContext)

  return (
    <>
      <nav className="bg-gray-200 h-16 flex items-center ps-5">
        <h1 className="text-2xl sm:text-3xl font-thin capitalize">Welcome, {user.name}</h1>
      </nav>

      <main className="flex justify-center items-center h-[calc(100vh-64px)] text-lg sm:text-xl">
        <div className="flex justify-center w-full sm:w-96 py-10 bg-gray-200 rounded">
          <div className="flex flex-col gap-5 px-3">
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Password : {user.password}</h1>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white font-medium py-2 text-center text-base rounded"
            >
              <button>Log out</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
