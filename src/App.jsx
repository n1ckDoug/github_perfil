import { useState } from "react";

import Perfil from "./components/Perfil";
import { ReposList } from "./components/ReposList";

function App() {
  // deixando o nome do usuário dinâmico
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      {/* buscando nome de usuário */}
      {/* onBlur -- quando terminar de preencher o campo ele vai fazer a requisição */}
      {/* (e) => setNomeUsuario(e.target.value) -- é para passar o que for escrito para a const */}
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {/* renderiza Perfil e ReposList apena quando o nomeUsuario for preenchido */}
      {/* quando tamanho do texto for maior que 4 renderiza */}
      {nomeUsuario.length > 4 &&(
          <>
            {/* omeUsuario='n1ckDoug' -- é a propiedade/atributo -- Pefil é uma tag customizada */}
            <Perfil nomeUsuario={nomeUsuario} />

            {/* passando o nome do usuario através de propiedades */}
            <ReposList nomeUsuario={nomeUsuario} />
          </>
        )}
    </>
  );
}

export default App;
