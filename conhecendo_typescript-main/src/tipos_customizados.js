"use strict";
const alunos = [
    {
        nome: 'Manoela',
        cursos: ['Front-End', 'UX/UI'],
        idade: 18
    },
    {
        nome: 'Aline',
        cursos: ['Front-End', 'Python'],
        idade: 44
    }
];
alunos.push({
    nome: 'Marcelo',
    cursos: ['Arquitetura'],
    idade: 55
});
const novoAluno = {
    nome: 'Maristela',
    idade: 62
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
;
