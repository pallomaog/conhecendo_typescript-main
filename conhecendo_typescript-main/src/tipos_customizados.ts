type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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

const novoAluno: aluno = {
    nome: 'Maristela',
    idade: 62
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
};