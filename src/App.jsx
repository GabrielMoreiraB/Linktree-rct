import { useState } from 'react'
import './App.css'
import AddLink from './components/AddLink'
import Botao from './components/Botao';
import Header from './components/Header'

function App() {
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [botoes, setBotoes] = useState("[]");


  const aoSalvar = (evento) => {
    evento.preventDefault();

    const botao = {
      nome,
      link
    }
    setBotoes([...botoes, botao])
    setNome("")
    setLink("")
  }
  return (
    <div className="App">
      <Header/>
    <form onSubmit={aoSalvar}>
      <AddLink
      valorLink ={link}
      valorNome ={nome}
      aoAlteradoNome ={setNome}
      aoAlteradoLink ={setLink} 
      />
    </form>
    <Botao botoes={botoes}/>
    </div>
  )
}

export default App
