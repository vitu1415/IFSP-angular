import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>();
  
  textoSobre = output<string>();

  eviarSobre() {
    this.textoSobre.emit('Tecnica de programacao 1 - Desenvolvido por Vitor :)');
  }
}
