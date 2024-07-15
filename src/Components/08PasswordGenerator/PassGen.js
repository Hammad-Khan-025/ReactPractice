import React, {useCallback} from "react";

export default function PassGen() {
  const [length, setLength] = React.useState(8);
  const [number, setNumber] = React.useState(false);
  const [character, setCharacter] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [copied, setCopied] = React.useState(false); // State to track if copied

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "~!@#$%^&*(/{[)_+}]|";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  const passwordRef = React.useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard?.writeText(password);
    setCopied(true); // Set copied to true after copying
    setTimeout(() => {
      setCopied(false); // Reset copied to false after 2 seconds
    }, 2000);
  }, [password]);

  React.useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-500">
        <div className="bg-white bg-opacity-80 py-10 px-5 sm:px-10 rounded-lg shadow-2xl tracking-wider max-w-96 mx-5 sm:max-w-[550px]">
          <h1 className="text-center mb-10 text-2xl sm:text-3xl  font-bold">
            Password Generator
          </h1>
          <div className="flex">
            <input
              type="text"
              className="border-2 rounded-s-full py-2 px-5 w-full sm:w-96 focus:border-blue-500 focus:outline-none"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="py-2 px-5 font-bold rounded-e-full border-2 bg-blue-500 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-700"
              onClick={copyToClipBoard}
            >
              {copied ? "Copied" : "Copy"}{" "}
              {/* Conditional rendering of button text */}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 font-semibold">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <h1>Length: {length}</h1>
            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={number}
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />{" "}
              <label htmlFor="">Number</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={character}
                onChange={() => {
                  setCharacter((prev) => !prev);
                }}
              />{" "}
              <label htmlFor="">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
