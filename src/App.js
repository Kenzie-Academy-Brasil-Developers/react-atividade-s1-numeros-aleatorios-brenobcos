import './styles.css'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function randomNumber(){
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
      <span className='Number'> {number} </span>
      <button onClick={randomNumber} className='button-number'> Criar novo número </button>
      </header>
    </div>
  );
}

export default App;
