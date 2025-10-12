import { Component } from '@angular/core';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Banner } from "./core/banner/banner";
import { Produto } from './core/model/produto';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  sobre? : string;

  receberSobre(texto: string) {
    this.sobre = texto;
  }
}