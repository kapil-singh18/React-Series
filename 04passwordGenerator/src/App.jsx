import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook : here used only to select the input text in password which is going to be copied
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_+[]{}<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 99999); /* to select in range input */
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6 ">
          Password Generator
        </h2>

        {/* Password Display with Copy */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none"
            placeholder="Your password will appear here"
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            // disabled={!password}
            className="ml-2 px-3 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg disabled:opacity-50 transition"
          >
            Copy
          </button>
        </div>


        {/* Length Slider */}
        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">
            Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-4 w-4 accent-blue-500"
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              checked={symbolAllowed}
              onChange={() => setSymbolAllowed((prev) => !prev)}
              className="h-4 w-4 accent-blue-500"
            />
            <span>Include Symbols</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
