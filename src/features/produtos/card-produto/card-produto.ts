import { Component, input, output, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { QuantidadeControle } from '../../../app/shared/quantidade-controle/quantidade-controle';
import { DescontoPipe } from '../../../app/shared/pipes/desconto-pipe';
import { TruncarPipe } from '../../../app/shared/pipes/truncar-pipe';
import { Produto } from '../../../app/core/model/produto';

@Component({
  selector: 'app-card-produto',
  imports: [CommonModule, QuantidadeControle, CurrencyPipe, DescontoPipe, TruncarPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {

  produto = input.required<Produto>();

  view = output<number>();
  add = output<{ id: number, quantidade: number }>();

  qtde = signal(0);

  onView() {
    this.view.emit(this.produto().id);
  }

  onAdd() {
    this.add.emit({ id: this.produto().id, quantidade: this.qtde() });
  }
}
