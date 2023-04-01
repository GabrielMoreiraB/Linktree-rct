import { useState } from "react";
import "./App.css";
import AddLink from "./components/AddLink";
import Botao from "./components/Botao";
import Header from "./components/Header";
import Link from "./components/Link";

function App() {
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [botoes, setBotoes] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    const botao = {
      id: Math.random(),
      nome,
      link,
    };
    setBotoes([...botoes, botao]);
    setNome("");
    setLink("");
  };
  console.log(botoes)
  return (
    <div className="App">
      <Header />
      <form onSubmit={aoSalvar}>
        <AddLink
          valorLink={link}
          valorNome={nome}
          aoAlteradoNome={setNome}
          aoAlteradoLink={setLink}
        />
        <Botao/>
      </form>
      {botoes.length>0 && <Link botoes={botoes}/> }
      
      
    </div>
  );
}

export default App;
