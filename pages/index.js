import { useState } from "react";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Contador />
      <h3>Nova versao atualizada</h3>
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}
export default Home;
