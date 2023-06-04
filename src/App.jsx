import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";


function App() {
const [personaje, setPersonaje] = useState({})
useEffect(()=> {
consultarAPI()
}, [])

const consultarAPI = async ()=> {
  try{
    // peticion get
    const respuestas = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const dato = await respuestas.json()
      console.log(dato[0])
      setPersonaje(dato[0])
  }
  catch (error){

  }
}

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personaje={personaje} />
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
