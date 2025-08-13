//import './App.css';
import { useState } from 'react';


let count = 0;

function App() {
  const [count, setCount] = useState(0);
  
  
  function down() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function up() {
    setCount(count + 1);
  }
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset}  />
      <input type="button" value="+" onClick={up}  />
      <span>{count}</span>
    </div>
  );
}

export default App;
