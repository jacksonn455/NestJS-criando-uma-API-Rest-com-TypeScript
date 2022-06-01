import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"; //para que o nest saiba que é um controller
import { Produto } from "./produto.models";
import { ProdutosService } from "./produtos.service"; // importar no AppModule

@Controller('produtos') //rota do produto (importar dentro de app.module.ts)
export class ProdutoController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obeterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obeterUm(params.id);
    }

    @Post()
    criar(@Body() produto: Produto){
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params){
        this.produtosService.apagar(params.id);
    }
}