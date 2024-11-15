import { useEffect, useState } from "react";

import styles from "./ReposList.module.css"; // importando estilo

// pegando o nome do usuario através de propiedades
// ({ nomeUsuario }) -- desestruração
export const ReposList = ({ nomeUsuario }) => {
  // criando o estado e armazendo a lista de repositórios
  const [repos, setRepos] = useState([]); // array vazio é o valor inicial

  // criando um feed de carregamento
  const [estaCarregando, setEstadoCarregando] = useState(true);

  // vai ser chamado quando o componente for montado
  useEffect(() => {
    // toda vez que entrar aqui vai carregar o feed
    setEstadoCarregando(true);

    // cria uma lista de array
    // fetch - é uma função do JavaScript que permite realizar requisições HTTP assíncronas entre uma aplicação web e recursos externos
    // e vai retornar uma props(res) como um json
    // o outro tem vai ter a respota json
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`) // pegando o nome do usuario através de propiedades
      .then((res) => res.json())
      .then((resJson) => {
        // setTimeout é só pra colocar uma demora
        setTimeout(() => {
          setEstadoCarregando(false); // o feed de carregamento vai deixar de estar carregando quando fizer o setRepos
          setRepos(resJson); // adicionando o conteudo dentro do useState
        }, 3000);
      });
  }, [nomeUsuario]); // [nomeUsuario] -- executa o conteúdo quando houver alguma mudança na props

  return (
    <div className="container">
      {/* usa o estaCarregando para colocar uma mensagem e depois que carregar vai mostrar o repositorio*/}
      {/* se estiver carregando mostra a mensagem caso contrario mostra o repositorio */}
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        
        <ul className={styles.list}>
          {/* repos.map(( { id, name, language, html_url } ))  -- desestruração */}
          {/* feito isso pode remover o repositorio e deixar só o nome */}
          {repos.map((repositorio) => (
            <li className={styles.listItem} key={repositorio.id}>
              <div className={styles.itemName}>
                <b>Nome:</b> {repositorio.name}
              </div>

              <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {repositorio.language}
              </div>

              <a
                className={styles.itemLink}
                href={repositorio.html_url}
                target="_blank"
              >
                Visite no Github
              </a>
            </li>
          ))}
        </ul>

      )}
    </div>
  );
};
