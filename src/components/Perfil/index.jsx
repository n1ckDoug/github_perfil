import styles from './Perfil.module.css' // importando o estilo

// argumento é a props
// isso da acesso a um obj
// e dentro desse obj a gnt tem as propiedades e atributos que foram passados
const Perfil = ({ nomeUsuario }) => {
    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;