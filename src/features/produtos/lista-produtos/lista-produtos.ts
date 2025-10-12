import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProduto } from '../card-produto/card-produto';
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { LoggerService } from '../../../app/core/services/logger/logger.service';
import { Produto } from '../../../app/core/model/produto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutos {
  loading = signal(true);
  private produtoService = inject(ProdutoService);
  private router = inject(Router);
  logger = inject(LoggerService);

  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar()
  .pipe(finalize(() => this.loading.set(false))), {
    initialValue: []
  });

  apenasPromo = signal(false);
  filtrarCategoria = signal(null as string | null);

  prodExibidos = computed(() => {
    let lista = this.produtos();

    if (this.apenasPromo()) {
      lista = lista.filter(p => p.promo);
    }

    if (this.filtrarCategoria()) {
      lista = lista.filter(p => p.categoria === this.filtrarCategoria());
    }

    return lista;
  });

  alterarPromo() {
    this.apenasPromo.update(p => !p);
  }

  alterarFiltrarCategoria(categoria: string | null) {
    if (categoria === 'null' || categoria === '') {
      this.filtrarCategoria.set(null);
    } else {
      this.filtrarCategoria.set(categoria);
    }
  }

  onViewProduct(id: number) {
    this.router.navigate(['/produtos', id]);
  }

  onAddToCart(produto: { id: number; quantidade: number }) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantidade}`);
  }

  categorias = computed(() => {
    const todasCategorias = this.produtos().map(p => p.categoria);
    return Array.from(new Set(todasCategorias));
  });
}