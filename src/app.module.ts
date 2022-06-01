import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService],
})
export class AppModule {}
