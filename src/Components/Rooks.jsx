import React,{useState} from "react";
//npm install -s rooks
//https://react-hooks.org/docs/useDidMount
import { useToggle } from "rooks";
import { useDebounce } from "rooks";

export default function App() {
  const [state, toggle] = useToggle(true);

  return (
    <div className="App">
      <h1>Rooks: useToggle Example </h1>
      <br></br>
      <button onClick={toggle} style={{ cursor: "pointer" }}>
        {state ? <span>Yes! 👍</span> : <span>No! 👎</span>}
      </button>
      <hr>
      </hr>
      <App1/>
    </div>
  );
}


function App1() {
  const [value, setValue] = useState("");
  const setValueDebounced = useDebounce(setValue, 500);

  return (
    <div>
      <input
        onChange={e => setValueDebounced(e.target.value)}
        placeholder="Please type here"
      />
      <div>{value}</div>
    </div>
  );
}

