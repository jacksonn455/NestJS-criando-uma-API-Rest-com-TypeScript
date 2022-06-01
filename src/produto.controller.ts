import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"; //para que o nest saiba que é um controller
import { Produto } from "./produto.models"; //importando o modelo de produto

@Controller('produtos') //rota do produto (importar dentro de app.module.ts)

export class ProdutoController {

    produtos: Produto[] = [
        new Produto('COD001', 'Produto 01', 10.90),
        new Produto('COD002', 'Produto 02', 20.20),
        new Produto('COD003', 'Produto 03', 30.10)
    ]; //array de produtos

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `lista um produto ${params.id}`;
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto);        
        return 'produto criado';
    }

    @Put()
    alterar(@Body() produto): string {
        console.log(produto);        
        return 'produto atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `apagado produto ${params.id}`;
    }
}