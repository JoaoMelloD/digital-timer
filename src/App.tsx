import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState(0);
  const [valor, setValor] = useState(0);
  const [on, setOn] = useState(false);

  function temporizador() {
    const tempo = setInterval(() => {
      const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      console.log(hora);
      setValor(tempo)
    }, 1000);
  }

  function Desligar() {}

  function Ligar() {
    //temporizador ligado
    setOn(true);
    if (on === true) {
      temporizador();
    }
  }

  return (
    <div>
      <h1>TIMER: {valor}</h1>
      <button onClick={Ligar}>Start</button>
      <button onClick={Desligar}>Stop</button>
    </div>
  );
}

export default App;
