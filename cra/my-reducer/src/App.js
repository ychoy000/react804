//import './App.css';
import { useState } from 'react';
import { useReducer} from 'react';


function App() {
  const [number, setNumber] = useState(1);

  function changeNumber() {

  }
  // 회계 직원
  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }
  // const [변수, 함수] = useReducer(함수, 초깃값);
 const [count, countDispatch] = useReducer(countReducer,0);

  function down() {
    // 비유: 창구 직원
    countDispatch({type: "DOWN", number: number});
  }
  function reset() {
    countDispatch({type: "RESET", number: number});
  }
  function up() {
    countDispatch({type: "UP", number: number});
  }

  function changeNumber(event) {
    console.log('event', typeof(event.target.value));
    setNumber(event.target.value);
  }  
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset}  />
      <input type="button" value="+" onClick={up}  />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}

export default App;
