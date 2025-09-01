import { Component } from '@angular/core';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Banner } from "./core/banner/banner";
import { Produto } from './core/model/produto';
import { ListaProdutos } from './core/features/produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  produto: Produto = {
    id: 1,
    nome: 'Produto 1',
    preco: 79.9,
    descricao: 'teste da descricao',
  }

  sobre? : string;

  receberSobre(texto: string) {
    this.sobre = texto;
  }
}