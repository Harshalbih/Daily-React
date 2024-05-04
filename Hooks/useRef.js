//useRef to count rerenders
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//useRef to acceess DOM directly*

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const inputElem = useRef();

    const focusInput=() =>{
        inputElem.current.focus();

    }

    return (
        <>
        <input ref={inputElem} />
        <button onClick={focusInput}>focus</button>
        </>
    )
}
