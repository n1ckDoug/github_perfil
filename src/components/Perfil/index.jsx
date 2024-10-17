import styles from './Perfil.module.css';

// Desestrurando props
const Perfil = ({ nomeUsuario }) => {
    // Desestrurando props
    // const { endereco, nome } = props;
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;