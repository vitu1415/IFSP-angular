import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { LoggerService } from '../../../app/core/services/logger/logger.service';
import { Produto } from '../../../app/core/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Teclado Mecânico',
      preco: 1200,
      descricao: 'Switch blue. RGB.',
      imageUrl: 'images/keyboard.jpg',
      promo: true,
      estado: 'usado'
    },
    {
      id: 2,
      nome: 'Mouse Gamer 7200 DPI',
      preco: 649.5,
      descricao: '10 botões, macro programável.',
      imageUrl: 'images/mouse.jpg',
      estado: 'novo'
    },
    {
      id: 3,
      nome: 'Headset Surround 7.1',
      preco: 899.9,
      descricao: 'Microfone com redução de ruido.',
      imageUrl: 'images/headset.jpg',
      estado: 'esgotado'
    }
  ];

  listar(): Observable<Produto[]>{
    this.logger.info('Obtendo lista de produtos...');
    return of(this.listaMock);
  }
  getById(id: number): Observable<Produto | undefined>{
    this.logger.info('Obtendo produto por id...');
    return of(this.listaMock.find(p => p.id === id)).pipe(delay(500));
  }
}
