import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produto.controller';
import { ProdutosService } from './produtos.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Produto } from './produto.models';
import 'dotenv/config'
const DB_HOST: string = (process.env.DB_HOST as string);
const DB_USER: string = (process.env.DB_USER as string);
const DB_PASS: string = (process.env.DB_PASS as string);
const DB_NAME: string = (process.env.DB_NAME as string);

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
