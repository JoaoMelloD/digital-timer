import { useEffect, useState } from "react";

function App() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [ligar, setLigar] = useState(false)


  useEffect(() => {
   
    return (()=>{
      setInterval(setarTimer, 1000)
    })
  }, [ligar]);


  function setarTimer() {
    let horaAtual = new Date();
    setHoras(horaAtual.getHours());
    setMinutos(horaAtual.getMinutes());
    setSegundos(horaAtual.getSeconds());
  }

  function handleLigar() {
    if (ligar === false) {
      setLigar(true);
    } else {
      setLigar(false)
    }
  }



  return (
    <div>
      <h1>Timer</h1>
      <div>{`${horas}:${minutos}:${segundos}`}</div>
      <button onClick={handleLigar}>Ligar</button>

    </div>
  );
}

export default App;
