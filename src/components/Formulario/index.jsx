import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('Componente iniciou');

        return () => {
            console.log('Componente finalizou');
        }
    }, []);

    useEffect(() => {
        console.log('o estado nome mudou');
    }, [nome]);

    useEffect(() => {
        console.log('materia A mudou para: ' + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (e) => {
        // setNome(e.target.value);
        setNome(estadoAnterior => {
            return e.target.value;
        });
    }

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado com média de: {parseInt(media)}</p>
            )
        } else {
            return (
                <p>Olá {nome}, NÃO foi aprovado sua média foi de apenas: {parseInt(media)}</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={e => alteraNome(e)} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {resultado()}
        </form>
    )
}

export default Formulario;