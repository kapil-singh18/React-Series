import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("value added", counter);
    // counter = counter + 1;
    if (counter < 20) {

      setCounter(counter + 1)
    }
    else {
      alert("you can not set counter more than 20 !")
    }
  }

  const removeValue = () => {
    console.log("value removed", counter);
    // counter = counter - 1;
    if (counter > 0) {

      setCounter(counter - 1)
    }
    else {
      alert("you can not set counter less than 0 !")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
