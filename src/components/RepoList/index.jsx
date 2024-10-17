import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]); // Para armazenar a lista
    const [estaCarregando, setEstaCarregando] = useState(true);

    // Chama quando o componente for montado
    useEffect(() => {
        // Retorna uma props
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`).then(res => res.json()).then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome: </b> {name} <br />
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem: </b> {language} <br />
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RepoList;