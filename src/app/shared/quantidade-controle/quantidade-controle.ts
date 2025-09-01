import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantidade-controle',
  imports: [],
  templateUrl: './quantidade-controle.html',
  styleUrl: './quantidade-controle.css'
})
export class QuantidadeControle {
  contador = model<number>(1);

  incrementar() {
    this.contador.update(v => v + 1);
  }
  decrementar() {
    if (this.contador() > 1) {
      this.contador.set(Math.max(1, this.contador() - 1));
    }
  }
}
