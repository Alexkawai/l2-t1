
import './App.css';
import React, {useState} from 'react';
import Clicker from './Clicker';

function App() {
   const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Clicker />
      <button onClick = {() => (setCount((prevCount) => prevCount + 1)) }>{count}</button>
    </div>
  );
}

export default App;
