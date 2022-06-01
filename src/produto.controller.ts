import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"; //para que o nest saiba que é um controller
import { Produto } from "./produto.models";
import { ProdutosService } from "./produtos.service"; // importar no AppModule

@Controller('produtos') //rota do produto (importar dentro de app.module.ts)
export class ProdutoController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    async obterTodos(): Promise<Produto[]> {
        return this.produtosService.obeterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Produto> {
        return this.produtosService.obeterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: Produto){
        this.produtosService.criar(produto);
    }

    @Put()
    async alterar(@Body() produto: Produto): Promise<[number,Produto[]]> {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    async apagar(@Param() params){
        this.produtosService.apagar(params.id);
    }
}