// Tipos Primitivos

let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 18;

let altura: number = 1.64;

const nacionalidade: string = 'brasileira';

const colegas: string[] = ['Manoela', 'Aline', 'Marcelo'];
const tecnologias: Array<string> = ['html', 'css', 'js'];
const notas: ReadonlyArray<number> = [1, 2, 3]; // Apenas leitura: o método 'push' (adicionar item) não pode ser usado neste tipo de array.

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Manoela', true, 18];

let idadeDaManoela: number | string = 18;
idadeDaManoela = '18 anos';

let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';