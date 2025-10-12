import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListaProdutos } from '../produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ListaProdutos],
  templateUrl: './home.html',
})
export class Home {

}
