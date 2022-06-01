import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.models";

@Injectable() //Para transformar uma classe em provider
export class ProdutosService{
    produtos: Produto[] = [
/*         new Produto('COD001', 'Produto 01', 10.90),
        new Produto('COD002', 'Produto 02', 20.20),
        new Produto('COD003', 'Produto 03', 30.10) */
    ]; //array de produtos

    obeterTodos(): Produto[] {
        return this.produtos;
    }

    obeterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}