import './App.css'
import miLogo from "./assets/img/messi.webp"

function App() {

  return (
    <>
      <div>
        <img src={miLogo} width={300} alt="Logo de React" />
        <h1>Lionel Messi</h1>
        <p>El mejor jugador del mundo.</p>
      </div>
    </>
  )
}

export default App