import { useState } from "react";

export const Formulario = () => {
  const [materiaA, setMateriaA] = useState("");
  const [materiaB, setMateriaB] = useState("");
  const [materiaC, setMateriaC] = useState("");

  const soma = Number(materiaA) + Number(materiaB) + Number(materiaC);
  const media = soma / 3;

  const mediaAluno = () =>
    media >= 7
      ? `Aprovado com média ${parseInt(media)}`
      : `Reprovado com média ${parseInt(media)}`;

  // lista de alunos
  const alunos = [
    { id: 1, nome: "Luiz", idade: 32 },
    { id: 2, nome: "Ana", idade: 23 },
    { id: 3, nome: "Maria", idade: 21 },
  ];

  return (
    <form>
      {/* mostrando a lista de alunos no site */}
      {alunos.map((a) => (
        // key não pode ter valores iguais
        <li key={a.id}>{a.nome}</li>
      ))}

      {/* não precisa colocar e => alteraNome(e), pois o argumento(e) é injetado pelo react */}
      {/* <input type="text" onChange={alteraNome} /> */}
      {/* ({target}) => setMateriaA(target.value)} -- desestruturação da função */}
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({ target }) => setMateriaA(target.value)}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(e) => setMateriaB(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(e) => setMateriaC(e.target.value)}
      />
      <p>O aluno foi: {mediaAluno()}</p>
    </form>
  );
};
