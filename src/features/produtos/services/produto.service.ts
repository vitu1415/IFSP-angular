import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { LoggerService } from '../../../app/core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../app/core/model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private http = inject(HttpClient);
  
  private apiUrl = 'https://fakestoreapi.com/Products';


  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar() - consumindo API externa');
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(lista => lista.map(item => ProdutoMapper.fromJson(item))),
      catchError(err => {
        this.logger.error('[ProdutoService] listar() - erro ao consumir API', err);
        return of([]);
      })
    );
  }

  // getById(id: number): Observable<Produto | undefined>{
  //   this.logger.info('Obtendo produto por id...');
  //   return of(this.listaMock.find(p => p.id === id)).pipe(delay(500));
  // }
}
