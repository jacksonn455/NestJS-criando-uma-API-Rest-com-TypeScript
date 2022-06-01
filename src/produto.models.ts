export class Produto {
    id: number;
    codigo: string;
    nome: string;
    preco: number;

    constructor(codigo: string, nome: string, preco: number) {
        // atribuindo valor as propriedades
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}