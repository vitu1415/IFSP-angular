import { Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
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
